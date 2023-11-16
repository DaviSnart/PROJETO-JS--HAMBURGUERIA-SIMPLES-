
const list = document.querySelector('ul')
const buttonAll = document.querySelector('.button-all')
const activeButtonDiscount = document.querySelector('.discount-all')
const activeSumPrices = document.querySelector('.sumValues')
const openVegans = document.querySelector('.all-vegans')



function showAll(productsArray) {
    let myLi = ''

    productsArray.forEach((product) => {
        myLi += `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">R$ ${product.price}</p>
        </li>
        `
    })
    list.innerHTML = myLi
}

function showDiscount() {
    const newsPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price = product.price * 0.9,
    }))

    showAll(newsPrices)

}

function sumPrices() {
    const result = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML =
        `
    <li>
        <p>O valor total da compra é de R$ ${result}</p>
    </li>
    `
}
function showVegans() {
    const itensVegans = menuOptions.filter(product => product.vegan)
    showVegans(itensVegans)

}

buttonAll.addEventListener('click', () => showAll(menuOptions))
activeButtonDiscount.addEventListener('click', showDiscount)
activeSumPrices.addEventListener('click', sumPrices)
openVegans.addEventListener('click', showVegans)


