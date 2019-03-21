/**
 * Created by tu on 2018/11/21.
 */
HelpLayer = cc.Layer.extend({
   ctor : function(){
       this._super();

       var bg = new cc.TMXTiledMap("res/map/redBg.tmx");
       this.addChild(bg);

       var page = new cc.Sprite("#help.page.png");
       page.x = winSize.width / 2;
       page.y = winSize.height / 2;
       this.addChild(page);

       //OK菜单
       var okNormal = new cc.Sprite("#button.ok.png");
       var okSelected = new cc.Sprite("#button.ok-on.png");
       var okMenuItem = new cc.MenuItemSprite(okNormal, okSelected, this.menuOkCallback, this);
       okMenuItem.x = 400;
       okMenuItem.y = 80;

       var menu = new cc.Menu(okMenuItem);
       menu.x = 0;
       menu.y = 0;
       this.addChild(menu);

       return true;
   },

    menuOkCallback : function(sender){
        cc.director.popScene();
        if(effectStatus == 1){
            cc.audioEngine.playEffect("res/sound/Blip.caf");
        }
    },

    onEnterTransitionDidFinish : function () {
        this._super();
        if(musicstatus == 1){
            cc.audioEngine.playMusic("res/sound/homeBg.aifc", true);
        }
    },

    onExitTransitionDidStart : function () {
        this._super();
        cc.audioEngine.stopMusic("res/sound/homeBg.aifc");
    }
});

HelpScene = cc.Scene.extend({
    onEnter : function () {
        this._super();
        this.addChild(new HelpLayer());
    }
});