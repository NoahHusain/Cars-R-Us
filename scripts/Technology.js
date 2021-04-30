import { getTechnology, setTechnology } from "./database.js"

const technology = getTechnology()

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
        if (itemClicked.id.startsWith("technology")) {
            const [,id] = itemClicked.id.split("--")

            for (const tech of technology) {
                if (tech.id === parseInt(id)) {
                    window.alert(`${tech.technology} costs $${tech.price}`)
                }
            }
        }
    }
)

export const Technology = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const tech of technology) {
        html += `<li id='technology--${tech.id}'>
            <input type="radio" name="technology" value="${tech.id}" /> ${tech.technology}
        </li>`
    }

    html += "</ul>"
    return html
}