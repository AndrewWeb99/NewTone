$(function() {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 40000,
        values: [5000, 10000],
        slide: function(event, ui) {
            $("#amount").val(ui.values[0] + " тг" + " - " + ui.values[1] + " тг");
        }
    });
    $("#amount").val($("#slider-range").slider("values", 0) + " тг" +
        " - " + $("#slider-range").slider("values", 1) + " тг");
});

let filter__price = document.querySelector('.filter__pricep');
let filter__hidden = document.querySelector('.filter__price-active');
filter__price.addEventListener('click', () => {
    filter__hidden.classList.toggle('hidden_filter');
    filter__price.classList.toggle('pricep');
})

// 
let cat__per = localStorage.getItem('cat');
console.log(cat__per)

function loadGoods() {
    $.getJSON('products.json', function(data) {
        console.log(data);
    })
}