/**
 * Created by Pavi-Mac on 2016-12-07.
 */
//check that the game end works
function test9(next) {
    console.log("Test9");

    $("#Test9").children("div").removeClass("none");
    $("#Test9").children("div").addClass("loader");

    var passFail = [false,false,false,false,false];
    var posInPassFaill = 0;

    testWin(oneBase);

    function testWin(funcTest) {
        try {
            console.log("hi");
            var testWindow = window.open("../HTML/JSTanks.html", "_blank", "toolbar=yes,left=1000,width=400,height=400");
            testWindow.focus();

            $(testWindow).bind("load", function () {
                try {

                    modForTest(testWindow);
                    setTimeout(
                        function () {
                            funcTest(testWindow);
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
    }


    function modForTest(win){
        var native = win.openGameOver;

        win.openGameOver = function (message,winloss) {
            passFail[posInPassFaill] = true;
            native(message,winloss);
        }


    }

    function check(win){
        console.log(passFail);
        try{
            win.close();
            for (var i =0 ; i < passFail.length; i++){
                if (!passFail[i]){
                    fail();
                    return;
                }
            }
            pass();
        }catch (e){
            fail();
        }
    }

    function oneBase(win) {
        posInPassFaill = 0;
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

        tmp[7][7] = new win.homeBase(win.board.tileSize,win.board);

        win.board.board = tmp;
        win.closePause();
        destroy(win,7,7,moreBase,2);
    }

    function moreBase(win) {
        posInPassFaill = 1;
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
        for (y = 6; y < 9; y++) {
            for (x = 6; x < 9; x++) {
                 tmp[y][x] = new win.homeBase(win.board.tileSize,win.board);
            }
        }
       

        win.board.board = tmp;
        win.closePause();
        destroy(win,7,7,bot,4);
    }

    function bot(win) {
        posInPassFaill = 2;
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
        tmp[7][7] = new win.Bot(win.board.tileSize,7,7,win.board, 1, 2);

        numAI = 1;

        win.board.board = tmp;
        win.closePause();
        destroy(win,7,7,bots,3);
    }

    function bots(win) {
        posInPassFaill = 3;
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
        for (y = 4; y < 10; y++) {
            for (x = 6; x < 7; x++) {
                 tmp[y][x] = new win.Bot(win.board.tileSize,y,x,win.board, 1, 2);
            }
        }

        win.board.numAI = 5;

        win.board.board = tmp;
        win.closePause();
        destroy(win,7,7,person,4);
    }


    function person(win) {
        posInPassFaill = 4;
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

        tmp[7][7] = new win.Player(win.board.tileSize,7,7,win.board, 1, 1);
        this.player = tmp[7][7];
        this.player.hit(-50);

        win.board.board = tmp;
        win.closePause();

        destroy(win,7,7,check,3);
    }



    function destroy(win,x,y,next,lvl){
        try {
            for (var i =0; i < 5; i++) {
                for (var yy = 0; yy < 15; yy++) {
                    for (var z = 0; z < lvl; z++) {
                        win.board.fire(x - i, yy, 1);
                    }
                }
            }


            setTimeout(function(){
                closeWin(win);
                testWin(next);
            },2000);
        }catch(e){
            closePause(win);
            console.log(e);
            fail();
        }
        console.log(passFail);
    }



    function closeWin(win) {
        try {
            win.close();
        } catch (e) {

        }
    }

    function pass() {
        $("#Test9").children("div").removeClass("loader");
        $("#Test9").children("div").addClass("done");
        $("#Test9").find(".test").html("PASSED");
        runTests(next);
        return;
    }

    function fail() {
        $("#Test9").children("div").removeClass("loader");
        $("#Test9").children("div").addClass("fail");
        $("#Test9").find(".test").html("FAILED");
        runTests(next);
        return;
    }
}

{
    tests.push(test9);

    var test = document.createElement('div');
    test.className = "newLine";
    test.setAttribute("id", "Test9");

    var head1 = document.createElement('h3');
    head1.innerHTML = "Game End:&nbsp;&nbsp;";
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