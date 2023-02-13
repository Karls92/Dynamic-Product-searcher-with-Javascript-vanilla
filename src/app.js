/* 
App name: MagnificStore 
Version: V.1.0.0
release year: 2023
Author: Carmen Bravo. 
Alias: SoftwareDevOne
email: nbravoalcala@gmail.com
*/
const search = (event) => {

    const searchValue = event.target.value.toUpperCase()
    
    let productsContainer = document.querySelector(".products-container")
    
    const productsObject = document.querySelectorAll(".product")
    
    let productsItems = Object.values(productsObject)

    productsItems.forEach(item => {
        if(item.childNodes[3].childNodes[1].textContent.toUpperCase().indexOf(searchValue) > -1) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    })
}
const searchBox = document.querySelector("#search-products")
searchBox.addEventListener("keyup", search)

const btnFavorite = document.querySelectorAll(".btn-favorite")
btnFavorite.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if(btn.parentNode.parentNode.dataset.favorite === "false") {
            btn.parentNode.parentNode.dataset.favorite = "true"
            btn.parentNode.parentNode.classList.add("favorite")
            btn.innerHTML = '<i class="fas fa-heart"></i>'
        } else {
            btn.parentNode.parentNode.dataset.favorite = "false"
            btn.parentNode.parentNode.classList.remove("favorite")
            btn.innerHTML = '<i class="far fa-heart"></i>'
        }
    })
})
