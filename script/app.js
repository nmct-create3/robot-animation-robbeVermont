// gsap.to("#Robot", { duration: 1, x: 50 });
// gsap.from("#Robot", { duration: 1, x: 50 });
// gsap.set("#Robot", { duration: 1, x: 50 });
// gsap.fromTo("#Robot", { x: -50 }, { duration: 1, x: 50 });

// gsap.to("#Robot", {
//   duration: 2,
//   ease: "elastic.out(2.5,0.1)",
//   y: -53,
// });

// let tl = gsap.timeline();
// tl.fromTo(
//   "#Robot",
//   {
//     y: 2.5,
//   },
//   {
//     duration: 0.75,
//     y: -2.5,
//   }
// ).to("#Shadow", {
//   duration: 0.75,
//   scale: 0.75,
// });

let tl = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "power1.inOut",
  },
  repeat: -1,
  yoyo: true,
});
let t2 = gsap.timeline({
  defaults: {
    duration: 0.03,
    ease: "power1.inOut",
  },
  repeat: -1,
  yoyo: true,
});

t2.fromTo(
  "#Fire",
  {
    x: 0.5,
  },
  {
    x: -0.5,
  }
);

tl.set("#Shadow", {
  transformOrigin: "50% 100%",
})
  .fromTo(
    "#Robot",
    {
      y: 2.5,
    },
    {
      y: -2.5,
    }
  )
  .to(
    "#Shadow",
    {
      scale: 0.75,
    },
    "<"
  );
