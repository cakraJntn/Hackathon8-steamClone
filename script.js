const menuCategory = document.getElementById("menu-category")
const dropdownCategory = document.getElementById("dropdown-category").classList
function showCategoryBox() {
    dropdownCategory.toggle("hidden")
    dropdownCart.add("hidden")
}

// const cartLength = document.getElementById("cart-length")
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
        price: 750_000,
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
    },
    {
        name: "2K22",
        price: 560_500,
        category: "sport",
        img: "2k22.jpg",
        cart:false
    },
    {
        name: "Assasin Valhalla",
        price: 375_000,
        category: "adventure",
        img: "assassins.jpg",
        cart:false
    },
    {
        name: "Marvel",
        price: 150_000,
        category: "adventure",
        img: "marvel.jpg",
        cart:false
    },
    {
        name: "MASS 3",
        price: 350_000,
        category: "adventure",
        img: "mass3.jpg",
        cart:false
    },
    {
        name: "New World",
        price: 560_000,
        category: "RPG",
        img: "newworld.jpg",
        cart:false
    },
    {
        name: "PUBG",
        price: 350_000,
        category: "adventure",
        img: "pubg.jpg",
        cart:false
    },
    {
        name: "Session",
        price: 560_000,
        category: "RPG",
        img: "session.jpg",
        cart:false
    },
    {
        name: "Sniper ELITE",
        price: 560_000,
        category: "RPG",
        img: "sniper.jpg",
        cart:false
    },
    {
        name: "Tower Of Fantasy",
        price: 350_000,
        category: "adventure",
        img: "tof.jpg",
        cart:false
    },
    {
        name: "UNDECEMBER",
        price: 560_000,
        category: "RPG",
        img: "undecember.jpg",
        cart:false
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
        imgOutline = "outline rounded-[20px] outline-1 outline-[#C59F56] shadow-[0px_3px_30px_-7px_#C59F56]"
        categoryColor = "inline-flex px-[20px] py-[10px] bg-[#C59F56] text-white font-bold rounded-lg"
    } else if (dataBase[i].category === "sport") {
        imgOutline = "outline rounded-[20px] outline-1 outline-[#56C561] shadow-[0px_3px_30px_-7px_#56C561]"
        categoryColor = "inline-flex px-[20px] py-[10px] bg-[#56C561] text-white font-bold rounded-lg"
    } else {
        imgOutline = "outline rounded-[20px] outline-1 outline-[#9456C5] shadow-[0px_3px_30px_-7px_#9456C5]"
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
            <p>${dataBase[i].price > 0 ? `Rp ${dataBase[i].price}` : `Free`}</p>
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
    localStorage.setItem("dataBase", JSON.stringify(dataBase))
    renderCart()
}
function deleteCart(index) {
    dataBase[index].cart = false;
    renderCart()
    localStorage.setItem("dataBase", JSON.stringify(dataBase))
    renderCart() 
}

const cartcheck = document.getElementById("cart-check")

function renderCart() {
    let count = 0
    cartcheck.innerHTML = ""
    let data = []
    console.log("triggereds")
    if (localStorage.getItem("dataBase")) {
        data = JSON.parse(localStorage.getItem("dataBase"))
    } else {
        data = [...dataBase]
    }
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (data[i].cart === true) {
            count++
            cartcheck.innerHTML += ` <li class="flex justify-between items-center gap-[20px] py-[20px] pl-[20px] pr-[20px] cursor-pointer">
            <div class="flex gap-[20px]">
                <div class="w-[50px] h-[50px]">
                    <img class="h-full" src="./assets/gameCover/${data[i].img}"
                        alt="gambar-thewitcher-cart">
                </div>
                <div>
                    <p >${data[i].name}</p>
                    <p >Rp ${data[i].price}</p>
                </div>
            <div>
            </div>
            </div>
            <a id="delete" onClick="deleteCart(${i})">
                <img  class="ml-[30px]" src="./assets/images/x.svg" alt="delete-button">
            </a>
            </li> 
            `
        }

    }

    if (count < 1) {
        cartcheck.innerHTML += ` <li class="flex gap-[20px] py-[20px] pl-[20px] pr-[60px] cursor-pointer">
        <div>
               <h1>Belum ada yang dimasukkin ke cart</h1>
        </div>
    </li>`
    } else {
        cartcheck.innerHTML += `<li class="flex gap-[20px] py-[20px] pl-[20px] pr-[60px] hover:text-[#4F76FF] hover:font-bold cursor-pointer text-white :hover-text-[#4F76FF] font-bold text-lg">
        <a href="checkout.html">Continue Checkout -> </a>
          </li>`
    }
}
renderCart()


