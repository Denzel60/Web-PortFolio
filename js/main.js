/* ======== typing Animation ========= */
var typed = new Typed(".typing", {
  strings: [
    "Web Developer",
    "Web Designer",
    "Frontend Developer",
    "Backend Engineer",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
/* ======== Aside ========= */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  //   console.log(navList[i]);
  const a = navList[i].querySelector("a");
  //   console.log(a);
  a.addEventListener("click", function () {
    // console.log(this);
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("back-section");
    }

    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        // console.log("back-section" + navList[j].querySelector("a"));
        allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
  });
}
function showSection(element) {
  //   console.log(element.getAttribute("href").split("#"));
  //   const href = element.getAttribute("href").split("#");
  //   target = href[1];
  //   console.log(target);
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  //   console.log(target);
  document.querySelector("#" + target).classList.add("active");
}
