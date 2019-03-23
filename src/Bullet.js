/**
 * Created by tu on 2018/11/28.
 */
var Bullet = cc.PhysicsSprite.extend({
    space : null,
    velocity : 0,
    spriteFrameName : null,
    
    ctor : function(spriteFrameName, space){
        this._super(spriteFrameName);
        this.space = space;
        this.body = new cp.Body(1, cp.momentForBox(1, this.getContentSize().width, this.getContentSize().height));
        this.space.addBody(this.body);

        var shape = new cp.BoxShape(this.body, this.getContentSize().width, this.getContentSize().height);
        shape.setElasticity(0.5);
        shape.setFriction(0.5);
        shape.setCollisionType(Collision_Type.Bullet);
        this.space.addShape(shape);
        this.setBody(this.body);
        this.body.data = this;
        
    },
    
    shootBulletFromFighter : function(p){
        this.body.data = this;
        this.body.setPos(p);
        this.scheduleUpdate();
    },
    
    update : function(dt){
        this.body.setPos(cc.p(this.body.getPos().x + this.velocity.x * dt,
                                this.body.getPos().y + this.velocity.y * dt));
        if(this.body.getPos().y >= winSize.height){
            this.unscheduleUpdate();
            this.body.data = null;
            this.removeFromParent(true);
        }
    },
    
    unuse : function(){
        this.retain();
        this.setVisible(false);
    },
    
    reuse : function(spriteFrameName, space){
        this.spriteFrameName = spriteFrameName;
        this.space = space;
        this.setVisible(true);
    }
});

Bullet.create = function (spritFrameName, space) {
    if(cc.pool.hasObject(Bullet)){
        return cc.pool.getFromPool(Bullet, spritFrameName, space);
    }else{
        return new Bullet(spritFrameName, space);
    }
};