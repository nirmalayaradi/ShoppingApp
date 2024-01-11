let productSection = document.getElementById('productSection');

function displayProducts(productObject){
    console.log(productObject)
    let productCard = document.createElement('div');
    productCard.classList.add('product-card')
    productSection.appendChild(productCard);

    let productImg = document.createElement('img');
    productImg.setAttribute('src', `${productObject.image}`)
    productImg.classList.add('product-image');
    productCard.appendChild(productImg);

    let badgeTextEl = document.createElement('span');
    badgeTextEl.textContent = productObject.badge_text;
    badgeTextEl.classList.add('badge-text');
    if (productObject.badge_text !== null){
        productCard.appendChild(badgeTextEl)
    }
    
    let titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container')
    productCard.appendChild(titleContainer);

    let productTitle = document.createElement('h1');
    if (productObject.title.length > 12){
        productTitle.textContent = productObject.title.slice(0,12)+'...';
    }else{
        productTitle.textContent = productObject.title;
    }
    
    productTitle.classList.add('product-title');
    titleContainer.appendChild(productTitle);

    let vendorEl = document.createElement('li');
    vendorEl.textContent = productObject.vendor
    vendorEl.classList.add('vendor')
    titleContainer.appendChild(vendorEl)

    let priceContainer = document.createElement('div');
    priceContainer.classList.add('price-container');
    productCard.appendChild(priceContainer);

    let actualPrice = document.createElement('span');
    actualPrice.textContent = 'Rs '+ productObject.price + '.00'
    actualPrice.classList.add('actual-price')
    priceContainer.appendChild(actualPrice)

    let camparedPrice = document.createElement('span');
    camparedPrice.textContent = productObject.compare_at_price + '.00'
    camparedPrice.classList.add('compared-price')
    priceContainer.appendChild(camparedPrice)

    let discountEl = document.createElement('span');
    discountEl.textContent = '50% OFF'
    discountEl.classList.add('discount')
    priceContainer.appendChild(discountEl)

    let addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add To Cart'
    addToCartButton.classList.add('add-to-cart-button')
    productCard.appendChild(addToCartButton)




}

function displayMenProducts(object){
    menProducts = object.category_products
    // console.log(womenProducts)
    for (let productObject of menProducts){
        displayProducts(productObject)
    }
    
}

function displayWomenProducts(object){
    womenProducts = object.category_products
    // console.log(womenProducts)
    for (let productObject of womenProducts){
        displayProducts(productObject)
    }
    
}

function displayKidsProducts(object){
    kidsProducts = object.category_products
    // console.log(womenProducts)
    for (let productObject of kidsProducts){
        displayProducts(productObject)
    }
    
}

let menProductsObject;
let womenProductsObject;
let kidsProductsObject;

fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    categories = data.categories
    menProductsObject = categories[0]
    womenProductsObject = categories[1]
    kidsProductsObject = categories[2]
})

let menButton = document.getElementById('menTab');
let womenButton = document.getElementById('womenTab');
let kidsButton = document.getElementById('kidsTab');


menButton.addEventListener('click', function(){
    productSection.textContent = ''
    menButton.classList.add('selected-tab')
    womenButton.classList.remove('selected-tab')
    kidsButton.classList.remove('selected-tab')

    displayMenProducts(menProductsObject)
})

womenButton.addEventListener('click', function(){
    productSection.textContent = ''
    menButton.classList.remove('selected-tab')
    womenButton.classList.add('selected-tab')
    kidsButton.classList.remove('selected-tab')

    displayMenProducts(womenProductsObject)
})

kidsButton.addEventListener('click', function(){
    productSection.textContent = ''

    menButton.classList.remove('selected-tab')
    womenButton.classList.remove('selected-tab')
    kidsButton.classList.add('selected-tab')

    displayMenProducts(kidsProductsObject)
})