function showAdventure() {
    gameEl.innerHTML = ""
    for (let i = 0; i < dataBase.length; i++) {
        if (dataBase[i].category === 'adventure') {
            gameEl.innerHTML += `<div class="relative">
    <div class="flex absolute top-[-1px] left-[-1px]">
        <p class="inline-flex px-[20px] py-[10px] bg-[#C56456] text-white font-bold rounded-lg">
            ${dataBase[i].category}
        </p>
    </div>
    <div class="flex flex-col gap-[10px]">
        <div>
            <img class="outline rounded-[20px] outline-1 outline-[#C56456] shadow-[0px_3px_30px_-7px_#C56456]"
                src="./assets/gameCover/${dataBase[i].img}" alt="gambar-thewitcher">
        </div>
        <div class="flex gap-[20px] text-white">
            <p class="font-bold"> ${dataBase[i].name}</p>
            <p>Rp ${dataBase[i].price}</p>
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
    }
}

function showAction() {
    gameEl.innerHTML = ""
    for (let i = 0; i < dataBase.length; i++) {
        if (dataBase[i].category === 'action') {
            gameEl.innerHTML += `<div class="relative">
    <div class="flex absolute top-[-1px] left-[-1px]">
        <p class="inline-flex px-[20px] py-[10px] bg-[#C59F56] text-white font-bold rounded-lg">
            ${dataBase[i].category}
        </p>
    </div>
    <div class="flex flex-col gap-[10px]">
        <div>
            <img class="outline rounded-[20px] outline-1 outline-[#C59F56] shadow-[0px_3px_30px_-7px_#C59F56]"
                src="./assets/gameCover/${dataBase[i].img}" alt="gambar-thewitcher">
        </div>
        <div class="flex gap-[20px] text-white">
            <p class="font-bold"> ${dataBase[i].name}</p>
            <p>Rp ${dataBase[i].price}</p>
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
    }
}


function showRPG() {
    gameEl.innerHTML = ""
    for (let i = 0; i < dataBase.length; i++) {
        if (dataBase[i].category === 'RPG') {
            gameEl.innerHTML += `<div class="relative">
    <div class="flex absolute top-[-1px] left-[-1px]">
        <p class="inline-flex px-[20px] py-[10px] bg-[#9456C5] text-white font-bold rounded-lg">
            ${dataBase[i].category}
        </p>
    </div>
    <div class="flex flex-col gap-[10px]">
        <div>
            <img class="outline rounded-[20px] outline-1 outline-[#9456C5] shadow-[0px_3px_30px_-7px_#9456C5]"
                src="./assets/gameCover/${dataBase[i].img}" alt="gambar-thewitcher">
        </div>
        <div class="flex gap-[20px] text-white">
            <p class="font-bold"> ${dataBase[i].name}</p>
            <p>Rp ${dataBase[i].price}</p>
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
    }
}

function showSport() {
    gameEl.innerHTML = ""
    for (let i = 0; i < dataBase.length; i++) {
        if (dataBase[i].category === 'sport') {
            gameEl.innerHTML += `<div class="relative">
    <div class="flex absolute top-[-1px] left-[-1px]">
        <p class="inline-flex px-[20px] py-[10px] bg-[#56C561] text-white font-bold rounded-lg">
            ${dataBase[i].category}
        </p>
    </div>
    <div class="flex flex-col gap-[10px]">
        <div>
            <img class="outline rounded-[20px] outline-1 outline-[#56C561] shadow-[0px_3px_30px_-7px_#56C561]"
                src="./assets/gameCover/${dataBase[i].img}" alt="gambar-thewitcher">
        </div>
        <div class="flex gap-[20px] text-white">
            <p class="font-bold"> ${dataBase[i].name}</p>
            <p>Rp ${dataBase[i].price}</p>
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
    }
}

function backHome() {
    gameEl.innerHTML = ""
    for (let i = 0; i < dataBase.length; i++) {
        let categoryColor
        let imgOutline
        if (dataBase[i].category === "adventure") {
            imgOutline = "outline rounded-[20px] outline-1 outline-[#C56456] shadow-[0px_3px_30px_-7px_#C56456]"
            categoryColor = "inline-flex px-[20px] py-[10px] bg-[#C56456] text-white font-bold rounded-lg"
        } else if (dataBase[i].category === "action") {
            imgOutline = "outline rounded-[20px] outline-1 outline-[#C59F56] shadow-[0px_3px_30px_-7px_#C59F56]"
            categoryColor = "inline-flex px-[20px] py-[10px] bg-[#C59F56] text-white font-bold rounded-lg"
        } else if (dataBase[i].category === "sport") {
            imgOutline = "outline rounded-[20px] outline-1 outline-[#56C561] shadow-[0px_3px_30px_-7px_#56C561]"
            categoryColor = "inline-flex px-[20px] py-[10px] bg-[#56C561] text-white font-bold rounded-lg"
        } else {
            imgOutline = "outline rounded-[20px] outline-1 outline-[#9456C5] shadow-[0px_3px_30px_-7px_#9456C5]"
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
                <p>Rp ${dataBase[i].price}</p>
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
}

let mainhomeEl = document.getElementById("main-home")
let aboutEl =document.getElementById("about-page")

function hiddenMain(){
    mainhomeEl.classList.add("hidden")
    aboutEl.classList.remove("hidden")
}

function showHome(){
    mainhomeEl.classList.remove("hidden")
    aboutEl.classList.add("hidden")
}
// const modal= document.getElementById('modal')

