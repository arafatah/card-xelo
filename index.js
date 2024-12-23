// const cards = document.querySelectorAll(".xelo-work-process-style");

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         animateCards();
//         observer.unobserve(entry.target);
//       }
//     });
//   },
//   {
//     threshold: 0.5,
//   }
// );

// const wrapper = document.querySelector(".work-process-wrap");
// observer.observe(wrapper);

// function animateCards() {
//   cards.forEach((card, index) => {
//     const currentTop = parseInt(window.getComputedStyle(card).top);
//     const rotationValue = card.classList.contains("work-process-position-1")
//       ? 10
//       : card.classList.contains("work-process-position-2")
//       ? -5
//       : 5;

//     card.style.transition = "none";
//     card.offsetHeight;

//     card.style.top = `${currentTop + 50}px`;
//     card.style.transform = `rotate(${rotationValue}deg)`;
//     card.style.opacity = "0";

//     setTimeout(() => {
//       card.style.transition = "all 0.6s ease-out";
//       card.style.top = `${currentTop}px`;
//       card.style.opacity = "1";
//     }, 200 * index);
//   });
// }

// const style = document.createElement("style");
// style.textContent = `
//     .xelo-work-process-style {
//         opacity: 0;
//         will-change: transform, top;
//     }
// `;
// document.head.appendChild(style);

// ////////////////

// const wrappers = document.querySelectorAll('.wp-bg-wrapper');

// // Add initial styles
// const style = document.createElement('style');
// style.textContent = `
//   .wp-bg-wrapper {
//     transform: scale(0);
//     opacity: 0;
//     transition: all 0.6s ease-out;
//     will-change: transform, opacity;
//   }
// `;
// document.head.appendChild(style);

// // Create intersection observer
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         animateWrappers();
//         observer.unobserve(entry.target);
//       }
//     });
//   },
//   {
//     threshold: 0.3,
//   }
// );

// // Start observing the container
// const container = document.querySelector('.wp-bg-wrap');
// observer.observe(container);

// // Animation function
// function animateWrappers() {
//   wrappers.forEach((wrapper, index) => {
//     setTimeout(() => {
//       wrapper.style.transform = 'scale(1)';
//       wrapper.style.opacity = '1';
//     }, index * 200);
//   });
// }

// cards
/* const processCards = document.querySelectorAll(".xelo-work-process-style");

const processObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateProcessCards();
        processObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

const processWrapper = document.querySelector(".work-process-wrap");
processObserver.observe(processWrapper);

function animateProcessCards() {
  processCards.forEach((card, index) => {
    const currentTop = parseInt(window.getComputedStyle(card).top);
    const rotationValue = card.classList.contains("work-process-position-1")
      ? 10
      : card.classList.contains("work-process-position-2")
      ? -5
      : 5;

    card.style.transition = "none";
    card.offsetHeight;

    card.style.top = `${currentTop + 50}px`;
    card.style.transform = `rotate(${rotationValue}deg)`;
    card.style.opacity = "0";

    setTimeout(() => {
      card.style.transition = "all 0.6s ease-out";
      card.style.top = `${currentTop}px`;
      card.style.opacity = "1";
    }, 200 * index);
  });
}

const processStyle = document.createElement("style");
processStyle.textContent = `
    .xelo-work-process-style {
        opacity: 0;
        will-change: transform;
    }
`;
document.head.appendChild(processStyle);

// Background wrappers
const bgWrappers = document.querySelectorAll(".wp-bg-wrapper");

const bgStyle = document.createElement("style");
bgStyle.textContent = `
  .wp-bg-wrapper {
    transition: all 0.6s ease-out;
    will-change: transform;
  }
`;
document.head.appendChild(bgStyle);

const bgObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateBgWrappers();
        bgObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
  }
);

const bgContainer = document.querySelector(".wp-bg-wrap");
bgObserver.observe(bgContainer);

function animateBgWrappers() {
  bgWrappers.forEach((wrapper, index) => {
    setTimeout(() => {
      wrapper.style.transform =
        "translateY(0px) scale(2) rotate(0deg) rotateX(0deg) rotateY(0deg) skewX(0deg) skewY(0deg) translateZ(0px) translate(-50%, -50%) translateX(0px)";
    }, index * 300);
  });
} */

////////////////////////////////////

// Import GSAP and ScrollTrigger if not already imported
/* gsap.registerPlugin(ScrollTrigger);

// Process Cards Animation
const processCards = document.querySelectorAll(".xelo-work-process-style");
const processWrapper = document.querySelector(".work-process-wrap");

// Set initial states
processCards.forEach((card) => {
  let initialY, initialRotation, initialLeft;
  
  if (card.classList.contains("work-process-position-1")) {
    initialY = 155 ; 
    initialRotation = 10;
    initialLeft = "30%";
  } else if (card.classList.contains("work-process-position-2")) {
    initialY = -43 ; 
    initialRotation = -5;
    initialLeft = "27%";
  } else if (card.classList.contains("work-process-position-3")) {
    initialY = -220 ; 
    initialRotation = 5;
    initialLeft = "26%";
  }

  gsap.set(card, {
    y: initialY,
    rotation: initialRotation,
    left: initialLeft,
    zIndex: card.style.zIndex,
  });
});

// Create timeline for cards
processCards.forEach((card, index) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: processWrapper,
      start: "top 80%",
      end: "center center",
      scrub: 1,
      markers: false, 
    }
  });

  let targetY;
  if (card.classList.contains("work-process-position-1")) {
    targetY = 100;
  } else if (card.classList.contains("work-process-position-2")) {
    targetY = -83;
  } else if (card.classList.contains("work-process-position-3")) {
    targetY = -150;
  }

  // Two steps of 120px each before final position
  const stepDistance = 120;
  
  // First step
  tl.to(card, {
    y: targetY + (stepDistance * 2),
    duration: 0.4,
    ease: "power2.out",
  });

  // Second step
  tl.to(card, {
    y: targetY + stepDistance,
    duration: 0.4,
    ease: "power2.out",
  });

  // Final position
  tl.to(card, {
    y: targetY,
    duration: 0.4,
    ease: "power2.out",
  });
}); */

