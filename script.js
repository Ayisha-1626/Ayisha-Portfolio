function startLoader(){
  let counterElement = document.querySelector(".counter");
  let currentValue = 0;

  function updateCounter(){
    if (currentValue === 100){
      return;
    }

    currentValue += Math.floor(Math.random() * 10) + 1;

    if (currentValue > 100){
      currentValue = 100;
    }

    counterElement.textContent = currentValue + "%";

    let delay = Math.floor(Math.random() * 200) + 250;
    setTimeout(updateCounter, delay);
  }

  updateCounter();
}

startLoader();

gsap.from(".circle", 2, {
  top: "-100%",
  ease: "elastic.out",
  delay:0.5,
});

gsap.to(".circle-inner", 1, {
  width: "75px",
  height: "75px",
  ease: "power4.inOut",
  delay:2,
});

gsap.to(".circle-inner-rotator", 1, {
  scale: 1,
  ease: "power4.inOut",
  delay:2.5,
});

gsap.to(".circles", 1.5, {
  rotation: 360,
  ease: "power4.inOut",
  delay:3,
});

gsap.to(".block", 0.75, {
  display: "block",
  height: "200px",
  ease: "power4.inOut",
  delay:4,
});

gsap.to(".block", 0.75, {
  weight: "800px",
  ease: "power4.inOut",
  delay:4.5,
});

gsap.fromTo(".container-box", {
  duration: 2,
  left:"100%",
  // scale: 0.5,
  ease: "power4.inOut",
  delay: 4,
}, {
  duration: 2,
  left: "50%",
  // scale: 0.5,
  transform: "translateX(-50%)",
  ease: "power4.inOut",
  delay: 4,
});

gsap.to(".block", 1.5, {
  width: "0px",
  ease: "power4.inOut",
  delay: 5,
});

gsap.to(".block", 1.5, {
  width: "0px",
  ease: "power4.inOut",
  delay: 6,
});

gsap.to(".circles", 1.5,{
  rotation: 0,
  ease: "power4.inOut",
  delay: 6.5,
});

gsap.to(".loader", 2.5, {
  scale: 0,
  ease: "power4.inOut",
  delay: 7,
});

gsap.to(".container-box", 2,{
  scale: 1,
  ease: "power4.inOut",
  delay: 7.5,
})



gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


// rotating an arrow in navbar

gsap.to("#nav svg", {
  rotate: 90,
  duration: 1,
  backgroundColor: "#111",
  scrollTrigger: {
    trigger: "#nav svg",
    scroller: "#main",
    start: "top -5%",
    end: "top -6%",
    scrub: 1
  }
})
gsap.to("#nav svg", {
  backgroundColor: "#111",
  scrollTrigger: {
    trigger: "#nav svg",
    scroller: "#main",
    start: "top -15%",
    end: "top -400%",
    scrub: 3
  }
})

// scrolling a namediv

gsap.to("#name-div h1", {
  transform: "translateX(calc(-100% - 2vw - 4px))",
  scrollTrigger: {
    trigger: "#name-div h1",
    scroller: "#main",
    // markers:true,
    scrub: 0.7
  }
})



gsap.from("#intro-div h1:nth-child(1)", {
  scrollTrigger: {
    trigger: "#intro-div h1:nth-child(1)",
    scroller: "#main",
    // markers: true,
    start: "top 70%"
  },
  opacity: 0
})
gsap.from("#intro-div h1:nth-child(2)", {

  scrollTrigger: {
    trigger: "#intro-div h1:nth-child(2)",
    scroller: "#main",
    // markers: true,
    start: "top 60%"
  },
  duration: 1,
  opacity: 0
})
gsap.from("#intro-div h1:nth-child(3)", {
  scrollTrigger: {
    trigger: "#intro-div h1:nth-child(3)",
    scroller: "#main",
    // markers: true,
    start: "top 60%",
  },
  opacity: 0,
  duration: 1,
})

gsap.from(".box h4", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".box h4",
    scroller: "#main",
    // markers:true,
    start: "top 70%"
  },
  stagger: 0.5
})

gsap.from(".dev-box img", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".dev-box img",
    scroller: "#main",
    // markers:true,
    start: "top 80%"
  },
  y: 20,
  stagger: {
    amount: 2
  }

})
gsap.from(".des-box img", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".des-box img",
    scroller: "#main",
    // markers:true,
    start: "top 80%"
  },
  y: 20,
  stagger: {
    amount: 1
  }

})

var path = `M 10 100 Q 500 100 990 100`;
var finalPath = `M 10 100 Q 500 100 990 100`;
var string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
  path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.2,
    ease: "power3.out",
  });
});
string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.4,
    ease: "elastic.out(1,0.2)",
  });
});
