//function for declare all coasts;
function productCoast(id, value) {
    const price = document.getElementById(id);
    price.innerText = value;

    totalprice()
}

//for memory
document.getElementById('8GB-memory-btn').addEventListener('click', function () {
    productCoast('extra-memory-coast', 0);
})
document.getElementById('16GB-memory-btn').addEventListener('click', function () {
    productCoast('extra-memory-coast', 180);
})

// for Storage
document.getElementById('256GB-storage-btn').addEventListener('click', function () {
    productCoast('extra-storage-coast', 0);
})
document.getElementById('512GB-storage-btn').addEventListener('click', function () {
    productCoast('extra-storage-coast', 100);
})
document.getElementById('1TB-storage-btn').addEventListener('click', function () {
    productCoast('extra-storage-coast', 180);
})

// for delivery 
document.getElementById('free-delivery-btn').addEventListener('click', function () {
    productCoast('delivery-charge', 0);
})
document.getElementById('paid-delivery-btn').addEventListener('click', function () {
    productCoast('delivery-charge', 20);
})

// for total
function productPrice(id) {
    const product = document.getElementById(id).innerText
    return product;
}
function totalprice() {
    const memory = productPrice('extra-memory-coast')
    const storage = productPrice('extra-storage-coast')
    const delivary = productPrice('delivery-charge')
    const memoreyPrice = parseFloat(memory);
    const storagePrice = parseFloat(storage);
    const delivaryCoast = parseFloat(delivary);
    const toatalCoast = memoreyPrice + storagePrice + delivaryCoast + 1299;
    document.getElementById('total-coast').innerText = toatalCoast;
    const finalCoast = document.getElementById('final-coast')
    finalCoast.innerText = document.getElementById('total-coast').innerText;
}
// final coast with discount 
document.getElementById('apply-btn').addEventListener('click', function () {
    const totalprice = document.getElementById('total-coast').innerText
    const finalCoast = document.getElementById('final-coast')
    const promoCode = document.getElementById('cupon-field').value;
    if (promoCode == 'stevekaku') {
        finalCoast.innerText = parseFloat(totalprice) - (parseFloat(totalprice) / 5);
    }
})
