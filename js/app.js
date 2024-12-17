const defultImg = document.querySelector('.container .gallary .defualt');
const firstImg = document.querySelector('.container .gallary .mult-gall div:first-child');
const seconttImg = document.querySelector('.container .gallary .mult-gall div:nth-child(2)');
const thirdImg = document.querySelector('.container .gallary .mult-gall div:nth-child(3)');
const forthImg = document.querySelector('.container .gallary .mult-gall div:last-child');

firstImg.addEventListener("click", () => {
    defultImg.style.background = "url('../img/product1/img-1.png')";

})
seconttImg.addEventListener("click", () => {
    defultImg.style.background = "url('../img/product1/img-2.png')";


})
thirdImg.addEventListener("click", () => {
    defultImg.style.background = "url(../img/product1/img-3.png)";

})
forthImg.addEventListener("click", () => {
    defultImg.style.background = "url('../img/product1/img-4.png')";


})




