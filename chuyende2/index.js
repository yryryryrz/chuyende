
const app = document.getElementById("ppp");
fetch('https://63217d1882f8687273b2da3f.mockapi.io/product')
    .then((response) => {
        return response.json();
    })
    .then((posts) => {
        var htmls = posts.map(function(post) {
            return `
            <div class="swiper-container ">
              <a href="" class="swiper-container--image"><img src="assets/img/bosutap/${post.image}" alt=""></a>
              <div class="swiper-container--image1">
              <a href="" class=""><img class="swiper-container--image-src" src="assets/img/bosutap/${post.image2}" alt="">
                <a href="" class="swiper-container--image-text"><span class="swiper-container--image-text__1">CHI TIẾT</span></a></a>
              </div>
              <div class="product-loop__detail">
                <div class="swiper-container--text text-center">
                  <a href=""><span>
                    ${post.name}
                  </span></a>
                <div class="price">
                  <a href=""><span>${post.price}</span></a>           
                </div>
                </div>
            </div>
            </div>
            `
        })
        var html = htmls.join('');
        app.innerHTML = html;
    })
