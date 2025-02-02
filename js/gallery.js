const galleryItems = document.querySelector(".row");

var imgNo = 42;
var divs = Math.floor(imgNo / 3);
var j = 1
half = divs
for (let i = 1; i <= 3; i++) {
    console.log(half);
  const galleryItem = document.createElement("div");
  galleryItem.className = "col-lg-4 col-md-12 mb-4 mb-lg-0";

  while (j <= half) {
    const aTag = document.createElement("a");
    aTag.setAttribute("data-fancybox", "gallery");
    aTag.setAttribute("href", `./img/gallery/${j}.jpg`);

    const imgTag = document.createElement("img");
    imgTag.className = "w-100 shadow-1-strong rounded mb-4";
    imgTag.setAttribute("src", `./img/gallery/${j}.jpg`);
    imgTag.setAttribute("alt", `Image ${j}`);

    aTag.appendChild(imgTag);
    galleryItem.appendChild(aTag);
    j++
  }
  half += divs
galleryItems.appendChild(galleryItem);
}
