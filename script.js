var crsr = document.querySelector("#cursior")
var crsr_blur = document.querySelector("#cursior_blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    crsr_blur.style.left=dets.x-150+"px"
    crsr_blur.style.top=dets.y-150+"px"
})


var h4=document.querySelectorAll("#nav h4")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function () {
        crsr.style.scale=3;
        crsr.style.border="1px solid white"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function () {
        crsr.style.scale=1;
        crsr.style.border="0px solid white"
        crsr.style.backgroundColor="#95c11e"
    })
})




gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})

gsap.from("#about_us img,#about_us_in",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about_us",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})