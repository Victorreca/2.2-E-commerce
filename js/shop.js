// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];

// => Reminder, it's extremely important that you debug your code.
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster.
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];

let total = 0;

// Exercise 1
const buy = (productId) => {
  // 1. Loop for to the array products to get the item to add to cart
  for (let i = 0; i < products.length; i++) {
    // 2. Add found product to the cart array
    if (products[i].id === productId) {
      const productInCart = cart.find((product) => product.id === productId);

      if (productInCart) {
        productInCart.quantity += 1;
        console.log(
          `${productInCart.name} quantity increased to ${productInCart.quantity}.`
        );
      } else {
        const newProductToAdd = { ...products[i], quantity: 1 };
        cart.push(newProductToAdd);
        console.log(`${newProductToAdd.name} added to cart.`);
      }
    }
  }
};

// Exercise 2
const cleanCart = () => {
  cart.length = 0;
  console.log("Cart is empty.");
};

// Exercise 3
const calculateTotal = () => {
  total = 0;
  // Calculate total price of the cart using the "cartList" array
  for (let i = 0; i < cart.length; i++) {
    if (cart.length > 0) {
      total += cart[i].price * cart[i].quantity;
    }
  }
  console.log("Total Price: " + total);
};

// Exercise 4
const applyPromotionsCart = () => {
  // Apply promotions to each item in the array "cart"
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    if (product.offer && product.quantity >= product.offer.number) {
      const promotionPrice = 1 - product.offer.percent / 100;
      product.subtotalWithDiscount =
        product.price * product.quantity * promotionPrice;
    }
  }
};

// Exercise 5
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {}

function open_modal() {
  printCart();
}
