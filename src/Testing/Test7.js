/**
 * Created by Pavi-Mac on 2016-12-07.
 */
//check bounds of game to see if crash may arise
function test7(next) {
    console.log("Test7");

    $("#Test7").children("div").removeClass("none");
    $("#Test7").children("div").addClass("loader");

    var passFail = [false,false,false,false];
    var posInPassFaill = 0;

    testWin(oneBase);

    function testWin(funcTest) {
        try {
            var testWindow = window.open("../HTML/JSTanks.html", "_blank", "toolbar=yes,left=1000,width=400,height=400");
            // testWindow.focus();

            $(testWindow).bind("load", function () {
                try {
                    setTimeout(
                        function () {
                            testWindow.closePause();
                    modForTest(testWindow);
                    setTimeout(
                        function () {
                            funcTest(testWindow);
                        }, 100);
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
        var native = win.board.damage;

        win.board.damage = function (x,y,z) {
            passFail[posInPassFaill] = true;
            native(x,y,z);
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
        destroy(win,7,7,wall);
    }

    function wall(win) {
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

        tmp[7][7] = new win.wall(win.board.tileSize);


        win.board.board = tmp;
        win.closePause();
        destroy(win,7,7,steel);
    }

    function steel(win) {
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

        tmp[7][7] = new win.steel(win.board.tileSize);


        win.board.board = tmp;
        win.closePause();
        destroy(win,7,7,person);
    }

    function person(win) {
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

        tmp[7][7] = new win.Player(win.board.tileSize,7,7,win.board, 1, 1);
        this.player = tmp[7][7];
        this.player.hit(-100);

        win.board.board = tmp;
        win.closePause();

        destroy(win,7,7,check,3);
    }



    function destroy(win,x,y,next){
        try {
            win.board.fire(6, 7, 1);


            setTimeout(function(){
                closeWin(win);
                testWin(next);
            },250);
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
        $("#Test7").children("div").removeClass("loader");
        $("#Test7").children("div").addClass("done");
        $("#Test7").find(".test").html("PASSED");
        runTests(next);
        return;
    }

    function fail() {
        $("#Test7").children("div").removeClass("loader");
        $("#Test7").children("div").addClass("fail");
        $("#Test7").find(".test").html("FAILED");
        runTests(next);
        return;
    }
}

{
    tests.push(test7);

    var test = document.createElement('div');
    test.className = "newLine";
    test.setAttribute("id", "Test7");

    var head1 = document.createElement('h3');
    head1.innerHTML = "Projectiles:&nbsp;&nbsp;";
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