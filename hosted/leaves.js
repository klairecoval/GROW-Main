gsap.registerPlugin(MotionPathPlugin);


//leaf1-----------------------------------------
gsap.set(".leaf", {
    fill: "#D9EFED",
    x:"-100vw",
})

var tl1 = gsap.timeline({
    paused: false,
    repeat: -1
});
tl1.to("#leaf1", {
    stagger: "random(3,10)",
    duration: "random(7,15)",
    rotation: "random(-180, 180)",
    ease: "slow(0.3, 0.4, false)",
    motionPath: {
        path: "#path1",
        align: "#path1",
        alignOrigin: [0.5, 0.5],
    }
}, "+=0");


$("#leaf1").each(function (index, element) {
    var tl = new TimelineLite({
        paused: true
    });
    tl.to(element, 0.8, {
            stroke: "#4FD4FE"
        })
    .set(element, {
            zIndex:1,
        })
        .to(element, {
            duration: 2.5,
            ease: "elastic.out(1, 0.5)",
            width: "12vw"
        }, "-=.8")
    element.animation = tl;
})

$("#leaf1").mouseenter(function () {
    this.animation.play();
    tl1.pause();
})

$("#leaf1").mouseleave(function () {
    this.animation.reverse();
    tl1.play();
})




//leaf2-----------------------------------------
var tl2 = gsap.timeline({
    paused: false,
    repeat: -1
});
tl2.to("#leaf2", {
    stagger: "random(3,10)",
    duration: "random(7,15)",
    rotation: "random(-180, 180)",
    ease: "slow(0.3, 0.4, false)",
    motionPath: {
        path: "#path2",
        align: "#path2",
        alignOrigin: [0.5, 0.5],
    }
}, "+=.2");


$("#leaf2").each(function (index, element) {
    var tl = new TimelineLite({
        paused: true
    });
    tl.to(element, 0.8, {
            stroke: "#4FD4FE"
        })
    .set(element, {
            zIndex:1,
        })
        .to(element, {
            duration: 2.5,
            ease: "elastic.out(1, 0.5)",
            width: "12vw"
        }, "-=.8")
    element.animation = tl;
})

$("#leaf2").mouseenter(function () {
    this.animation.play();
    tl2.pause();
})

$("#leaf2").mouseleave(function () {
    this.animation.reverse();
    tl2.play();
})



//leaf3-----------------------------------------
var tl3 = gsap.timeline({
    paused: false,
    repeat: -1
});
tl3.to("#leaf3", {
    stagger: "random(3,10)",
    duration: "random(7,15)",
    rotation: "random(-180, 180)",
    ease: "slow(0.3, 0.4, false)",
    motionPath: {
        path: "#path3",
        align: "#path3",
        alignOrigin: [0.5, 0.5],
    }
}, "+=6");


$("#leaf3").each(function (index, element) {
    var tl = new TimelineLite({
        paused: true
    });
    tl.to(element, 0.8, {
            stroke: "#FFE175"
        })
    .set(element, {
            zIndex:1,
        })
        .to(element, {
            duration: 2.5,
            ease: "elastic.out(1, 0.5)",
            width: "12vw"
        }, "-=.8")
    element.animation = tl;
})

$("#leaf3").mouseenter(function () {
    this.animation.play();
    tl3.pause();
})

$("#leaf3").mouseleave(function () {
    this.animation.reverse();
    tl3.play();
})



//leaf4-----------------------------------------
var tl4 = gsap.timeline({
    paused: false,
    repeat: -1
});
tl4.to("#leaf4", {
    stagger: "random(3,10)",
    duration: "random(7,15)",
    rotation: "random(-180, 180)",
    ease: "slow(0.3, 0.4, false)",
    motionPath: {
        path: "#path4",
        align: "#path4",
        alignOrigin: [0.5, 0.5],
    }
}, "+=1");


$("#leaf4").each(function (index, element) {
    var tl = new TimelineLite({
        paused: true
    });
    tl.to(element, 0.8, {
            stroke: "#ED6E5F"
        })
    .set(element, {
            zIndex:1,
        })
        .to(element, {
            duration: 2.5,
            ease: "elastic.out(1, 0.5)",
            width: "12vw"
        }, "-=.8")
    element.animation = tl;
})

$("#leaf4").mouseenter(function () {
    this.animation.play();
    tl4.pause();
})

$("#leaf4").mouseleave(function () {
    this.animation.reverse();
    tl4.play();
})


//leaf5-----------------------------------------
var tl5 = gsap.timeline({
    paused: false,
    repeat: -1
});
tl5.to("#leaf5", {
    stagger: "random(3,10)",
    duration: "random(7,15)",
    rotation: "random(-180, 180)",
    ease: "slow(0.3, 0.4, false)",
    motionPath: {
        path: "#path2",
        align: "#path2",
        alignOrigin: [0.5, 0.5],
    }
}, "+=0");


$("#leaf5").each(function (index, element) {
    var tl = new TimelineLite({
        paused: true
    });
    tl.to(element, 0.8, {
            stroke: "#F7508D"
        })
    .set(element, {
            zIndex:1,
        })
        .to(element, {
            duration: 2.5,
            ease: "elastic.out(1, 0.5)",
            width: "12vw"
        }, "-=.8")
    element.animation = tl;
})

$("#leaf5").mouseenter(function () {
    this.animation.play();
    tl5.pause();
})

$("#leaf5").mouseleave(function () {
    this.animation.reverse();
    tl5.play();
})



//leaf6-----------------------------------------
var tl6 = gsap.timeline({
    paused: false,
    repeat: -1
});
tl6.to("#leaf6", {
    stagger: "random(3,10)",
    duration: "random(7,15)",
    rotation: "random(-180, 180)",
    ease: "slow(0.3, 0.4, false)",
    motionPath: {
        path: "#path6",
        align: "#path6",
        alignOrigin: [0.5, 0.5],
    }
}, "+=4");


$("#leaf6").each(function (index, element) {
    var tl = new TimelineLite({
        paused: true
    });
    tl.to(element, 0.8, {
            stroke: "#F59B4F"
        })
    .set(element, {
            zIndex:1,
        })
        .to(element, {
            duration: 2.5,
            ease: "elastic.out(1, 0.5)",
            width: "12vw"
        }, "-=.8")
    element.animation = tl;
})

$("#leaf6").mouseenter(function () {
    this.animation.play();
    tl6.pause();
})

$("#leaf6").mouseleave(function () {
    this.animation.reverse();
    tl6.play();
})