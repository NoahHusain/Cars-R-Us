import { Wheels } from "./Wheels.js";
import { Technology } from "./Technology.js";
import { Interiors } from "./Interiors.js";
import { Colors } from "./Colors.js";


// document.addEventListener(
//     "click",
//     (event) => {
//         if (event.target.id === 'orderButton'){
//             addCustomOrder()
//         }
//     }
// )

export const ShowCars = () => {
    return `
        <h1>Cars R Us</h1>

        <article class="choices">
            <section class="choices__color options">
                <h2>Colors</h2>
                ${Colors()}
            </section>
            <section class="choices__interior options">
                <h2>Interiors</h2>
                ${Interiors()}
            </section>
            <section class="choices__technology options">
                <h2>Technology Packages</h2>
                ${Technology()}
            </section>
            <section class="choices__wheel options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
        <h2>Custom Car Orders</h2>
        </article>
    `
}
