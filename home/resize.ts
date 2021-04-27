function ResizeBg()
{
    //Do whichever is higher: the window height or the content height
    let wHeight:number = window.innerHeight;
    let cHeight:number = (document.getElementById("opening") as HTMLElement).scrollHeight;
    cHeight = cHeight + 100; //Add 100 so it isnt so squished in there if we need to expand to the height of the content
    let toSetTo:number = Math.max(wHeight, cHeight);
    (document.getElementById("welcome") as HTMLElement).setAttribute("style", "height: " + toSetTo.toString() + "px");
}

window.onresize = ResizeBg;

ResizeBg();