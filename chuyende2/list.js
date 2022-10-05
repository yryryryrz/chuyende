const app = document.getElementById("aaa");
const search = document.getElementById("searchbar");
fetch('https://63217d1882f8687273b2da3f.mockapi.io/product-list')
    .then((response) => {
        return response.json();
    })
    .then((posts) => {
      console.log(posts);
        function html(items) {
          return items.map(function(post) {
            return `
            <div class="col">
              <div class=" p-0">
                <div  class="swiper ">
                  <a href="" class="swiper__image-list"><img src="./assets/img/bosutap/${post.image}" alt=""></a>
                  <div class="swiper--image1">
                  <a href="" class=""><img class="swiper__image--src-list" src="./assets/img/bosutap/${post.image2}" alt="">
                  </div>
                  <div class="product-loop__detail">
                    <div class="swiper--text text-center">
                      <a href=""><span>
                      ${post.name}
                      </span></a>
                    <div class="price">
                      <a href=""><span>${post.price}</span></a>           
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            `
        }).join('');
        } 
        
        app.innerHTML = html(posts);
        search.addEventListener('input', (e) => {
          filterItems = posts.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
          app.innerHTML = html(filterItems);
        })
    })

    