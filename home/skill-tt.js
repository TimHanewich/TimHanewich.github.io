"use strict";
$(".skill").mouseover(function () {
    var thisElejq = $(this);
    thisElejq.find(".skill-tool-tip")[0].classList.add("show-skill-tool-tip");
});
$(".skill").mouseleave(function () {
    var thisElejq = $(this);
    thisElejq.find(".skill-tool-tip")[0].classList.remove("show-skill-tool-tip");
});
