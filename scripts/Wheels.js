import { getWheels, setWheels } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
           setWheels(parseInt(event.target.value))
        }
    }
)


export const Wheels = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const wheel of wheels) {
        html += `<li id='wheel--${wheel.id}'>
            <input type="radio" name="wheel" value="${wheel.id}" /> ${wheel.wheels}
        </li>`
    }

    html += "</ul>"
    return html
}