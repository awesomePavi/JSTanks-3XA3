/**
 * Created by Pavi-Mac on 2016-12-07.
 */
 //run through all menus
function test2(next) {
    console.log("Test2");
    $("#Test2").children("div").removeClass("none");
    $("#Test2").children("div").addClass("loader");


    testHomePage();

    function testHomePage(){
    try{
        var testWindow = window.open("../HomePage/homePage.html", "_blank", "toolbar=yes,left=1000,width=800,height=400");
         testWindow.focus();
        $(testWindow).bind("load", function(){
            try{
                testWindow.setupGame();
                testWindow.close();
                setTimeout(function(){testInstr();},10);
            }catch(e){
                console.log(e);
                fail();
            }
        });
        }catch(e){
        console.log(e);
                        fail();
        }
    }

    function testInstr(){
        var testWindow = window.open("../HTML/Instructions.html", "_blank", "toolbar=yes,left=1000,width=800,height=400");
        testWindow.focus();
        $(testWindow).bind("load", function(){
            try{
                testWindow.document.getElementById('modal').style.display='block';
                testWindow.document.getElementById('modal').style.display='none';
                testWindow.close();
                setTimeout(testNewGameMenu(),10);
            }catch(e){
                console.log(e);
                fail();
            }
        });
    }

    function testNewGameMenu(){
        var testWindow = window.open("../HTML/newGameMenu.html", "_blank", "toolbar=yes,left=1000,width=800,height=400");
        testWindow.focus();
        $(testWindow).bind("load", function(){
            try{
                testWindow.document.getElementById('modalGame').style.display='block';
                testWindow.document.getElementById('modalGame').style.display='none';
                testWindow.close();
                setTimeout(testJSTank(),10);
            }catch(e){
                console.log(e);
                fail();
            }
        });
    }




    function testJSTank() {
        var testWindow = window.open("../HTML/JSTanks.html", "_blank", "toolbar=yes,left=1000,width=500,height=600");
        testWindow.focus();
        $(testWindow).bind("load", function(){
            try{
                setTimeout(function(){testJSTankNext(0);},100);
            }catch(e){
                console.log(e);
                fail();
            }
        });

        function testJSTankNext(i){
            try{
                switch(i) {
                    case 0:
                        testWindow.closePause();
                        setTimeout(function(){testJSTankNext(1);},100);
                        break;
                    case 1:
                        testWindow.openPause();
                        setTimeout(function(){testJSTankNext(2);},100);
                        break;
                    case 2:
                        testWindow.home();
                        setTimeout(function(){testJSTankNext(3);},500);
                        break;
                    case 3:
                        testWindow.newGame();
                        setTimeout(function(){testJSTankNext(4);},500);
                        break;
                    case 4:
                        testWindow.closePause();
                        setTimeout(function(){testJSTankNext(5);},100);
                        break;
                    case 5:
                        testWindow.openGameOver("TESTING");
                        setTimeout(function(){testJSTankNext(6);},100);
                        break;
                    case 6:
                        testWindow.openGameOver("TESTING","TESTING");
                        setTimeout(function(){testJSTankNext(7);},100);
                        break;
                    case 7:
                        testWindow.quit();
                        setTimeout(function(){testJSTankNext(8);},100);
                        break;
                    case 8:
                        testWindow.close();
                        pass();
                        break;
                    default:
                      //  testWindow.close();
                        fail();
                }
            }catch(e){
                console.log(e);
                fail();
            }

        }
    }



    function pass(){
        $("#Test2").children("div").removeClass("loader");
        $("#Test2").children("div").addClass("done");
        $("#Test2").find(".test").html("PASSED");
        runTests(next);         return;
    }

    function fail(){
        $("#Test2").children("div").removeClass("loader");
        $("#Test2").children("div").addClass("fail");
        $("#Test2").find(".test").html("FAILED");
        runTests(next);         return;
    }

}

  {
            tests.push(test2);

            var test= document.createElement('div');
            test.className = "newLine";
            test.setAttribute("id", "Test2");

            var head1 = document.createElement('h3');
            head1.innerHTML = "Menu Functionality:&nbsp;&nbsp;";
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