
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)





gsap.from(".imagessetone img",{
    x:-10,
    opacity:0,
    delay:0.9,
    stagger:0.2
})

gsap.from(".imagessettwo img",{
    x:-10,
    opacity:0,
    delay:0.9,
    stagger:0.2,
    scrollTrigger:{
        trigger:".imagessettwo",
        start:"top 70%",
        end:"bottom center",
        toggleActions:"restart none none none",
        scrub:"true",

    }
})
gsap.from(".imagessetthree img",{
    x:-10,
    opacity:0,
    delay:0.9,
    stagger:0.2,
    scrollTrigger:{
        trigger:".imagessetthree img",
        start:"top 40%",
        end:"top 40%",
        scrub: 4,


    }
})



gsap.from(".blockone img",{
    x:-10,
    opacity:0,
    delay:0.9,
    stagger:0.2,
    scrollTrigger:{
        trigger:".blockone img",
        start:"top 60%",
        end:"top 80%",
        scrub: 4,

    }
})

gsap.to(".page2 img",{
    scale:3,
    delay:0.9,
    scrollTrigger:{
        trigger:".page2 img",
        start:"top 60%",
        end:"top 80%",
        scrub: 4,
        pin:"true",

    }
})


gsap.to(".page3 img",{
    scale:3,
    delay:0.9,
    scrollTrigger:{
        trigger:".page3 img",
        start:"top 60%",
        end:"top 80%",
        scrub: 4,
        pin:"true",

    }
})
gsap.to(".page4 img",{
    scale:3,
    delay:0.9,
    scrollTrigger:{
        trigger:".page4 img",
        start:"top 60%",
        end:"top 80%",
        scrub: 4,
        pin:"true",

    }
})