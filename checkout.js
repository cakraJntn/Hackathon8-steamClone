const dataBase = JSON.parse(localStorage.getItem("dataBase"))

const purchasedGame = document.getElementById("checkout-game")

const totalPriceQty = document.getElementById("totalPriceQty")

let totalPrice = 0
let qty = 0
for (let i = 0; i < dataBase.length; i++) {
    if (dataBase[i].cart) {
        purchasedGame.innerHTML += `<li class="flex gap-[20px] py-[20px] pl-[20px] pr-[20px] cursor-pointer">
        <div class="w-[70px] h-[70px]">
            <img class="h-full" src="/assets/gameCover/${dataBase[i].img}" alt="gambar-thewitcher-cart">
        </div>
        <div class="flex flex-col gap-[5px]">
            <p class="text-lg font-bold">${dataBase[i].name}</p>
            <p class="text-lg">Rp ${dataBase[i].price}</p>
        </div>
    </li>`
        totalPrice += dataBase[i].price
        qty++
        totalPriceQty.innerHTML = `<li
    class="flex justify-between py-[10px] pl-[20px] pr-[20px] hover:text-[#4F76FF] cursor-pointer text-white font-bold text-lg">
    <p class="text-[#4F76FF] text-lg">Quantity: </p>
    <p class="text-lg">${qty}</p>
</li>
<li
    class="flex justify-between py-[10px] pl-[20px] pr-[20px] hover:text-[#4F76FF] cursor-pointer text-white font-bold text-lg">
    <p class="text-[#4F76FF] text-lg">Total Price: </p>
    <p class="text-lg">${totalPrice}</p>
</li>`
    }
}

