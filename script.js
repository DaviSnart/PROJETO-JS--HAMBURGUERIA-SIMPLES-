
const list = document.querySelector('ul')
const buttonAll = document.querySelector('.button-all')
let myLi = ''


function showAll() {
    menuOptions.forEach((product) => {
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

buttonAll.addEventListener("click", showAll)
