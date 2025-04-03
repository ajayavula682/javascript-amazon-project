  // here we use the export key word for using the module concept to avoid the naming convention 
// for modules 3 steps were involved 1--> input type module in the script tag 
//2--> type module before the the variable that you want to export to the another page(source page)
//3--> in the destination page we will use the import tag

export let cart = JSON.parse(localStorage.getItem('cart'));


if(!cart){
  cart=[{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
  
  },{
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
  }];

}


function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function  addToCart(productId){
  let matchingItem;

  cart.forEach((cartItem) => {
      if(productId ==cartItem.productId){
        matchingItem =cartItem;
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
    saveToStorage();
}

 export function removeFromCart(productId){
  const newCart=[];
  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}