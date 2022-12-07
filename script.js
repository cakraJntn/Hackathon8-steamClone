const menuCategory = document.getElementById("menu-category")
const dropdownCategory = document.getElementById("dropdown-category").classList
function showCategoryBox() {
    dropdownCategory.toggle("hidden")
    dropdownCart.add("hidden")
}

const menuCart = document.getElementById("menu-cart")
const dropdownCart = document.getElementById("dropdown-cart").classList
function showCartBox() {
    dropdownCart.toggle("hidden")
    dropdownCategory.add("hidden")
}