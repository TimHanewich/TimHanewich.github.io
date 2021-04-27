$(".skill").mouseover(function()
{
    let thisElejq = $(this);
    thisElejq.find(".skill-tool-tip")[0].classList.add("show-skill-tool-tip");

});

$(".skill").mouseleave(function()
{
    let thisElejq = $(this);
    thisElejq.find(".skill-tool-tip")[0].classList.remove("show-skill-tool-tip");
});