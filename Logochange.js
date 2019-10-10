var image = document.getElementById("image");
var currentPos = 0;
var images = ["elmt/ren.png", "elmt/ren1.png"]

function volgendefoto() {
  if (++currentPos >= images.length)
    currentPos = 0;

  image.src = images[currentPos];
}

setInterval(volgendefoto, 1000);
