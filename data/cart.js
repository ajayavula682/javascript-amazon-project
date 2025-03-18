export const cart =[];  // here we use the export key word for using the module concept to avoid the naming convention 
// for modules 3 steps were involved 1--> input type module in the script tag 
//2--> type module before the the variable that you want to export to the another page(source page)
//3--> in the destination page we will use the import tag

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
}