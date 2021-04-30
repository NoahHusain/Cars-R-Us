import { getInterior, setInterior } from "./database.js"

const interiors = getInterior()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "metal") {
//            setMetal(parseInt(event.target.value))
//         }
//     }
// )
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("interior")) {
            const [,id] = itemClicked.id.split("--")

            for (const interior of interiors) {
                if (interior.id === parseInt(id)) {
                    window.alert(`${interior.interior} costs $${interior.price}`)
                }
            }
        }
    }
)

export const Interiors = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const interior of interiors) {
        html += `<li id='interior--${interior.id}'>
            <input type="radio" name="interiors" value="${interior.id}" /> ${interior.interior}
        </li>`
    }

    html += "</ul>"
    return html
}