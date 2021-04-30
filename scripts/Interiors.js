import { getInterior, setInterior } from "./database.js"

const interiors = getInterior()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
           setInterior(parseInt(event.target.value))
        }
    }
)

export const Interiors = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const interior of interiors) {
        html += `<li id='interior--${interior.id}'>
            <input type="radio" name="interior" value="${interior.id}" /> ${interior.interior}
        </li>`
    }

    html += "</ul>"
    return html
}