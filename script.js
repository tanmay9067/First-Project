var crsr= document.querySelector("#cursor")
var blur= document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    
    crsr.style.left = dets.x+30 +"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x-190+"px"
    blur.style.top = dets.y-190+"px"
})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "95c11e"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95c11e"
        crsr.style.backgroundColor = "transparent"
    })
})




gsap.to("#nav",{
    backgroundColor:"#000",
    height:"100px",
    duration:0.5, 
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,  
        start:"top -10%",
        end:"top -11%",
        scrub:3,
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2 ,
    }

})
gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        //markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:2,
    }
    
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
            trigger:"#colon1",
            scroller:"body",
            //markers:true,
            start:"top 55%",
            end:"top 45%",
            scrub:3,    

    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
            trigger:"#colon1",
            scroller:"body",
            //markers:true,
            start:"top 55%",
            end:"top 45%",
            scrub:3,    

    }
})