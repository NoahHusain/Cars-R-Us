import { getWheels, setWheels } from "./database.js"

const wheels = getWheels()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "metal") {
//            setMetal(parseInt(event.target.value))
//         }
//     }
// )

export const Wheels = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const wheel of wheels) {
        html += `<li>
            <input type="radio" name="metal" value="${wheel.id}" /> ${wheel.wheels}
        </li>`
    }

    html += "</ul>"
    return html
}