var offset=100,scrollUp=document.querySelector(".scroll-up"),scrollUpSvgPath=document.querySelector(".scroll-up___svg-path"),pathLength=scrollUpSvgPath.getTotalLength();scrollUpSvgPath.style.strokeDasharray="".concat(pathLength," ").concat(pathLength),scrollUpSvgPath.style.transition="stroke-dashoffset 20ms";var getTop=function(){return window.Yoffset||document.documentElement.scrollTop},updateDashoffset=function(){var t=document.documentElement.scrollHeight-window.innerHeight,o=pathLength-getTop()*pathLength/t;scrollUpSvgPath.style.strokeDashoffset=o};window.addEventListener("scroll",(function(){updateDashoffset(),getTop()>offset?scrollUp.classList.add("scroll-up--activity"):scrollUp.classList.remove("scroll-up--activity")})),scrollUp.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}));
//# sourceMappingURL=index.1e9c1e46.js.map