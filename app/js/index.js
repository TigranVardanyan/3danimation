document.querySelector(".container").addEventListener("mousemove", (e) => {
  document.querySelector(".img1").style.transform = `rotateX(${e.pageY/ 275}deg) rotateY(${e.pageX/275}deg) translateZ(60px)`;
  document.querySelector(".img2").style.transform = `rotateX(${e.pageY/ 275}deg) rotateY(${e.pageX/275}deg) translateZ(160px)`;
  document.querySelector(".img3").style.transform = `rotateX(${e.pageY/ 275}deg) rotateY(${e.pageX/275}deg) translateZ(160px)`;
  document.querySelector(".img4").style.transform = `rotateX(${e.pageY/ 275}deg) rotateY(${e.pageX/275}deg) translateZ(160px)`;
  document.querySelector(".img5").style.transform = `rotateX(${e.pageY/ 275}deg) rotateY(${e.pageX/275}deg) translateZ(160px)`;
})