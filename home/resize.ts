function ResizeBg()
{
    (document.getElementById("welcome") as HTMLElement).setAttribute("style", "height: " + window.innerHeight.toString() + "px");
}

window.onresize = ResizeBg;

ResizeBg();