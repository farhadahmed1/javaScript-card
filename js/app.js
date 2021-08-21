
function getProduct(pdId, price, isExtraAdd) {
    const prouctInput = document.getElementById(pdId);
    let extraPrice = '';

    if (isExtraAdd == true) {
        extraPrice = 1;
    }
    else if (isExtraAdd == false) {
        extraPrice = 0;
    }
    prouctInput.innerText = extraPrice * price;

    // total calculation

    totalcost();

}
// price Calcutation funtion

function priceCalcutation(costId) {
    const productCost = document.getElementById(costId).innerText;
    const calculatCost = parseFloat(productCost);
    return calculatCost;
}

//    totalcost 

function totalcost() {

    const bestPrice = priceCalcutation('best-price');
    const memoryCost = priceCalcutation('memory-cost');
    const storageCost = priceCalcutation('storage-cost');
    const deliveryCost = priceCalcutation('delivery-cost');
    let totalPrice = bestPrice + memoryCost + storageCost + deliveryCost;

    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('pomo-total-price').innerText = totalPrice;
    return totalPrice;

}

document.getElementById('memory16Gb').addEventListener('click', function () {

    getProduct('memory-cost', 180, true);

})

document.getElementById('memory8Gb').addEventListener('click', function () {
    getProduct('memory-cost', 0, false);
})


//  promo code

document.getElementById('pomoCodeBtn').addEventListener('click', function () {
    const pomoCode = document.getElementById('pomo-code-filed').value;

    const updatePrice = totalcost()

    if (pomoCode.toLowerCase() == 'stevekaku') {
        newPrice = (updatePrice * 20) / 100;
    }
    const pomoPrice = updatePrice - newPrice;
    document.getElementById('pomo-total-price').innerText = pomoPrice;


})

