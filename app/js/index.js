document.querySelector("body").addEventListener("mousemove", (e) => {
  degY = e.pageY/240 - 2;
  degX = e.pageX/240 - 2;
  document.querySelector(".img1").style.transform = `rotateX(${degY}deg) rotateY(${degX}deg) translateZ(60px)`;
  document.querySelector(".img2").style.transform = `rotateX(${degY}deg) rotateY(${degX}deg) translateZ(160px)`;
  document.querySelector(".img3").style.transform = `rotateX(${degY}deg) rotateY(${degX}deg) translateZ(160px)`;
  document.querySelector(".img4").style.transform = `rotateX(${degY}deg) rotateY(${degX}deg) translateZ(160px)`;
  document.querySelector(".img5").style.transform = `rotateX(${degY}deg) rotateY(${degX}deg) translateZ(160px)`;
});