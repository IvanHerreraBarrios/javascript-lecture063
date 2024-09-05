/*
insertAdjacent
.incertAdjacentElement(position, el)
.incerAdjacentHTML(position, html)
.insertAdjacentText(position, text)

beforebegin(previous brother)
afterbegin(firt child)
beforeend(last child)
afterend(next brother)

*/

const $cards = document.querySelector("cards"),
$newCard = document.createElement("figure")

/*
$newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Any>
    <figcaption>Any</figcaption>
`
*/

let $contentCard = `
    <img src="https://placeimg.com/200/200/any" alt="Any>
    <figcaption>Any</figcaption>
`

$newCard.classList.add("card")

//$cards.insertAdjacentElement("beforebegin", $newCard)
$newCard.insertAdjacentHTML("beforeend", $contentCard)
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any")
//$cards.insertAdjacentElement("afterbegin", $newCard)

//$cards.prepend($newCard)

$cards.prepend($newCard)
$cards.append($newCard)
$cards.before($newCard)
$cards.after($newCard)