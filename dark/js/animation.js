console.log("hello");

// Colors
var t1 = anime.timeline({
  easing: "easeOutExpo",
  duration: 18000,
  loop: true
});

t1.add({
  targets: ".blue, .el",
  duration: 6000,
  keyframes: [
    { opacity: 0 },
    { opacity: 0.8 },
    { opacity: 0.4 },
    { opacity: 1 }
  ]
})
  .add({
    targets: ".red, .el",
    duration: 6000,
    keyframes: [
      { opacity: 0 },
      { opacity: 0.57 },
      { opacity: 0.87 },
      { opacity: 0.37 }
    ]
  })
  .add({
    targets: ".green, .el",
    duration: 6000,
    keyframes: [
      { opacity: 0 },
      { opacity: 0.37 },
      { opacity: 0.87 },
      { opacity: 0.27 },
      { opacity: 0.67 },
      { opacity: 0.27 }
    ]
  });
//    end colors

// begin Grain

// anime({
//   targets: ".grain",
//   keyframes: [
//     {
//       translateX: function() {
//         return anime.random(0, 7);
//       }
//     }
//   ],
//   duration: 600,
//   easing: "easeOutElastic(1, .8)",
//   loop: true
// });
// anime({
//   targets: ".grain2",
//   keyframes: [
//     {
//       translateX: function() {
//         return anime.random(0, -7);
//       }
//     }
//   ],
//   duration: 600,
//   delay: 600,
//   easing: "easeOutElastic(1, .8)",
//   loop: true
// });

//  end grain
