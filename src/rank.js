var cellSize = cc.size(500, 100);

Ranklayer = cc.Layer.extend({
    ctor : function(){
        this._super();
        
        var bg = new cc.TMXTiledMap("res/map/redBg.tmx");
        this.addChild(bg);
        
        this.tableView = new cc.TableView(this, cc.size(500, 400));
        this.tableView.setAnchorPoint(cc.p(0.5, 0.5));
        this.tableView.ignoreAnchorPointForPosition(false);
        this.tableView.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        this.tableView.setDirection(cc.SCROLLVIEW_DIRECTION_VERTICAL); //设置tableView的滑动方向
        this.tableView.setVerticalFillOrder(cc.TABLEVIEW_FILL_TOPDOWN); //设置tableView填充方式
        this.tableView.setDelegate(this);
        this.addChild(this.tableView);

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

    },

    menuOkCallback : function(sender){
        cc.director.popScene();
        if(effectStatus == 1){
            cc.audioEngine.playEffect("res/sound/Blip.caf");
        }
    },

    //设置cell个数
    numberOfCellsInTableView : function(table){
        return 10;
    },

    //设置cell大小
    tableCellSizeForIndex : function (table, index) {
        return cellSize;
    },

    //添加cell
    tableCellAtIndex : function (table, index) {

        //获得一个cell,滑动cell的时候会执行这个方法,把没有显示的cell拿出来
        //更改内容,为了减小内存开销
        var cell = table.dequeueCell();
        if(cell == null){
            cell = new RankCell();
        }

        cell.setCellData(index);
        cell.setTag(index);
        return cell;
    },
    
    //点击cell后的回调函数
    tableCellTouched : function(table, cell){
        cc.log("cell touched at index: " + cell.getIdx());
    },

    onExit : function () {
        this._super();
    }

});


RankCell = cc.TableViewCell.extend({
    ctor : function(){
        this._super();

        // var render = new cc.RenderTexture(cellSize.width, cellSize.height - 10);
        // render.beginWithClear(248, 76, 100, 120);
        // render.visit();
        // render.end();
        //
        // this.block = new cc.Sprite(render.getSprite().texture);
        // this.addChild(this.block);
        // this.block.setAnchorPoint(0, 0);

        //颜色精灵
        this.block = new cc.Sprite();
        this.block.setAnchorPoint(0, 0);
        this.block.setColor(cc.color(248, 76, 100, 0));
        this.block.setTextureRect(cc.rect(0, 0, cellSize.width, cellSize.height - 10));  //设置纹理区域,设置contentSize无效
        this.addChild(this.block);


        this.name = new cc.LabelTTF('Name', "Helvetica", 24);
        this.name.setColor(cc.BLUE);
        this.name.setPosition(100, 45);
        this.block.addChild(this.name);


        this.score = new cc.LabelTTF('9999', "Helvetica", 24);
        this.score.setColor(cc.BLUE);
        this.score.setPosition(250, 45);
        this.block.addChild(this.score);

        this.rank = new cc.LabelTTF('1', "Helvetica", 24);
        this.rank.setColor(cc.BLUE);
        this.rank.setPosition(400, 45);
        this.block.addChild(this.rank);
    },

    setCellData : function(index){
        this.name.setString(RankList[index].name);
        this.score.setString(RankList[index].score);
        this.rank.setString(RankList[index].rank);
    }
});

RankScene = cc.Scene.extend({
    onEnter : function () {
        this._super();
        this.addChild(new Ranklayer());
    }
});