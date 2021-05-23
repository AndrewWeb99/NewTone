$('#spoiler1').click(function() {
    if ($(this).is(':checked')) {
        $('.spoiler__text').show(300);
    } else {
        $('.spoiler__text').hide(300);
    }
});

let tabs = document.querySelector('.tabs__mini')
let tabs__links = document.querySelector('.tabs__links')
tabs.addEventListener('click', () => {

    tabs__links.classList.toggle('active');
    tabs.classList.toggle('pricep');
})