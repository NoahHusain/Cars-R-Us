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

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("wheel")) {
            const [,id] = itemClicked.id.split("--")

            for (const wheel of wheels) {
                if (wheel.id === parseInt(id)) {
                    window.alert(`${wheel.wheels} costs $${wheel.price}`)
                }
            }
        }
    }
)

export const Wheels = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const wheel of wheels) {
        html += `<li id='wheel--${wheel.id}'>
            <input type="radio" name="wheels" value="${wheel.id}" /> ${wheel.wheels}
        </li>`
    }

    html += "</ul>"
    return html
}