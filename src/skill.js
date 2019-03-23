Skill = cc.Layer.extend({
    ctor : function(){
        this._super();

        //冰冻技能,冰冻屏幕敌人
        var spFreeze = new cc.Sprite("res/freeze.png");
        this.freeze = new cc.MenuItemSprite(spFreeze, spFreeze, this.skillMenuCallBack, this);
        this.freeze.setTag(SkillTyes.FREEZE);

        //核弹技能,炸光屏幕敌人
        var spBomb = new cc.Sprite("res/bomb.png");
        this.bomb = new cc.MenuItemSprite(spBomb, spBomb, this.skillMenuCallBack, this);
        this.bomb.setTag(SkillTyes.BOMB);

        //子弹增强技能,子弹双倍伤害
        var spEnhance = new cc.Sprite("res/enhance.png");
        this.enhance = new cc.MenuItemSprite(spEnhance, spEnhance, this.skillMenuCallBack, this);
        this.enhance.setTag(SkillTyes.ENHANCE);
        
        this.skillMenu = new cc.Menu(false, this.freeze, this.bomb, this.enhance);
        this.skillMenu.alignItemsVerticallyWithPadding(0);
        this.skillMenu.setAnchorPoint(0, 0);
        this.skillMenu.ignoreAnchorPointForPosition(false);
        this.skillMenu.setPosition(60, 180);
        this.addChild(this.skillMenu);
    },

    skillMenuCallBack : function(sender){
        cc.log("on touch skill......");
        switch(sender.tag){
            case SkillTyes.FREEZE:
                cc.log("use freeze...");
                break;
            case SkillTyes.BOMB:
                cc.log("use bomb...");
                break;
            case SkillTyes.ENHANCE:
                cc.log("use enhance...");
                break;
        }
    }
});