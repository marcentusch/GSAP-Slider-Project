function init() {
  // projects element is hidden by default, so we avoid the mess when waiting for gsap to load
  gsap.set(".projects", { autoAlpha: 1 });
  gsap.set(".project", { x: "-100%" });

  const element = document.querySelector("div.project01");

  tlIn = gsap.timeline();
  tlIn.fromTo(
    element,
    { autoAlpha: 0, x: "-100%" },
    { duration: 0.7, autoAlpha: 1, x: 0 }
  );
}

window.addEventListener("load", function () {
  init();
});