// Background Wrappers Animation
/* const bgWrappers = document.querySelectorAll(".wp-bg-wrapper");
const bgContainer = document.querySelector(".wp-bg-wrap");

// Set initial states for background wrappers
bgWrappers.forEach((wrapper) => {
  gsap.set(wrapper, {
    scale: 1.5,
    y: 120, // Updated to match new step size
    x: "-50%",
    opacity: 0,
  });
});

// Create timeline for background wrappers
bgWrappers.forEach((wrapper, index) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: bgContainer,
      start: "top 80%",
      end: "center center",
      scrub: 1,
      markers: false,
    }
  });

  // Two steps of movement
  tl.to(wrapper, {
    y: 120,
    scale: 1.6,
    opacity: 0.3,
    duration: 0.4,
    ease: "power2.out",
  });

  tl.to(wrapper, {
    y: 60,
    scale: 1.8,
    opacity: 0.6,
    duration: 0.4,
    ease: "power2.out",
  });

  // Final position
  tl.to(wrapper, {
    y: 0,
    scale: 2,
    opacity: 1,
    duration: 0.4,
    ease: "power2.out",
    transform: "translateY(0px) scale(2) rotate(0deg) rotateX(0deg) rotateY(0deg) skewX(0deg) skewY(0deg) translateZ(0px) translate(-50%, -50%) translateX(0px)",
  });
});

// Optional: Add resize handler to update ScrollTrigger
window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
}); */
/* 
gsap.registerPlugin(ScrollTrigger);

const processCards = document.querySelectorAll(".xelo-work-process-style");
const processWrapper = document.querySelector(".work-process-wrap");

// Create a single timeline for all cards
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: processWrapper,
    start: "top 80%",
    end: "center center",
    scrub: 1,
    toggleActions: "play none none reverse",
    markers: false,
  },
});

// Define the y-movement for each card
const cardMovements = [-150, -180, -210, -240, -270];

// Add animations for each card with stagger
processCards.forEach((card, index) => {
  tl.to(
    card,
    {
      y: cardMovements[index],
      duration: 1.5,
      ease: "power2.out",
    },
    "<+=0.3"
  );
}); */

// // Background Wrappers Animation
// const bgWrappers = document.querySelectorAll(".wp-bg-wrapper");
// const bgContainer = document.querySelector(".wp-bg-wrap");

// // Create a single timeline for smoother animation
// const bgTimeline = gsap.timeline({
//   scrollTrigger: {
//     trigger: bgContainer,
//     start: "top 80%",
//     end: "center center",
//     scrub: 1,
//     toggleActions: "play none none reverse",
//     markers: false,
//   },
// });

// // Define scale and movement values for each stage
// const animations = [
//   { scale: 0.7 },
//   { scale: 0.9 },
//   { scale: 1.2 },
//   { scale: 1.5 },
//   { scale: 2 },
// ];

// // Add animations for each wrapper
// bgWrappers.forEach((wrapper, index) => {
//   // Initial state
//   gsap.set(wrapper, {
//     transformOrigin: "center center",
//     transform: "translate(-50%, -50%)",
//   });

//   // Add each stage of animation
//   animations.forEach((anim, stageIndex) => {
//     bgTimeline.to(wrapper, {
//       scale: anim.scale,
//       duration: 1,
//       ease: "none",
//       transformOrigin: "center center",
//     });
//   });
// });

// // Add resize handler to update ScrollTrigger
// window.addEventListener("resize", () => {
//   ScrollTrigger.refresh();
// });


gsap.to(".wp-bg-wrapper-1", {
  scale: 1,
  scrollTrigger: {
    start: "top center",
    end: "bottom top",
    scrub: 1
  }
});

gsap.to(".wp-bg-wrapper-2", {
  scale: 1.5,
  scrollTrigger: {
    start: "top center",
    end: "bottom top",
    scrub: 1
  }
});

gsap.to(".wp-bg-wrapper-3", {
  scale: 2,
  scrollTrigger: {
    start: "top center",
    end: "bottom top",
    scrub: 1
  }
});

////////
gsap.to(".work-process-position-1", {
  y: -425,
  rotate: 10,
  scrollTrigger: {
    start: "top 70%",
    // end: "bottom top",
    scrub: 1
  }
});
gsap.to(".work-process-position-2", {
  y: -525,
  rotate: -10,
  scrollTrigger: {
    start: "top 70%",
    // end: "bottom top",
    scrub: 1
  }
});
gsap.to(".work-process-position-3", {
  y: -625,
  rotate: 10,
  scrollTrigger: {
    start: "top 70%",
    // end: "bottom top",
    scrub: 1
  }
});