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
const bannerImgs = ["1.jpg", "2.jpg", "3.jpg",'4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg'];
const htmlString = bannerImgs
  .map((item, index) => {
    return `
        <div class="swiper-slide">
            <div class="image" style="background:linear-gradient(0deg, rgba(255,255, 255, 0.3), rgba(0, 0, 0, 0.3)), url(./img/banner/${item});background-size: cover;background-position: center center;">
                <div class="overlay">
                <div class="banner-content">
                <h6>Bringing nature into your home!</h6>
                <h3>Green your space with Plante</h3>

         
              </div>
                </div>
            </div>
        </div>
`;
  })
  .join("");
bannerItems.innerHTML = htmlString;

{
  /* <a href="./img/${item}" data-fancybox="gallery">
        </a> */
}
