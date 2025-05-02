var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

// ab cursor ghoomega to poore html doc pe eventlistner laga denge 
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+30+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x - 250 +"px"
    blur.style.top = dets.y - 250 +"px"
})

var h4all = document.querySelectorAll("#nav h4")
// jb mouse enter krenge to bara hojega cursr 
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 2
        crsr.style.border = "0.5px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
})

// jb hateynege to normal 
h4all.forEach(function(elem){
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

// is me jb body ko scroll krenge to nav ka bg black hojaega
gsap.to("#nav", {
    backgroundColor : "#000",
    height: "100px",
    duration: 0.5,
    scrollTrigger :{
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top, -10%",
        end: "top, -11%",
        scrub: 1
    }
})
// is me jb main div scroll horha hoga to neeche page 2 ka bg black hojaega
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top, -25%",
        end: "top, -70%",
        scrub: 2
    }
})

// about ko scroll krenge to ye animate hote hue upr ayega 
gsap.from("#about-us img, #about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub : 1
    }
})


// sb me bs scroll krenge or comma apne apne side se animate honge  
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller:"body",
        start: "top 55%",
        end: "top 45%",
        scrub:1 
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller:"body",
        start: "top 55%",
        end: "top 45%",
        scrub:1 
    }
})

// andr page4 k h1 upr ayega scrolling time 
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger: "#page4 h1",
        scroller:"body",
        start: "top 75%",
        end: "top 70%",
        scrub:3
    }
})