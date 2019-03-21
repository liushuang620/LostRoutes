/**
 * Created by tu on 2018/11/21.
 */
GamePlayLayer = cc.Layer.extend({
    ctor : function(){
        this._super();
        cc.log("GamePlayScene ctor");
        this.fighter = null;
        this.space = null;
        this.touchFighterlistener = null;
        this.menu = null;
        this.score = 0;
        this.scorePlaceholder = 0;

        this.initPhysics();
        this.initBG();
        this.scheduleUpdate();
        return true;
    },
    
    initPhysics : function(){
        this.space = new cp.Space();
        this.space.gravity = cp.v(0, 0);  //物体不受重力影响
        this.space.addCollisionHandler(Collision_Type.Bullet, Collision_Type.Enemy, this.collisionBegin.bind(this), null, null, null);
    },

    update : function(dt){
        var timeStep = 0.03;
        this.space.step(timeStep);
    },
    
    initBG : function(){
        var bg = new cc.TMXTiledMap("res/map/blueBg.tmx");
        this.addChild(bg, 0, GameSceneNodeTag.BatchBackground);

        //发光粒子背景
        var ps = new cc.ParticleSystem("res/particle/light.plist");
        ps.x = winSize.width / 2;
        ps.y = winSize.height / 2;
        this.addChild(ps, 0, GameSceneNodeTag.BatchBackground);

        //背景精灵1
        var sp1 = new cc.Sprite("#gameplay.bg.sprite-1.png");
        sp1.setPosition(cc.p(-50, -50));
        this.addChild(sp1, 0, GameSceneNodeTag.BatchBackground);

        var ac1 = cc.moveBy(20, cc.p(500, 600));
        var ac2 = ac1.reverse();
        var as1 = cc.sequence(ac1, ac2);
        sp1.runAction(cc.repeatForever(new cc.EaseSineInOut(as1)));

        //背景精灵2
        var sp2 = new cc.Sprite("#gameplay.bg.sprite-2.png");
        sp2.setPosition(cc.p(winSize.width, 0));
        this.addChild(sp2, 0, GameSceneNodeTag.BatchBackground);

        var ac3 = cc.moveBy(20, cc.p(-500, 600));
        var ac4 = ac3.reverse();
        var as2 = cc.sequence(ac3, ac4);
        sp2.runAction(cc.repeatForever(new cc.EaseSineInOut(as2)));

        //添加敌人
        var stone1 = new Enemy(Enemy_Types.Enemy_stone, this.space);
        this.addChild(stone1, 10, GameSceneNodeTag.BatchBackground);
        //
        var enemy1 = new Enemy(Enemy_Types.Enemy_1, this.space);
        this.addChild(enemy1, 10, GameSceneNodeTag.Enemy);

        var enemy2 = new Enemy(Enemy_Types.Enemy_2, this.space);
        this.addChild(enemy2, 10, GameSceneNodeTag.Enemy);

        var planet = new Enemy(Enemy_Types.Enemy_Planet, this.space);
        this.addChild(planet, GameSceneNodeTag.Enemy);

        //添加玩家飞机
        this.fighter = new Fighter("#gameplay.fighter.png", this.space);
        this.fighter.body.setPos(cc.p(winSize.width / 2, 70));
        this.addChild(this.fighter, 10, GameSceneNodeTag.Fighter);

        //创建触摸飞机事件监听器
        this.touchFighterlistener = cc.EventListener.create({
            event : cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches : true,
            onTouchBegan : function(touch, event){
                cc.log("on touch fighter......");
                return true;
            },
            onTouchMoved : function(touch, event){
                var target = event.getCurrentTarget();
                var delta = touch.getDelta();
                var posX = target.body.getPos().x + delta.x;
                var posY = target.body.getPos().y + delta.y;
                target.body.setPos(cc.p(posX, posY));
            }
        });

        //注册触摸飞机事件监听器
        cc.eventManager.addListener(this.touchFighterlistener, this.fighter);
        this.touchFighterlistener.retain();

        //飞机发射炮弹
        this.schedule(this.shootBullet, 0.2);


        //初始化暂停菜单
        var pauseMenuItem = new cc.MenuItemImage("#button.pause.png", "#button.pause.png", this.menuPauseCallback, this);
        var pauseMenu = new cc.Menu(pauseMenuItem);
        pauseMenu.setPosition(cc.p(30, winSize.height - 28));
        this.addChild(pauseMenu, 200, 999);

        this.updateStatusBarScore();
        this.updateStatusBarFighter();

    },

    //暂停回调
    menuPauseCallback : function (sender) {
        if(effectStatus == 1){
            cc.audioEngine.playEffect("res/sound/Blip.caf");
        }

        var nodes = this.getChildren();
        for(var i = 0; i < nodes.length; i++){
            var node = nodes[i];
            node.unscheduleUpdate();
            this.unschedule(this.shootBullet);
        }

        cc.eventManager.pauseTarget(this.fighter);

        var backNormal = new cc.Sprite("#button.back.png");
        var backSelected = new cc.Sprite("#button.back-on.png");
        var backMenuItem = new cc.MenuItemSprite(backNormal, backSelected,
            function (sender) {
                if(effectStatus == 1){
                    cc.audioEngine.playEffect("res/sound/Blip.caf");
                }
                cc.director.popScene();
        }, this);

        var resumeNormal = new cc.Sprite("#button.resume.png");
        var resumeSelected = new cc.Sprite("#button.resume-on.png");
        var resumeMenuItem = new cc.MenuItemSprite(resumeNormal, resumeSelected,
            function(sender){
                if(effectStatus == 1){
                    cc.audioEngine.playEffect("res/sound/Blip.caf");
                }
                var nodes = this.getChildren();
                for(var i = 0; i < nodes.length; i++){
                    var node = nodes[i];
                    node.scheduleUpdate();
                    this.schedule(this.shootBullet, 0.2);
                }

                cc.eventManager.resumeTarget(this.fighter);
                this.removeChild(this.menu);
            }, this);

        this.menu = new cc.Menu(backMenuItem, resumeMenuItem);
        this.menu.alignItemsVertically();
        this.menu.x = winSize.width / 2;
        this.menu.y = winSize.height / 2;
        this.addChild(this.menu, 20, 1000);

    },

    //飞机发射子弹
    shootBullet : function(dt){
        if(this.fighter && this.fighter.isVisible()){
            var bullet = Bullet.create("#gameplay.bullet.png", this.space);
            bullet.velocity = Sprite_Velocity.Bullet;
            if(bullet.getParent() == null){
                this.addChild(bullet);
                cc.pool.putInPool(bullet);
            }
            bullet.shootBulletFromFighter(cc.p(this.fighter.x, this.fighter.y + this.fighter.getContentSize().height / 2));
        }
    },

    collisionBegin : function(arbiter, space){
        var shapes = arbiter.getShapes();
        var bodyA = shapes[0].getBody();
        var bodyB = shapes[1].getBody();

        var spA = bodyA.data;
        var spB = bodyB.data;

        //炮弹击中敌机 //判断两次是因为取到的对象没有顺序
        if(spA instanceof Bullet && spB instanceof Enemy && spB.isVisible()){
            spA.setVisible(false);
            this.handleBulletCollidingWithEnemy(spB);
            return false;
        }

        if(spB instanceof Bullet && spA instanceof Enemy && spA.isVisible()){
            spB.setVisible(false);
            this.handleBulletCollidingWithEnemy(spA);
            return false;
        }

        //我方飞机击中敌机
        if(spA instanceof Fighter && spB instanceof Enemy && spB.isVisible()){
            spA.setVisible(false);
            this.handleFighterCollidingWithEnemy(spB);
            return false;
        }

        if(spB instanceof Fighter && spA instanceof Enemy && spA.isVisible()){
            spB.setVisible(false);
            this.handleFighterCollidingWithEnemy(spA);
            return false;
        }

        return false;
    },

    handleBulletCollidingWithEnemy : function(enemy){
        enemy.hitPoints--;
        if(enemy.hitPoints == 0){
            var node = this.getChildByTag(GameSceneNodeTag.ExplosionParticleSystem);
            if(node){
                this.removeChild(node);
            }

            //爆炸例子效果
            var explosion = new cc.ParticleSystem("res/particle/explosion.plist");
            explosion.x = enemy.x;
            explosion.y = enemy.y;
            this.addChild(explosion, 2, GameSceneNodeTag.ExplosionParticleSystem);
            if(effectStatus == 1){
                cc.audioEngine.playEffect("/res/sound/Explosion.caf");
            }

            switch(enemy.enemyType){
                case Enemy_Types.Enemy_stone:
                    this.score += EnemyScores.Enemy_Stone;
                    this.scorePlaceholder += EnemyScores.Enemy_Stone;
                    break;
                case Enemy_Types.Enemy_1:
                    this.score += EnemyScores.Enemy_1;
                    this.scorePlaceholder += EnemyScores.Enemy_1;
                    break;
                case Enemy_Types.Enemy_2:
                    this.score += EnemyScores.Enemy_2;
                    this.scorePlaceholder += EnemyScores.Enemy_2;
                    break;
                case Enemy_Types.Enemy_Planet:
                    this.score += EnemyScores.Enemy_Planet;
                    this.scorePlaceholder += EnemyScores.Enemy_Planet;
                    break;
            }

            if(this.scorePlaceholder >= 1000){
                this.fighter.hitPoints += 1;
                this.updateStatusBarFighter();
                this.scorePlaceholder -= 1000;
            }

            this.updateStatusBarScore();
            //设置敌人消失
            enemy.setVisible(false);
            //设置敌人重新出生
            enemy.spawn();
        }
    },

    handleFighterCollidingWithEnemy : function(enemy){
        var node = this.getChildByTag(GameSceneNodeTag.ExplosionParticleSystem);
        if(node){
            this.removeChild(node);
        }

        var explosion = new cc.ParticleSystem("res/particle/explosion.plist");
        explosion.x = enemy.x;
        explosion.y = enemy.y;
        this.addChild(explosion, 10, GameSceneNodeTag.ExplosionParticleSystem);
        //爆炸音效
        if (effectStatus == 1) {
            cc.audioEngine.playEffect("/res/sound/Explosion.caf");
        }


        enemy.setVisible(false);
        enemy.spawn();

        this.fighter.hitPoints--;
        this.updateStatusBarFighter();
        if(this.fighter.hitPoints <= 0){
            cc.log("Game Over");
            var scene = new GameOverScene();
            var layer = new GameOverLayer(this.score);
            scene.addChild(layer);
            cc.director.pushScene(new cc.TransitionFade(1, scene));
        }else{
            // this.fighter.body.setPos(cc.p(winSize.width / 2, 70));
            var ac1 = cc.show();
            var ac2 = cc.fadeIn(3.0);
            var seq = cc.sequence(ac1, ac2);
            this.fighter.runAction(seq);
        }
    },

    //在状态栏中显示得分
    updateStatusBarScore : function(){
        cc.log(" this.score =   " + this.score);
        var n = this.getChildByTag(GameSceneNodeTag.StatusBarScore);
        if(n){
            this.removeChild(n);
        }

        var scoreLabel = new cc.LabelBMFont(this.score, "res/fonts/BMFont.fnt");
        scoreLabel.setScale(1);
        scoreLabel.x = winSize.width / 2;
        scoreLabel.y = winSize.height - 28;

        this.addChild(scoreLabel, 20, GameSceneNodeTag.StatusBarScore);
    },

    //在状态栏中设置玩家生命值
    updateStatusBarFighter : function(){
        cc.log(" this.fighter.hitPoints =   " + this.fighter.hitPoints);
        var n = this.getChildByTag(GameSceneNodeTag.StatusBarFighterNode);
        if(n){
            this.removeChild(n);
        }

        var fg = new cc.Sprite("#gameplay.life.png");
        fg.x = winSize.width - 80;
        fg.y = winSize.height - 28;
        this.addChild(fg, 20, GameSceneNodeTag.StatusBarFighterNode);

        var n2 = this.getChildByTag(GameSceneNodeTag.StatusBarLifeNode);
        if(n2){
            this.removeChild(n2);
        }
        if(this.fighter.hitPoints <= 0) this.fighter.hitPoints = 0;
        var lifeLabel = new cc.LabelBMFont(this.fighter.hitPoints, "res/fonts/BMFont.fnt");
        lifeLabel.setScale(1);
        lifeLabel.x = fg.x + 40;
        lifeLabel.y = fg.y;
        this.addChild(lifeLabel, 20, GameSceneNodeTag.StatusBarLifeNode);
    },
    
    onEnter : function(){
        this._super();
        cc.log("GamePlayScene onEnter");
    },

    onEnterTransitionDidFinish : function(){
        this._super();
        cc.log("GamePlayScene onEnterTransitionDidFinish");
        if(musicstatus == 1){
            cc.audioEngine.playMusic("res/sound/gameBg.aifc");
        }
    },
    onExit : function(){
        //退出游戏场景时需要停止调度并且删除所有的节点
        this._super();
        cc.log("GamePlayScene onExit");
        this.unscheduleUpdate();
        this.unschedule(this.shootBullet);
        if(this.touchFighterlistener != null){
            cc.eventManager.removeListener(this.touchFighterlistener);
            this.touchFighterlistener.release();
            this.touchFighterlistener = null;
        }
        this.removeAllChildren();
        cc.pool.drainAllPools;
    },

    onExitTransitionDidStart: function () {
        this._super();
        cc.log("GamePlayLayer onExitTransitionDidStart");
        cc.audioEngine.stopMusic("res/sound/gameBg.aifc");
    }
});

GamePlayScene = cc.Scene.extend({
    onEnter : function () {
        this._super();
        this.addChild(new GamePlayLayer());
    }
});