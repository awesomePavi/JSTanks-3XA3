//check bounds of game to see if crash may arise
function test4(next) {
    console.log("Test4");

    $("#Test4").children("div").removeClass("none");
    $("#Test4").children("div").addClass("loader");

    try{
    var testWindow = window.open("../HTML/JSTanks.html", "_blank", "toolbar=yes,left=1000,width=400,height=400");
    testWindow.focus();

    $(testWindow).bind("load", function () {
        try{
            setTimeout(
                function(){
                    testWindow.closePause();
                    replaceTilesEmpty(testWindow,0,0,testAllSpots);
                },100);
        }catch(e){
            console.log(e);
            closeWin(testWindow);
            fail();
        }
    });
    }catch(e){
        console.log(e);
        closeWin(testWindow);
        fail();
    }

    function replaceTilesEmpty(win,xPos,yPos,next){
        var tmp = new Array(15);

        for ( i =0; i < 15; i++){
            tmp[i] = new Array (15);
        }

        //Filling board with empty tiles
        for ( y =0; y < 15; y++){
            for (x = 0; x < 15; x++){
                tmp[y][x] = new win.EmptyTile(win.board.tileSize);//this.randomTile();// new EmptyTile(this.tileSize);
            }
        }

        win.board.player = new win.Player(win.board.tileSize,xPos,yPos,win.board, 1, 1);
        tmp[yPos][xPos] = win.board.player;

        win.board.board = tmp;
        next(win, 0,0);
    }

    function replaceTilesWalls(win,xPos,yPos,next){
        var tmp = new Array(15);

        for ( i =0; i < 15; i++){
            tmp[i] = new Array (15);
        }

        //Filling board with empty tiles
        for ( y =0; y < 15; y++){
            for (x = 0; x < 15; x++){
                tmp[y][x] = new win.EmptyTile(win.board.tileSize);//this.randomTile();// new EmptyTile(this.tileSize);
            }
        }

        //Filling board with empty tiles
        for ( y =7; y < 8; y++){
            for (x = 0; x < 14; x++){
                tmp[y][x] = new win.wall(win.board.tileSize);//this.randomTile();// new EmptyTile(this.tileSize);
            }
        }

        //Filling board with empty tiles
        for ( y =1; y < 15; y++){
            for (x = 7; x < 8; x++){
                tmp[y][x] = new win.wall(win.board.tileSize);//this.randomTile();// new EmptyTile(this.tileSize);
            }
        }

        win.board.player = new win.Player(win.board.tileSize,xPos,yPos,win.board, 1, 1);
        tmp[yPos][xPos] = win.board.player;

        win.board.board = tmp;
        next(win, 0,1);
    }

    function replaceTilesWalls2(win,xPos,yPos,next){
        var tmp = new Array(15);

        for ( i =0; i < 15; i++){
            tmp[i] = new Array (15);
        }

        //Filling board with empty tiles
        for ( y =0; y < 15; y++){
            for (x = 0; x < 15; x++){
                tmp[y][x] = new win.EmptyTile(win.board.tileSize);//this.randomTile();// new EmptyTile(this.tileSize);
            }
        }

        //Filling board with empty tiles
        for ( y =7; y < 8; y++){
            for (x = 0; x < 14; x++){
                tmp[y][x] = new win.steel(win.board.tileSize);//this.randomTile();// new EmptyTile(this.tileSize);
            }
        }

        //Filling board with empty tiles
        for ( y =1; y < 15; y++){
            for (x = 7; x < 8; x++){
                tmp[y][x] = new win.steel(win.board.tileSize);//this.randomTile();// new EmptyTile(this.tileSize);
            }
        }

        win.board.player = new win.Player(win.board.tileSize,xPos,yPos,win.board, 1, 1);
        tmp[yPos][xPos] = win.board.player;

        win.board.board = tmp;
        next(win, 0,2);
    }

    function replaceTilesBase(win,xPos,yPos,next){
        var tmp = new Array(15);

        for ( i =0; i < 15; i++){
            tmp[i] = new Array (15);
        }

        //Filling board with empty tiles
        for ( y =0; y < 15; y++){
            for (x = 0; x < 15; x++){
                tmp[y][x] = new win.EmptyTile(win.board.tileSize);//this.randomTile();// new EmptyTile(this.tileSize);
            }
        }

        //Filling board with empty tiles
        for ( y =7; y < 8; y++){
            for (x = 0; x < 14; x++){
                tmp[y][x] = new win.homeBase(win.board.tileSize);//this.randomTile();// new EmptyTile(this.tileSize);
            }
        }

        //Filling board with empty tiles
        for ( y =1; y < 14; y++){
            for (x = 7; x < 8; x++){
                tmp[y][x] = new win.homeBase(win.board.tileSize);//this.randomTile();// new EmptyTile(this.tileSize);
            }
        }

        win.board.player = new win.Player(win.board.tileSize,xPos,yPos,win.board, 1, 1);
        tmp[yPos][xPos] = win.board.player;

        win.board.board = tmp;
        next(win, 0,3);
    }

    function testAllSpots(win,pos,ver) {
        if (pos < 30) {
        try {
            switch (pos % 4) {
                case 0:
                    testDown(win, 3, pos + 1,ver);
                    break;
                case 1:
                    testRight(win, 20, pos + 1,ver);
                    break;
                case 2:
                    testUp(win, 3, pos + 1,ver);
                    break;
                case 3:
                    testRight(win, 20, pos + 1,ver);
                    break;
                default:
                    break;

            }
        } catch (e) {
            console.log(e);
            closeWin(win);
            fail();
        }
        }else if (pos < 60) {
            try {
                switch ((pos - 30) % 4) {
                    case 0:
                        testLeft(win, 3, pos + 1,ver);
                        break;
                    case 1:
                        testUp(win, 20, pos + 1,ver);
                        break;
                    case 2:
                        testRight(win, 3, pos + 1,ver);
                        break;
                    case 3:
                        testUp(win, 20, pos + 1,ver);
                        break;
                    default:
                        break;

                }
            } catch (e) {
                console.log(e);
                closeWin(win);
                fail();
            }
        }else if(ver == 0) {
            try{
             replaceTilesWalls(win,0,0,testAllSpots);
            } catch (e) {
            console.log(e);
                closeWin(win);
            fail();
            }
        }else if(ver == 1) {
            try{
                replaceTilesWalls2(win,0,0,testAllSpots);
            } catch (e) {
                console.log(e);
                closeWin(win);
                fail();
            }
        }else if(ver == 2) {
            try{
                replaceTilesBase(win,0,0,testAllSpots);
            } catch (e) {
                console.log(e);
                closeWin(win);
                fail();
            }
        }else{
            closeWin(win);
            pass();
        }
    }



    function testRight(win, i, post, ver){
        if (i > 20){
            testAllSpots(win,post,ver);
            return true;
        }

        win.board.player.movedThisRound = 0;

        var e = jQuery.Event("keydown");
        e.which = 39;
        var keyIn = e.which;

        win.board.playerMove(e);
        setTimeout(
            function(){
                testRight(win,i+1,post,ver);
            },5);

    }

    function testLeft(win, i,post,ver){
        if (i > 20){
            testAllSpots(win,post,ver);
            return true;
        }

        win.board.player.movedThisRound = 0;

        var e = jQuery.Event("keydown");
        e.which = 37;
        var keyIn = e.which;

        win.board.playerMove(e);
        setTimeout(
            function(){
                testLeft(win,i+1,post,ver);
            },5);

    }

    function testUp(win, i,post,ver){
        if (i > 20){
            testAllSpots(win,post,ver);
            return true;
        }

        win.board.player.movedThisRound = 0;

        var e = jQuery.Event("keydown");
        e.which = 38;
        var keyIn = e.which;

        win.board.playerMove(e);
        setTimeout(
            function(){
                testUp(win,i+1,post,ver);
            },5);

    }

    function testDown(win, i,post,ver){
        if (i > 20){
            testAllSpots(win,post,ver);
            return true;
        }

        win.board.player.movedThisRound = 0;

        var e = jQuery.Event("keydown");
        e.which = 40;
        var keyIn = e.which;

        win.board.playerMove(e);
        setTimeout(
            function(){
                testDown(win,i+1,post,ver);
            },5);

    }

    function closeWin(win){
        try{
            win.close();
        }catch (e){

        }
    }

    function pass(){
        $("#Test4").children("div").removeClass("loader");
        $("#Test4").children("div").addClass("done");
        $("#Test4").find(".test").html("PASSED");
        runTests(next);         return;
    }

    function fail(){
        $("#Test4").children("div").removeClass("loader");
        $("#Test4").children("div").addClass("fail");
        $("#Test4").find(".test").html("FAILED");
        runTests(next);         return;
    }
}

{
    tests.push(test4);

    var test= document.createElement('div');
    test.className = "newLine";
    test.setAttribute("id", "Test4");

    var head1 = document.createElement('h3');
    head1.innerHTML = "Board Boundaries:&nbsp;&nbsp;";
    test.appendChild(head1);

    var state = document.createElement('h3');
    state.innerHTML = "Pending";
    state.className = "test";
    test.appendChild(state);

    var graphic = document.createElement('div');
    graphic.className = "none";
    test.appendChild(graphic);

    document.body.appendChild(test); //inject where you need it to be
};