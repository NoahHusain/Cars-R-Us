import { getPaintColor, setPaintColor } from "./database.js"

const colors = getPaintColor()

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
        if (itemClicked.id.startsWith("color")) {
            const [,id] = itemClicked.id.split("--")

            for (const color of colors) {
                if (color.id === parseInt(id)) {
                    window.alert(`${color.color} costs $${color.price}`)
                }
            }
        }
    }
)

export const Colors = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const color of colors) {
        html += `<li id='color--${color.id}'>
            <input type="radio" name="colors" value="${color.id}" /> ${color.color}
        </li>`
    }

    html += "</ul>"
    return html
}
