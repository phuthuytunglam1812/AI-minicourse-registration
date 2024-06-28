let product_area = document.getElementById("product-area");

function initialize() {
    getProducts();
}

initialize();

async function getProducts() {
    let data = await fetch(" ../js/festival.json") //đổi link API thành file json
        .then((response) => response.json())
        .then((json) => json);
    console.log(data);
    loadProducts(data);
}

function loadProducts(data) {
    data.forEach(function (product) {
        console.log(product);
        let output = `
        <div class="product">
        <div class="post-img"><img src="${product.image}" alt="" class="image"></div/
        <div class="post-content">
            <h1 class="country">Đất nước:${product.country}</h1>
            <p class="another-name">Tên gọi khác:${product.anothername}</p>
            <p class="activity">Các hoạt động:${product.activity}</p>
        </div>
    </div>`;
        product_area.innerHTML += output;
    });
}
