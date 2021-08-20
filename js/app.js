document.getElementById('memory16').addEventListener('click', function () {
    const price = 180;
    const memoeyCost = document.getElementById('memory-cost');
    const fixedMemory = document.getElementById('fixed-memory');
    memoeyCost.innerText = price;
    fixedMemory.innerText = '';
    //document.getElementById('fixed-memory') = memoeyCost.innerText
})