var img = document.querySelector("img");
var body = document.querySelector("body");
var movex = 0;
var movey = 0;
body.addEventListener("keydown", function (dets) {
  console.log(dets.keyCode);
  if (dets.keyCode == 102) {
    movex += 10;
    img.style.left = movex + "px";
  }
  if (dets.keyCode == 100) {
    movex -= 10;
    img.style.left = movex + "px";
  }
  if (dets.keyCode == 98) {
    movey += 10;
    img.style.top = movey + "px";
  }
  if (dets.keyCode == 104) {
    movey -= 10;
    img.style.top = movey + "px";
  }
});
