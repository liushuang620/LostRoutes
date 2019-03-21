/**
 * Created by tu on 2018/11/29.
 */
var GameOverLayer = cc.Layer.extend({
    score : 0,
    touchListener : null,
    ctor : function(score){
        this._super();
        cc.log("GameOverLayer ctor");
        this.score = score;
        var bg = new cc.TMXTiledMap("res/map/blueBg.tmx");
        this.addChild(bg);
        
        var ps = new cc.ParticleSystem("res/particle/light.plist");
        ps.x = winSize.width / 2;
        ps.y = winSize.height / 2 - 100;
        this.addChild(ps);
        
        var page = new cc.Sprite("#gameover.page.png");
        page.x = winSize.width / 2;
        page.y = winSize.height - 300;
        this.addChild(page);
        
        var highScore = cc.sys.localStorage.getItem(HIGHSCORE_KEY);
        highScore = highScore == null ? 0 : highScore;
        if(highScore < this.score){
            highScore = this.score;
            cc.sys.localStorage.setItem(HIGHSCORE_KEY, highScore);
        }
        
        var hscore = new cc.Sprite("#Score.png");
        hscore.x = 223;
        hscore.y = winSize.height - 690;
        this.addChild(hscore);
        
        var hscoreLabel = new cc.LabelBMFont(highScore, "res/fonts/BMFont.fnt");
        hscoreLabel.x = hscore.x + hscore.getContentSize().width / 2;
        hscoreLabel.y = hscore.y - 80;
        this.addChild(hscoreLabel);

        var tap = new cc.Sprite("#Tap.png");
        tap.x = winSize.width / 2;
        tap.y = winSize.height - 860;
        this.addChild(tap);

        this.touchListener = cc.EventListener.create({
            event : cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches : true,
            onTouchBegan : function(touch, event){
                if(effectStatus == 1){
                    cc.audioEngine.playEffect("res/sound/blip.caf");
                }
                cc.director.popScene();
                return false;
            }
        });

        cc.eventManager.addListener(this.touchListener, this);
        this.touchListener.retain();
        
        return true;
    },

    onEnter : function(){
        this._super();
        cc.log("GameOverLayer onEnter");
    },
    onEnterTransitionDidFinish: function () {
        this._super();
        cc.log("GameOverLayer onEnterTransitionDidFinish");
        if (musicstatus == 1) {
            cc.audioEngine.playMusic("res/sound/gameBg.aifc", true);
        }
    },
    onExit: function () {
        this._super();
        cc.log("GameOverLayer onExit");
        //注销事件监听器.
        if (this.touchListener != null) {
            cc.eventManager.removeListener(this.touchListener);
            this.touchListener.release();
            this.touchListener = null;
        }
    },
    onExitTransitionDidStart: function () {
        this._super();
        cc.log("GameOverLayer onExitTransitionDidStart");
        cc.audioEngine.stopMusic("res/sound/gameBg.aifc");
    }

});

var GameOverScene = cc.Scene.extend({
    onEnter : function(){
        this._super();
    }
});