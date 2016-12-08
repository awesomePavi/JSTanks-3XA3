//check bounds of game to see if crash may arise
function test5(next) {
    console.log("Test5");

    $("#Test5").children("div").removeClass("none");
    $("#Test5").children("div").addClass("loader");

    try{
        var testWindow = window.open("../HTML/JSTanks.html", "_blank", "toolbar=yes,left=1000,width=400,height=400");
        testWindow.focus();

        $(testWindow).bind("load", function () {
            try{
                setTimeout(
                    function(){
                        testWindow.closePause();
                        gamePauseTest(testWindow);
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

    function gamePauseTest(win){
        var passed = setTimeout(
            function(){
                win.close();
                pass();
            },6000);

        for (var i = 0 ; i< 5000; i+=1000){
            try{
                setTimeout(
                    function(){
                        win.openPause();
                    },i);
            }catch(e){
                console.log(e);
                closeWin(testWindow);
                clearTimeout(passed);
                fail();
            }
            try{
                setTimeout(
                    function(){
                        win.closePause();
                    },i+500);
            }catch(e){
                console.log(e);
                closeWin(testWindow);
                clearTimeout(passed);
                fail();
            }
        }
    }

    function closeWin(win){
        try{
            win.close();
        }catch (e){

        }
    }

    function pass(){
        $("#Test5").children("div").removeClass("loader");
        $("#Test5").children("div").addClass("done");
        $("#Test5").find(".test").html("PASSED");
        runTests(next);
        return;
    }

    function fail(){
        $("#Test5").children("div").removeClass("loader");
        $("#Test5").children("div").addClass("fail");
        $("#Test5").find(".test").html("FAILED");
        runTests(next);
        return;
    }
}

{
    tests.push(test5);

    var test= document.createElement('div');
    test.className = "newLine";
    test.setAttribute("id", "Test5");

    var head1 = document.createElement('h3');
    head1.innerHTML = "Game Pause:&nbsp;&nbsp;";
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