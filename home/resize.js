"use strict";
function ResizeBg() {
    document.getElementById("welcome").setAttribute("style", "height: " + window.innerHeight.toString() + "px");
}
window.onresize = ResizeBg;
ResizeBg();
