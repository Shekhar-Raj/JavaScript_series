let totalPrice = 0;
shoppingCart.forEach(item => {
    totalPrice += item.price;
});
console.log(totalPrice);
