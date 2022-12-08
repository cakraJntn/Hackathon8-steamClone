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
        img: "gta VI.jpg"
        
    },
    {
        name: "Resident Evil 4",
        price: 750_0000,
        category: "action",
        img: "resident evil.jpg"
    },
    {
        name: "Uncharted: Legacy of Thieves Collection",
        price: 900_000,
        category: "adventure",
        img: "uncharated.jpg"
    },
    {
        name: "The Elder Scrolls V: Skyrim",
        price: 450_000,
        category: "RPG",
        img: "the elder.jpg"
    },
    {
        name: "Cyberpunk 2077",
        price: 950_000,
        category: "RPG",
        img: "cyber punk.jpg"
    },
    {
        name: "FIFA 22",
        price: 750_000,
        category: "sport",
        img: "fifa 22.jpg"
    },
    {
        name: "Tony Hawk's Pro Skater 1 + 2",
        price: 650_000,
        category: "sport",
        img: "tony hawks.jpg"
    },
    {
        name: "Red Dead Redemption 2",
        price: 0,
        category: "adventure",
        img: "RDR.jpg"
    },
    {
        name: "Horizon Zero Dawn",
        price: 350_000,
        category: "adventure",
        img: "horizon.jpg"
    },
    {
        name: "The Witcher 3",
        price: 560_000,
        category: "RPG",
        img: "witcher.jpg"
    }
]

document.getElementById("gameCard")

const gameEl = document.getElementById("gameCard")

const cart = document.getElementById('menu-cart')



for (let i = 0; i < dataBase.length; i++) {
    let categoryColor
    let imgOutline
    if(dataBase[i].category === "adventure"){
        imgOutline = "outline rounded-[20px] outline-1 outline-[#C56456] shadow-[0px_3px_30px_-7px_#C56456]"
        categoryColor = "inline-flex px-[20px] py-[10px] bg-[#C56456] text-white font-bold rounded-lg"
    } else if(dataBase[i].category === "action"){
        imgOutline = "outline rounded-[20px] outline-1 outline-[#C59F56] shadow-[0px_3px_30px_-7px #C59F56]"
        categoryColor = "inline-flex px-[20px] py-[10px] bg-[#C59F56] text-white font-bold rounded-lg"
    } else if(dataBase[i].category === "sport"){
        imgOutline = "outline rounded-[20px] outline-1 outline-[#56C561] shadow-[0px_3px_30px_-7px #56C561]"
        categoryColor = "inline-flex px-[20px] py-[10px] bg-[#56C561] text-white font-bold rounded-lg"
    } else{
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
                src="/assets/gameCover/${dataBase[i].img}" alt="gambar-thewitcher">
        </div>
        <div class="flex gap-[20px] text-white">
            <p class="font-bold"> ${dataBase[i].name}</p>
            <p>${dataBase[i].price}</p>
        </div>
    </div>
    <div class="flex absolute bottom-[0px] right-[-1px]">
        <p
            class="inline-flex bg-[#4F76FF] text-white font-bold rounded-lg p-[20px] shadow-[0px_4px_18px_#4F76FF]">
            <button>Add to Cart</button>
        </p>
    </div>
</div>`
}



