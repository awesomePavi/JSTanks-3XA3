/**
 * Created by Pavi-Mac on 2016-12-07.
 */
 //Open all pages, and see how fast they load
function test1(next) {

    var pages = ["../HomePage/homePage.html", "../HTML/JSTanks.html", "../HTML/newGameMenu.html", "../HTML/Instructions.html"]
    var i = -1;
    var testWindow,track,didLoad,winStartTime;

    console.log("Test1");

    $("#Test1").children("div").removeClass("none");
    $("#Test1").children("div").addClass("loader");

    loop();


    function loop(){
        i++;
        if (i < pages.length){
            winStartTime = Date.now();
            testWindow = window.open(pages[i], "_blank", "toolbar=yes,left=1000,width=400,height=400");
            doesItLoad(testWindow);
        }else{
            pass();
        }

    }

    function pass(){
        $("#Test1").children("div").removeClass("loader");
        $("#Test1").children("div").addClass("done");
        $("#Test1").find(".test").html("PASSED");
        runTests(next);
        return;
    }

    function fail(){
        $("#Test1").children("div").removeClass("loader");
        $("#Test1").children("div").addClass("fail");
        $("#Test1").find(".test").html("FAILED");
        runTests(next);         return;
    }




    function doesItLoad(win){
        didLoad = false;
        $(testWindow).bind("load", function () {
            //dothis(testWindow,winStartTime);
            pageLoaded(win);
        });
        track = setTimeout(function(){ finished(win); }, 5000);
    }

    function pageLoaded(win){
        try {
            win.close();
            didLoad = true;
        }catch(e){
            didLoad = false;
        }

        clearTimeout(track);
        finished();
    }

    function finished(win) {
        try {
            win.close();
        }catch(e){
        }

        if (didLoad){
            console.log(Date.now()-winStartTime);
            loop();
        }else{
            console.log("FAILED");
            fail();
        }
    }
}


  {
            tests.push(test1);

            var test= document.createElement('div');
            test.className = "newLine";
            test.setAttribute("id", "Test1");

            var head1 = document.createElement('h3');
            head1.innerHTML = "Page Load Tests:&nbsp;&nbsp;";
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