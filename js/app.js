



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

}

document.getElementById('memory16Gb').addEventListener('click', function () {

    getProduct('memory-cost', 180, true);
    // let price = 180;
    // price = 0;
    // const memoeyCost = document.getElementById('memory-cost');
    // const fixedMemory = document.getElementById('fixed-memory');
    // memoeyCost.innerText = price;
    // fixedMemory.innerText = 0;
    //document.getElementById('fixed-memory') = memoeyCost.innerText
})

document.getElementById('memory8Gb').addEventListener('click', function () {
    getProduct('memory-cost', 180, false);
})
