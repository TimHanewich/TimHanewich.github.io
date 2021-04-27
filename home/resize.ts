function ResizeBg()
{
    //Do whichever is higher: the window height or the content height
    let wHeight:number = window.innerHeight;
    let cHeight:number = (document.getElementById("opening") as HTMLElement).scrollHeight;
    let toSetTo:number = Math.max(wHeight, cHeight);
    (document.getElementById("welcome") as HTMLElement).setAttribute("style", "height: " + toSetTo.toString() + "px");
}

window.onresize = ResizeBg;

ResizeBg();