//syntax for the module to import the variable using the file path
// to avoid the naming conflicts we can use the alaising 
import {cart} from '../data/cart.js';


let productsHTML ='';
products.forEach((product) => {
      productsHTML += `
      <div class="product-container">
      <div class="product-image-container">
      <img class="product-image"
      src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
      ${product.name}
      </div>

      <div class="product-rating-container">
      <img class="product-rating-stars"
      src="images/ratings/rating-${product.rating.stars * 10}.png">
      <div class="product-rating-count link-primary">
      ${product.rating.count}
      </div>
      </div>

      <div class="product-price">
      $${(product.priceCents / 100).toFixed(2)}
      </div>

      <div class="product-quantity-container">
      <select>
      <option selected value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart ">
      <img src="images/icons/checkmark.png">
      Added
      </div>

      <button class="add-to-cart-button 
      button-primary js-add-to-cart" 
      data-product-id="${product.id}">
      Add to Cart
      </button>
      </div>
  `;
 // console.log(html);
});
console.log(productsHTML); // select dom element by using query selector
document.querySelector('.js-products-grid').
innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart')
.forEach(button => {
  button.addEventListener('click', () => {
    //console.log("Added product");
    const productId=button.dataset //adding the selected item to cart array
    .productId;

    let matchingItem;

    cart.forEach(
      (item) => {
        if(productId ==item.productId){
          matchingItem =item;
        }   //this checks weather the selected item existed in the  cart or not
      });

      if(matchingItem){
        matchingItem.quantity +=1; // if existed it increment 
      }
      else{
        cart.push({
          productId: productId,
          quantity: 1 // if not is just adds to the cart array
        });
      }

      let cartQuantity = 0;

      cart.forEach((item) => {
        cartQuantity += item.quantity;
      });

      document.querySelector('.js-cart-quantity').
      innerHTML = cartQuantity;


      //console.log(cartQuantity);
    //console.log(cart);
  });
});

