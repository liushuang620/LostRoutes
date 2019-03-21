/**
 * Created by tu on 2018/11/22.
 */
var Fighter = cc.PhysicsSprite.extend({
    hitPoints : true,
    space : null,
    ctor : function (spriteFrameName, space) {
        this._super(spriteFrameName);
        this.space = space;

        var verts = [
            -94, 31.5,
            -52, 64.5,
            57, 66.5,
            96, 33.5,
            0, -80.5];
        this.body = new cp.Body(1, cp.momentForPoly(1, verts, cp.vzero));
        this.body.data = this;
        this.space.addBody(this.body);

        var shape = new cp.PolyShape(this.body, verts, cp.vzero);
        shape.setElasticity(0.5);
        shape.setFriction(0.5);
        shape.setCollisionType(Collision_Type.Fighter);
        this.space.addShape(shape);

        this.hitPoints = Fighter_hitPoints;

        var ps = new cc.ParticleSystem("res/particle/fire.plist");
        ps.x = this.getContentSize().width / 2;
        ps.y = 0;
        ps.setScale(0.5);
        this.addChild(ps);

    },

    setPosition : function(newPos){
        cc.log("calulate fighter position...");
        var halfWidth = this.getContentSize().width / 2;
        var halfHeight = this.getContentSize().height / 2;
        var posX = newPos.x;
        var posY = newPos.y;

        if(posX < halfWidth){
            posX = halfWidth;
        }else if(posX > winSize.width - halfWidth){
            posX = winSize.width - halfWidth;
        }

        if(posY < halfHeight){
            posY = halfHeight;
        }else if(posY > winSize.height - halfHeight){
            posY = winSize.height - halfHeight;
        }

        this.body.setPos(cc.p(posX, posY));
    }
});