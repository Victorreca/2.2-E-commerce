// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
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
      } else {
        const newProductToAdd = { ...products[i], quantity: 1 };
        cart.push(newProductToAdd);
      }
    }
  }

  let countNumber = 0;
  const countButtonCart = document.getElementById("count_product");
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    countNumber += product.quantity;
  }
  countButtonCart.textContent = countNumber;
};

// Exercise 2
const cleanCart = () => {
  const countButtonCart = document.getElementById("count_product");
  const tbodyTable = document.getElementById("cart_list");
  const totalPriceTable = document.getElementById("total_price");

  cart.length = 0;
  countButtonCart.textContent = 0;
  tbodyTable.innerHTML = "";
  totalPriceTable.textContent = "0.00";
};

// Exercise 3
const calculateTotal = () => {
  total = 0;
  // Calculate total price of the cart using the "cartList" array

  for (let i = 0; i < cart.length; i++) {
    const totalProductPrice = cart[i].subtotalWithDiscount
      ? cart[i].subtotalWithDiscount
      : cart[i].price * cart[i].quantity;

    total += totalProductPrice;
  }
  return total;
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
const printCart = (totalPrice) => {
  // Fill the shopping cart modal manipulating the shopping cart dom
  const tbodyTable = document.getElementById("cart_list");

  const totalPriceTable = document.getElementById("total_price");

  tbodyTable.innerHTML = "";
  let tableHTML = "";

  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    const titleProductCart = product.name;
    const priceProductCart = product.price.toFixed(2);
    const qtyProductCart = product.quantity;
    const firstCapitalLetter = titleProductCart.charAt(0).toUpperCase();
    const titleProductWithCapitalLetter =
      firstCapitalLetter + titleProductCart.slice(1).toLowerCase();
    const totalProduct = product.subtotalWithDiscount
      ? product.subtotalWithDiscount.toFixed(2)
      : (product.price * product.quantity).toFixed(2);

    tableHTML += `
      <tr>
        <th scope="row">${titleProductWithCapitalLetter}</th>
        <td>$${priceProductCart}</td>
        <td>${qtyProductCart}</td>
        <td>$${totalProduct}</td>
      </tr>
    `;
  }
  tbodyTable.innerHTML = tableHTML;
  totalPriceTable.textContent = totalPrice.toFixed(2);
};

// ** Nivell II **

// Exercise 7
const removeFromCart = (productId) => {
  console.log(cart);

  const productIndex = cart.findIndex((product) => product.id === productId);
  const countButtonCart = document.getElementById("count_product");

  if (productIndex !== -1) {
    const product = cart[productIndex];
    if (product.quantity > 1) {
      product.quantity--;
    } else {
      cart.splice(productIndex, 1);
    }

    applyPromotionsCart();
    const priceTotalProducts = calculateTotal();
    printCart(priceTotalProducts);
    let totalCount = 0;

    cart.forEach((product) => {
      totalCount += product.quantity;
    });
    countButtonCart.textContent = totalCount;
  } else {
    alert("Product not found in the cart");
  }

  console.log(cart);
};

const open_modal = () => {
  applyPromotionsCart();
  const priceTotalProducts = calculateTotal();
  printCart(priceTotalProducts);
};
