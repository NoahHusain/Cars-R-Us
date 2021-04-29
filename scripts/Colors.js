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

export const Colors = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const color of colors) {
        html += `<li>
            <input type="radio" name="metal" value="${color.id}" /> ${color.color}
        </li>`
    }

    html += "</ul>"
    return html
}
