/**
 * Created by tu on 2018/11/21.
 */
GamePlayLayer = cc.Layer.extend({
    ctor : function(){
        this._super();

        this.initBG();
        return true;
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

        //添加玩家飞机
        this.fighter = new Fighter("#gameplay.fighter.png", this.space);
        this.fighter.body.setPos(cc.p(winSize.width / 2, 70));
        this.addChild(this.fighter, 10, GameSceneNodeTag.Fighter);

        //菜单栏
        var pauseMenuItem = new cc.MenuItemImage("#button.pause.png", "#button.pause.png", this.menuPauseCallback, this);
        var pauseMenu = new cc.Menu(pauseMenuItem);
        pauseMenu.setPosition(cc.p(30, winSize.height - 28));
        this.addChild(pauseMenu, 200, 999);

    },

    menuPauseCallback : function (sender) {
        if(effectStatus == 1){
            cc.audioEngine.playEffect("res/sound/Blip.caf");
        }

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
                this.removeChild(this.menu);
            }, this);

        this.menu = new cc.Menu(backMenuItem, resumeMenuItem);
        this.menu.alignItemsVertically();
        this.menu.x = winSize.width / 2;
        this.menu.y = winSize.height / 2;
        this.addChild(this.menu, 20, 1000);

    }
});

GamePlayScene = cc.Scene.extend({
    onEnter : function () {
        this._super();
        this.addChild(new GamePlayLayer());
    }
});