/**
 * Created by Pavi-Mac on 2016-12-07.
 */
//check bounds of game to see if crash may arise
function test8(next) {
    console.log("Test8");

    $("#Test8").children("div").removeClass("none");
    $("#Test8").children("div").addClass("loader");

    var passFail = [false,false,false,false];

        try {
            var testWindow = window.open("../HTML/JSTanks.html?Level=5&Map=1", "_blank", "toolbar=yes,left=1000,width=400,height=400");
             testWindow.focus();

            $(testWindow).bind("load", function () {
                try {
                    setTimeout(
                        function () {
                            replace(testWindow);
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

    function replace(win) {
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

        win.board.player = new win.Player(win.board.tileSize,7,7,win.board, 1, 1);
        tmp[7][7] = win.board.player;

        tmp[7][12] = new win.wall(win.board.tileSize);


        win.board.board = tmp;

        win.closePause();
        playerCheck(win,0);
    }

    function playerCheck(win,i){
        if (i > 5){
            fail();
            return;
        }
        var e = jQuery.Event("keydown");
        e.which = 70;
        console.log(win.board.player);
        switch (i){
            case 0:
                e.which = 40;
                break;
            case 1:
                passFail[0]=(win.board.player.x == 7 & win.board.player.y == 8 );
                e.which = 39;
                break;
            case 2:
                passFail[1]=(win.board.player.x == 8 & win.board.player.y == 8 );
                e.which = 38;
                break;
            case 3:
                passFail[2]=(win.board.player.x == 8 & win.board.player.y == 7 );
                e.which = 39;
                break;
            case 4:
                passFail[3]=(win.board.player.x == 9 & win.board.player.y == 7 );
                e.which = 70;
                break;
            case 5:
                check(win);
                return;
                break
            default:
                win.close();
                fail();
                return;

        }

        win.board.playerMove(e);
        setTimeout(function(){
            playerCheck(win,i+1);
        },750);
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

    function closeWin(win) {
        try {
            win.close();
        } catch (e) {

        }
    }

    function pass() {
        $("#Test8").children("div").removeClass("loader");
        $("#Test8").children("div").addClass("done");
        $("#Test8").find(".test").html("PASSED");
        runTests(next);
        return;
    }

    function fail() {
        $("#Test8").children("div").removeClass("loader");
        $("#Test8").children("div").addClass("fail");
        $("#Test8").find(".test").html("FAILED");
        runTests(next);
        return;
    }
}

{
    tests.push(test8);

    var test = document.createElement('div');
    test.className = "newLine";
    test.setAttribute("id", "Test8");

    var head1 = document.createElement('h3');
    head1.innerHTML = "UserTank:&nbsp;&nbsp;";
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