function ResizeBg()
{
    (document.getElementById("bg") as HTMLElement).setAttribute("style", "height: " + window.innerHeight.toString() + "px");
}

window.onresize = ResizeBg;

ResizeBg();