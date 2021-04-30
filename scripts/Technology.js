import { getTechnology, setTechnology } from "./database.js"

const technology = getTechnology()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
           setTechnology(parseInt(event.target.value))
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