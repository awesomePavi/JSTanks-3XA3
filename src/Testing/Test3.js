/**
 * Created by Pavi-Mac on 2016-12-07.
 */
//cehck that the game board loads up for all varaitions of game attributes including error causal
function test3(next) {
    console.log("Test3");

    $("#Test3").children("div").removeClass("none");
    $("#Test3").children("div").addClass("loader");

    testAll();

    function testAll(){
        try{
            testNext(0,0);
        }catch(e){
            console.log(e);
            fail();
        }
    }
    var track;
    function testNext(maps, levels){
        try{
            var url = "../HTML/JSTanks.html?Level="+levels+"&Map="+maps;
            levels++;
            if (levels > 7){
                levels = 0;
                maps ++;
            } if (maps > 3){
                pass();
                return;
            }

            var testWindow = window.open(url, "_blank", "toolbar=yes,left=1000,width=500,height=500");
            testWindow.focus();
            track = setTimeout(function(){ fail(); }, 2000);
            $(testWindow).bind("load", function () {
                try{
                    setTimeout(function(){clearTimeout(track); testWindow.closePause();   setTimeout(function(){testWindow.close();testNext(maps,levels);},300);},5);

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



    function pass(){
        $("#Test3").children("div").removeClass("loader");
        $("#Test3").children("div").addClass("done");
        $("#Test3").find(".test").html("PASSED");
        runTests(next);
        return;
    }

    function fail(){
        $("#Test3").children("div").removeClass("loader");
        $("#Test3").children("div").addClass("fail");
        $("#Test3").find(".test").html("FAILED");
        runTests(next);
        return;
    }
}

{
    tests.push(test3);

    var test= document.createElement('div');
    test.className = "newLine";
    test.setAttribute("id", "Test3");

    var head1 = document.createElement('h3');
    head1.innerHTML = "New Game Options:&nbsp;&nbsp;";
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
