"use strict";
function ResizeBg() {
    document.getElementById("bg").setAttribute("style", "height: " + window.innerHeight.toString() + "px");
}
window.onresize = ResizeBg;
ResizeBg();
