//check bounds of game to see if crash may arise
function test6(next) {
    console.log("Test6");

    $("#Test6").children("div").removeClass("none");
    $("#Test6").children("div").addClass("loader");

    var aiTracker = [];

    try {
        var testWindow = window.open("../HTML/JSTanks.html?Level=5&Map=1", "_blank", "toolbar=yes,left=1000,width=400,height=400");
        testWindow.focus();

        $(testWindow).bind("load", function () {
            try {
                setTimeout(
                    function () {
                        replaceTilesEmpty(testWindow, 5, 5);
                    }, 100);
            } catch (e) {
                console.log(e);
                closeWin(testWindow);
                fail();
            }
        });
    } catch (e) {
        console.log(e);
        closeWin(testWindow);
        fail();
    }

    function replaceTilesEmpty(win, xPos, yPos) {
        var tmp = new Array(15);

        for (i = 0; i < 15; i++) {
            tmp[i] = new Array(15);
        }

        //Filling board with empty tiles
        for (y = 0; y < 15; y++) {
            for (x = 0; x < 15; x++) {
                tmp[y][x] = new win.EmptyTile(win.board.tileSize);//this.randomTile();// new EmptyTile(this.tileSize);
            }
        }
        win.board.board = tmp;

        new win.createBoard(win.board, "normal");

        win.board.board[5][7] = new win.Bot(win.board.tileSize,7,5,win.board, 1, 2);
        win.closePause();
        AICheck(win,0);
    }


    function AICheck(win,i){
        try {
            var tmp = win.board.board;
            for (y = 0; y < 15; y++) {
                for (x = 0; x < 15; x++) {
                    try {
                        if (win.board.board[y][x].Flag) {
                            console.log(x + " | " + y);
                            aiTracker.push([x,y]);
                        }
                    } catch (e) {
                    }

                }
            }
            if (i < 20) {
                setTimeout(
                    function () {
                        AICheck(win, i + 1);
                    }, 250);
            } else {

                win.close();
                if (calcQual(aiTracker)){

                    pass();
                }else{
                    fail();
                }
            }
        }catch(e){
            closeWin(win);
            console.log(e);
            fail();
        }
    }

    function calcQual(moves){
        var len = moves.length;
        var maxX, maxY, startX, startY;

        console.log(moves);

        startX = moves[0][0];
        startY = moves[0][1];
        maxX =0;
        maxY =0;

        console.log(startX);
        console.log(startY);
        for (var i =0; i < len; i++){
            if (Math.abs(startX - moves[i][0]) > maxX){
                maxX = Math.abs(startX - moves[i][0])
            }
            if (Math.abs(startY - moves[i][1]) > maxY){
                maxY = Math.abs(startY - moves[i][1]);
            }
        }
        console.log(maxX);
        console.log(maxY);
        return (maxX > 2 || maxY > 2);
    }

    function closeWin(win) {
        try {
            win.close();
        } catch (e) {

        }
    }

    function pass() {
        $("#Test6").children("div").removeClass("loader");
        $("#Test6").children("div").addClass("done");
        $("#Test6").find(".test").html("PASSED");
        runTests(next);
        return;
    }

    function fail() {
        $("#Test6").children("div").removeClass("loader");
        $("#Test6").children("div").addClass("fail");
        $("#Test6").find(".test").html("FAILED");
        runTests(next);
        return;
    }
}

{
    tests.push(test6);

    var test = document.createElement('div');
    test.className = "newLine";
    test.setAttribute("id", "Test6");

    var head1 = document.createElement('h3');
    head1.innerHTML = "AI Randomness:&nbsp;&nbsp;";
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