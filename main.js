document.addEventListener("load", function() {
  const HEADER = document.querySelector("main > header");

  window.addEventListener("scroll", function() {
    HEADER.classList.add("small");
  });

  console.log("Hello World");
});
