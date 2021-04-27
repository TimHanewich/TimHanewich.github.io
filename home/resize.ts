function ResizeBg()
{
    //Do whichever is higher: the window height or the content height
    let wHeight:number = window.innerHeight;
    let cHeight:number = (document.getElementById("welcome") as HTMLElement).offsetHeight;
    let toSetTo:number = Math.max(wHeight, cHeight);
    (document.getElementById("welcome") as HTMLElement).setAttribute("style", "height: " + toSetTo.toString() + "px");

    console.log("Set to " + toSetTo.toString() + "px");
}

window.onresize = ResizeBg;

ResizeBg();