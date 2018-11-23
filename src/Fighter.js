/**
 * Created by tu on 2018/11/22.
 */
var Figher = cc.PhysicsSprite.extend({
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
    },
});