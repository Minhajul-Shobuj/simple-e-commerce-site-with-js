//function for declare all coasts;
function allcoasts(id, value) {
    const price = document.getElementById(id);
    price.innerText = value;
}

//for memory
document.getElementById('8GB-memory-btn').addEventListener('click', function () {
    allcoasts('extra-memory-coast', 0);

})
document.getElementById('16GB-memory-btn').addEventListener('click', function () {
    allcoasts('extra-memory-coast', 180);
})

// for Storage
document.getElementById('256GB-storage-btn').addEventListener('click', function () {
    allcoasts('extra-storage-coast', 0);
})
document.getElementById('512GB-storage-btn').addEventListener('click', function () {
    allcoasts('extra-storage-coast', 100);
})
document.getElementById('1TB-storage-btn').addEventListener('click', function () {
    allcoasts('extra-storage-coast', 180);
})

// for delivery 
document.getElementById('free-delivery-btn').addEventListener('click', function () {
    allcoasts('delivery-charge', 0);
})
document.getElementById('paid-delivery-btn').addEventListener('click', function () {
    allcoasts('delivery-charge', 20);
})

// for total
// function totalcalc() {
//     var memoryPrice = document.getElementById('extra-memory-coast').innerText
//     console.log(memoryPrice)
//     var storagePrice = parseFloat(document.getElementById('extra-storage-coast').innerText)
//     var deliveryCharge = parseFloat(document.getElementById('delivery-charge').innerText)
//     var total = document.getElementById('total-coast');
//     total.innerText = memoryPrice + storagePrice + deliveryCharge;
// }

document.getElementById('total-coast').addEventListener("keydown", function (event) {

})



// totalPrice.innerText = 
// document.getElementById('extra-memory-coast').innerText
// console.log(totalPrice.innerText)
//     + parseFloat(document.getElementById('extra-storage-coast').innerText) + parseFloat(document.getElementById('delivery-charge').innerText)
