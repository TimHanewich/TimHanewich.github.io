"use strict";
function ResizeBg() {
    //Do whichever is higher: the window height or the content height
    var wHeight = window.innerHeight;
    var cHeight = document.getElementById("opening").scrollHeight;
    var toSetTo = Math.max(wHeight, cHeight);
    document.getElementById("welcome").setAttribute("style", "height: " + toSetTo.toString() + "px");
}
window.onresize = ResizeBg;
ResizeBg();
