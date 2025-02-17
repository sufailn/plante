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
const bannerImgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];
const titles = ["Hardscaping", "Landscaping", "Irrigation","Moss Wall","Terrarium","Indoor Plants","Hardscaping", "Landscaping", "Irrigation"]; // Titles for first three images

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
