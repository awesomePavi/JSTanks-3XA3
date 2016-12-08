var startTime;
function getTimeFromStart() {
    return Date.now() - startTime;
}

var tests;
window.onload = setUp();

function setUp(){
    tests = [];
}


function runTest() {
    $("#Test0").children("div").removeClass("none");
    $("#Test0").children("div").addClass("loader");

    loadInScripts(0);
}

function beginTesting(){

    var breaker = document.createElement('br');
    breaker.className = "newLine";
    document.body.appendChild(breaker);

    breaker = document.createElement('br');
    breaker.className = "newLine";
    document.body.appendChild(breaker);

    var test= document.createElement('div');
    test.className = "newLine";
    test.setAttribute("id", "Run");

    var head1 = document.createElement('h3');
    head1.innerHTML = "Unit Tests:&nbsp;&nbsp;";
    test.appendChild(head1);

    var state = document.createElement('h3');
    state.innerHTML = "Running";
    state.className = "test";
    test.appendChild(state);

    var graphic = document.createElement('div');
    graphic.className = "loader";
    test.appendChild(graphic);

    document.body.appendChild(test); //inject where you need it to be
    startTime = Date.now();
    console.log(tests);
    runTests(8);
}

function runTests(pos) {
    if (pos < tests.length){
        tests[pos](pos + 1);
    }else{
        $("#Run").children("div").removeClass("loader");
        $("#Run").children("div").addClass("done");
        $("#Run").children("div").addClass("Completed");
    }

}


function loadInScripts(i){
    if (i > 100){

        $("#Test0").children("div").removeClass("loader");
        $("#Test0").children("div").addClass("done");
        $("#Test0").find(".test").html("LOADED");
        beginTesting();
        return;
    }

    try {

        var callback = function () {
            try{
                loadInScripts(i + 1);
            }catch(e){
                console.log("Test "+(i+1)+ " does not exist");
            }
        }
        var errorFunc = function(){
            console.log("Test "+(i)+ " Non existent");
            try{
                loadInScripts(i + 1);
            }catch(e){
                console.log("Test "+(i+1)+ " does not exist");
            }
        }


        var script = document.createElement('script');

        script.setAttribute('src','./Test' + i + '.js');
        script.setAttribute('type',"text/javascript");
        script.setAttribute('charset',"utf-8");
        script.addEventListener('error', errorFunc, false);
        script.addEventListener('load', callback, false);
       // script.onload = callback;

        document.head.appendChild(script); //inject where you need it to be
    }catch(e){
        console.log("Test "+i+ " does not exist");
    }
}
