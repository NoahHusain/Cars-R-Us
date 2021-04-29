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

export const Technology = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const tech of technology) {
        html += `<li>
            <input type="radio" name="metal" value="${tech.id}" /> ${tech.technology}
        </li>`
    }

    html += "</ul>"
    return html
}