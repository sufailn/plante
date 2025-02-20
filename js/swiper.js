var swiper = new Swiper(".mySwiper", {
  navigation: true,
  effect: "slide",
  speed: 900,
  simulateTouch: true,
  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
});

const bannerItems = document.getElementById("swiper-content");
const bannerImgs = ["hardscape.jpg", "flwr.jpg", "irrigationbanner.jpg", "bannermosswall.png", "terrarium.jpg", "indoor-plants-studio.jpg"];
const titles = ["Hardscaping", "Landscaping", "Irrigation","Moss Wall","Terrarium","Indoor Plants"]; // Titles for first three images

const htmlString = bannerImgs
  .map((item, index) => {
    const title = titles[index] || ""; // Assign title only for the first three images
    return `
        <div class="swiper-slide">
            <div class="image" style="background:linear-gradient(0deg, rgba(255,255, 255, 0.3), rgba(0, 0, 0, 0.3)), url(./img/banner/${item});background-size: cover;background-position: center center;">
                <div class="overlay">
                    <div class="banner-content">
                        <h3>${title}</h3>
                    </div>
                </div>
            </div>
        </div>
    `;
  })
  .join("");

bannerItems.innerHTML = htmlString;
