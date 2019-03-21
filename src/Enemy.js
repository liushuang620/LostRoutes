/**
 * Created by tu on 2018/11/22.
 */
var Enemy = cc.PhysicsSprite.extend({
    enemyType: 0,		//敌人类型
    initialHitPoints: 0,	//初始的生命值
    hitPoints: 0,		//当前的生命值
    velocity: null,			//速度
    space: null,         //所在物理空间
    ctor : function(enemyType, space){
        var enemFrameName = EnemyName.Enemy_Stone;
        var hitPointsTemp = 0;
        var velocityTemp = cc.p(0, 0);
        switch(enemyType){
            case Enemy_Types.Enemy_stone:
                enemFrameName = EnemyName.Enemy_Stone;
                hitPointsTemp = Enemy_initialHitPoints.Enemy_Stone;
                velocityTemp = Sprite_Velocity.Enemy_Stone;
                break;
            case Enemy_Types.Enemy_1:
                enemFrameName = EnemyName.Enemy_1;
                hitPointsTemp = Enemy_initialHitPoints.Enemy_1;
                velocityTemp = Sprite_Velocity.Enemy_1;
                break;
            case Enemy_Types.Enemy_2:
                enemFrameName = EnemyName.Enemy_2;
                hitPointsTemp = Enemy_initialHitPoints.Enemy_2;
                velocityTemp = Sprite_Velocity.Enemy_2;
                break;
            case Enemy_Types.Enemy_Planet:
                enemFrameName = EnemyName.Enemy_Planet;
                hitPointsTemp = Enemy_initialHitPoints.Enemy_Planet;
                velocityTemp = Sprite_Velocity.Enemy_Planet;
                break;
        }

        this._super("#" + enemFrameName);
        this.setVisible(false);
        cc.log("running......" + enemFrameName);

        this.initialHitPoints = hitPointsTemp;
        this.velocity = velocityTemp;
        this.enemyType = enemyType;
        this.space = space;
        var shape;
        cc.log("---------" + enemyType);
        cc.log("+++++++++" + Enemy_Types.Enemy_stone);
        if(enemyType == Enemy_Types.Enemy_stone || enemyType == Enemy_Types.Enemy_Planet){
            cc.log("stone or planet......");
            this.body = new cp.Body(10, cp.momentForCircle(1, 0, this.getContentSize().width / 2 - 5, cp.v(0, 0)));
            shape = new cp.CircleShape(this.body, this.getContentSize().width / 2 - 5, cp.v(0, 0));
            cc.log("end..." + this.body + " " + shape);
        }else if(enemyType == Enemy_Types.Enemy_1){
            var verts = [
                -5, -91.5,
                -59, -54.5,
                -106, -0.5,
                -68, 86.5,
                56, 88.5,
                110, -4.5
            ];
            this.body = new cp.Body(1, cp.momentForPoly(1, verts, cp.vzero));
            shape = new cp.PolyShape(this.body, verts, cp.vzero);
        }else if(enemyType == Enemy_Types.Enemy_2){
            var verts = [
                2.5, 64.5,
                73.5, -9.5,
                5.5, -63.5,
                -71.5, -6.5
            ];
            this.body = new cp.Body(1, cp.momentForPoly(1, verts, cp.vzero));
            shape = new cp.PolyShape(this.body, verts, cp.vzero);
        }

        this.space.addBody(this.body);

        shape.setElasticity(0.5);
        shape.setFriction(0.5);
        shape.setCollisionType(Collision_Type.Enemy);
        this.space.addShape(shape);  //必须添加shape,否则碰撞检测不到
        this.body.data = this;
        this.scheduleUpdate();
    },

    update : function(dt){
        //设置陨石和行星旋转
        switch(this.enemyType){
            case Enemy_Types.Enemy_stone:
                this.setRotation(this.getRotation() - 0.5);
                break;
            case Enemy_Types.Enemy_Planet:
                this.setRotation(this.getRotation() + 1);
                break;
        }
        var newX = this.body.getPos().x + this.velocity.x * dt;
        var newY = this.body.getPos().y + this.velocity.y * dt;

        this.body.setPos(cc.p(newX, newY));

        if(this.body.getPos().y + this.getContentSize().height / 2 < 0)
            this.spawn();
    },

    spawn : function(){
        var y = winSize.height + this.getContentSize().height / 2;
        var x = cc.random0To1() * (winSize.width - this.getContentSize().width) + this.getContentSize().width / 2;
        this.body.setPos(cc.p(x, y));
        this.hitPoints = this.initialHitPoints;
        this.setVisible(true);
    }
});

