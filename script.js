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


let dataBase = [
    {
        name: "Grand Theft Auto VI",
        price: 800_000,
        category: "action",
        img: "gta VI.jpg",
        cart: false

    },
    {
        name: "Resident Evil 4",
        price: 750_0000,
        category: "action",
        img: "resident evil.jpg",
        cart: false
    },
    {
        name: "Uncharted: Legacy of Thieves Collection",
        price: 900_000,
        category: "adventure",
        img: "uncharated.jpg",
        cart: false

    },
    {
        name: "The Elder Scrolls V: Skyrim",
        price: 450_000,
        category: "RPG",
        img: "the elder.jpg",
        cart: false
    },
    {
        name: "Cyberpunk 2077",
        price: 950_000,
        category: "RPG",
        img: "cyber punk.jpg",
        cart: false
    },
    {
        name: "FIFA 22",
        price: 750_000,
        category: "sport",
        img: "fifa 22.jpg",
        cart: false
    },
    {
        name: "Tony Hawk's Pro Skater 1 + 2",
        price: 650_000,
        category: "sport",
        img: "tony hawks.jpg",
        cart: false
    },
    {
        name: "Red Dead Redemption 2",
        price: 0,
        category: "adventure",
        img: "RDR.jpg",
        cart: false
    },
    {
        name: "Horizon Zero Dawn",
        price: 350_000,
        category: "adventure",
        img: "horizon.jpg",
        cart: false
    },
    {
        name: "The Witcher 3",
        price: 560_000,
        category: "RPG",
        img: "witcher.jpg",
        cart: false
    }
]

document.getElementById("gameCard")

const gameEl = document.getElementById("gameCard")

const cart = document.getElementById('menu-cart')



for (let i = 0; i < dataBase.length; i++) {
    let categoryColor
    let imgOutline
    if (dataBase[i].category === "adventure") {
        imgOutline = "outline rounded-[20px] outline-1 outline-[#C56456] shadow-[0px_3px_30px_-7px_#C56456]"
        categoryColor = "inline-flex px-[20px] py-[10px] bg-[#C56456] text-white font-bold rounded-lg"
    } else if (dataBase[i].category === "action") {
        imgOutline = "outline rounded-[20px] outline-1 outline-[#C59F56] shadow-[0px_3px_30px_-7px #C59F56]"
        categoryColor = "inline-flex px-[20px] py-[10px] bg-[#C59F56] text-white font-bold rounded-lg"
    } else if (dataBase[i].category === "sport") {
        imgOutline = "outline rounded-[20px] outline-1 outline-[#56C561] shadow-[0px_3px_30px_-7px #56C561]"
        categoryColor = "inline-flex px-[20px] py-[10px] bg-[#56C561] text-white font-bold rounded-lg"
    } else {
        imgOutline = "outline rounded-[20px] outline-1 outline-[#9456C5] shadow-[0px_3px_30px_-7px #9456C5]"
        categoryColor = "inline-flex px-[20px] py-[10px] bg-[#9456C5] text-white font-bold rounded-lg"
    }

    gameEl.innerHTML += `<div class="relative">
    <div class="flex absolute top-[-1px] left-[-1px]">
        <p class="${categoryColor}">
            ${dataBase[i].category}
        </p>
    </div>
    <div class="flex flex-col gap-[10px]">
        <div>
            <img class="${imgOutline}"
                src="./assets/gameCover/${dataBase[i].img}" alt="gambar-thewitcher">
        </div>
        <div class="flex gap-[20px] text-white">
            <p class="font-bold"> ${dataBase[i].name}</p>
            <p>${dataBase[i].price}</p>
        </div>
    </div>
    <div class="flex absolute bottom-[0px] right-[-1px]">
        <p
            class="inline-flex bg-[#4F76FF] text-white font-bold rounded-lg p-[20px] shadow-[0px_4px_18px_#4F76FF]">
          
            <button onclick="addToCart(${i})">Add to Cart</button>
        </p>
    </div>
</div>`
}
function addToCart(index) {
    dataBase[index].cart = true;
    renderCart()
}

const cartcheck = document.getElementById("cart-check")

function renderCart() {
    let count = 0
    cartcheck.innerHTML = ""
    for (let i = 0; i < dataBase.length; i++) {
        const element = dataBase[i];
        if (dataBase[i].cart === true) {
            count++
            cartcheck.innerHTML += ` <li class="flex items-center gap-[20px] py-[20px] pl-[20px] pr-[20px] cursor-pointer">
            <div class="w-[50px] h-[50px]">
                <img class="h-full" src="./assets/gameCover/${dataBase[i].img}"
                    alt="gambar-thewitcher-cart">
            </div>
            <div>
                <p >${dataBase[i].name}</p>
                <p >Rp, ${dataBase[i].price}</p>
                </div>
                <div>
                    <img class="ml-[30px]" src="./assets/images/x.svg" alt="delete-button">
                </div>
            </li> 
            <li class="flex gap-[20px] py-[20px] pl-[20px] pr-[60px] hover:text-[#4F76FF] hover:font-bold cursor-pointer text-white :hover-text-[#4F76FF] font-bold text-lg">
            Continue Checkout ->
            </li>`
        }
    }
    if (count < 1) {
        cartcheck.innerHTML += ` <li class="flex gap-[20px] py-[20px] pl-[20px] pr-[60px] cursor-pointer">
        <div>
               <h1>Belum ada yang dimasukkin ke cart</h1>
        </div>
    </li>`
    }
}
renderCart()



