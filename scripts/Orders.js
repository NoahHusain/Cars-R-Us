import { getCustomOrders, getPaintColor, getInterior, getTechnology, getWheels } from "./database.js"


const buildOrderListItem = (order) => {
    const colors = getPaintColor()
    const interiors = getInterior()
    const technology = getTechnology()
    const wheels = getWheels()


    // Remember that the function you pass to find() must return true/false
    const foundColor = colors.find(
        (color) => {
            return color.id === order.paintColorId
        }
    )
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundTechnology = technology.find(
        (tech) => {
            return tech.id === order.technologyId
        }
    )
    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelsId
        }
    )
    const totalCost = foundColor.price + foundInterior.price + foundTechnology.price + foundWheel.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    // let timestamp = order.timestamp;
    // let workingTimestamp = timestamp.toString();
    
    
    return `<li>
        Order #${order.id} was placed at ${order.timestamp} with the options ${colors[order.paintColorId - 1].color} paint, ${interiors[order.interiorId - 1].interior} interior, ${technology[order.technologyId - 1].technology} technology package and, ${wheels[order.paintColorId - 1].wheels} wheels costs ${costString}
    </li>`
}

export const Orders = () => {
   
    const orders = getCustomOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}