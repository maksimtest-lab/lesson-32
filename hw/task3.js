class ShopCart {
    constructor () {}

    addProduct(product) {
        const products = this.getProducts();

        if (!this.isProductInCart(product)) {products
            products.push(product);
            localStorage.setItem('products', JSON.stringify(products));
        }
        this.updateButtons();
    }

    removeProduct(product) {
        const products = this.getProducts().filter(item => item.id !== product.id);
        localStorage.setItem('products', JSON.stringify(products));
        this.updateButtons();
    }

    getProducts() {
        let products = [];

        if (localStorage.getItem('products')) {
            products = JSON.parse(localStorage.getItem('products'));
        }
        return products;
    }

    isProductInCart(product) {
        const products = this.getProducts();
        return products.some(item => item.id === product.id);
    }

    createShopCart() {
        const products = this.getProducts();
        const shopCartContainer = document.createElement('div');
        shopCartContainer.classList.add('shop-cart-list');

        products.forEach((item) => {
            const card = new Card(item);
            shopCartContainer.appendChild(card.createCard());
        })

        this.updateButtons();

        return shopCartContainer;
    }

    updateButtons() {
        const buttons = document.querySelectorAll('.card-button');

        buttons.forEach((button) => {
            const productId = button.dataset.id;

            if(this.isProductInCart({id: Number(productId)})) {
                button.textContent = 'Удалить из корзины';
                button.classList.add('active');
            } else {
                button.textContent = 'Добавить в корзину';
                button.classList.remove('active');
            }
        })
    }

    render(targetElement) {
        const target = document.querySelector(targetElement);
        target.innerHTML = '';

        if(target) {
            target.appendChild(this.createShopCart());
        } else {
            console.error('Такой элемент не найден');
        }
    }
}

class Card {
    constructor (product) {
        this.product = product;
        this.shopCart = new ShopCart();
    }

    createCard() {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card');

        const cardTitle = document.createElement('h2');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = this.product.title;

        const cardDescription = document.createElement('p');
        cardDescription.classList.add('card-description');
        cardDescription.textContent = this.product.description;

        const cardImageContainer = document.createElement('div');
        cardImageContainer.classList.add('card-image-wrapper');

        const cardImage = document.createElement('img');
        cardImage.classList.add('card-image');
        cardImage.src = this.product.image;

        const cardFooter = document.createElement('div');
        cardFooter.classList.add('card-footer');

        const cardPrice = document.createElement('span');
        cardPrice.classList.add('card-price');
        cardPrice.textContent = "$" + this.product.price;

        const cardButton = document.createElement('button');
        cardButton.classList.add('card-button');
        cardButton.dataset.id = this.product.id;
        cardButton.addEventListener('click', (event) => this.cartEvent(this.product, event));

        if(this.shopCart.isProductInCart(this.product)) {
            cardButton.textContent = 'Удалить из корзины';
            cardButton.classList.add('active');
        } else {
            cardButton.textContent = 'Добавить в корзину';
        }

        cardContainer.appendChild(cardTitle);
        cardContainer.appendChild(cardImageContainer);
        cardContainer.appendChild(cardDescription);
        cardContainer.appendChild(cardFooter);
        cardImageContainer.appendChild(cardImage);
        cardFooter.appendChild(cardPrice);
        cardFooter.appendChild(cardButton);

        return cardContainer;
    }

    cartEvent(product, event) {
        const cardButton = event.target;

        if(this.shopCart.isProductInCart(this.product)) {
            this.shopCart.removeProduct(this.product);
            cardButton.textContent = 'Добавить в корзину';
            cardButton.classList.remove('active');
        } else {
            this.shopCart.addProduct(this.product);
            cardButton.textContent = 'Удалить из корзины';
            cardButton.classList.add('active');
        }
        this.shopCart.render('.shop-cart');
    }

    render(targetElement) {
        const target = document.querySelector(targetElement);

        if(target) {
            target.appendChild(this.createCard());
        } else {
            console.error('Такой элемент не найден');
        }
    }
}

async function fetchProducts() {
    return fetch('https://fakestoreapi.com/products')
            .then(response => response.json());
}
const shopCart = new ShopCart();
shopCart.render('.shop-cart');

const products = fetchProducts();

products.then((items) => {

    items.forEach((item) => {
            const card = new Card(item);
            card.render('.product-list');

    });
})


const form = document.getElementById('order_form');

async function sendOrder(url, formData) {
    const data = {formData: formData, products: shopCart.getProducts()};
    console.log(data);

    return await fetch(url, {
                method: 'POST',
                body: JSON.stringify(data)
            })
            .then((response) => {
                if (!response.ok) {
                    return `HTTP error! status: ${response.status}`;
                }
                return response.json();
            });
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // All validation pass

    const result =  await sendOrder('https://fakestoreapi.com/carts2', {
        name,
        email,
        message
    });
    console.log(result);

    const result2 =  await sendOrder('https://fakestoreapi.com/carts', {
        name,
        email,
        message
    });
    console.log(result2);


});