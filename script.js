//image hovering effect
var imageDiv = document.querySelector(".image");
var hoverDiv = document.querySelector(".image a");

imageDiv.addEventListener("mouseenter", () => {
  gsap.to(hoverDiv, {
    animation: imageHoverEffect,
    duration: 0.3,
  });
});

imageDiv.addEventListener("mousemove", () => {
  hoverDiv.style.opacity = "1";
});
hoverDiv.addEventListener("hover", () => {
  hoverDiv.style.opacity = "1";
});
imageDiv.addEventListener("hover", () => {
  hoverDiv.style.opacity = "1";
});
imageDiv.addEventListener("mouseleave", () => {
  hoverDiv.style.trandform = "translateY(-200px)";
  hoverDiv.style.opacity = "0";
});

//moving cursor making

Shery.mouseFollower();

//text animation
Shery.textAnimate(".heading", {
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

Shery.makeMagnet(".magnet", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.hoverWithMediaCircle(".heading", {
  images: ["./Assets/Black Water.avif"],
});
Shery.hoverWithMediaCircle(".left h3", {
  images: ["./Assets/Dark Sky.avif"],
});

Shery.hoverWithMediaCircle(".right p", {
  images: ["./Assets/White bg.avif"],
});
