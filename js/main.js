function init() {
  // projects element is hidden by default, so we avoid the mess when waiting for gsap to load
  gsap.set(".projects", { autoAlpha: 1 });
  gsap.set(".project", { x: "-100%" });

  const element = document.querySelector("div.project01"),
    projectClasses = element.className.split(" "),
    projectClass = projectClasses[1];

  const tlIn = gsap.timeline();
  tlIn.fromTo(
    element,
    { autoAlpha: 0, x: "-100%" },
    {
      duration: 0.7,
      autoAlpha: 1,
      x: 0,
      onStart: updateClass,
      onStartParams: [projectClass],
    }
  );

  const tlOut = gsap.timeline();
  tlOut.to(element, {
    duration: 0.7,
    x: 250,
    autoAlpha: 0,
  });

  // Combine the other two timelines into a master timeline
  const tlTransition = gsap.timeline();
  tlTransition.add(tlIn).add(tlOut);

  function updateClass(projectClass) {
    document.querySelector("body").className = projectClass;
  }
}

window.addEventListener("load", function () {
  init();
});
