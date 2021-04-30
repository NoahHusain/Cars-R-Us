const database = {
    paintColor: [
        { id: 1, color: "Silver", price: 1000 },
        { id: 2, color: "Midnight Blue", price: 1250 },
        { id: 3, color: "Firebrick Red", price: 1333 },
        { id: 4, color: "Spring Green", price: 1500 }
    ],
    interior: [
        { id: 1, interior: 'Beige Fabric', price: 500 },
        { id: 2, interior: 'Charcoal Fabric', price: 600 },
        { id: 3, interior: 'White Leather', price: 750 },
        { id: 4, interior: 'Black Leather', price: 800 },
    ],
    technology: [
        { id: 1, technology: "Basic Package", price: 1000 },
        { id: 2, technology: "Navigation Package", price: 1500 },
        { id: 3, technology: "Visibility Package", price: 1750 },
        { id: 4, technology: "Ultra Package", price: 2500 },
    ],
    wheel: [
        { id: 1, wheels: "17-inch Pair Radial", price: 199.99 },
        { id: 2, wheels: "17-inch Pair Radial Black", price: 249.99 },
        { id: 3, wheels: "18-inch Pair Spoke Silver", price: 399.99 },
        { id: 4, wheels: "18-inch Pair Spoke Black", price: 499.99 },
    ],
    orderBuilder: {},

    customOrders: [
        {
            id:1,
            paintColorId: 2,
            interiorId: 3,
            technologyId: 4,
            wheelsId: 1,
            timestamp: 123989812
        },
    ]
}

export const getPaintColor = () => {
    return [...database.paintColor]
}

export const getInterior = () => {
    return [...database.interior]
}

export const getTechnology = () => {
    return [...database.technology]
}

export const getWheels = () => {
    return [...database.wheel]
}

export const setPaintColor = (id) => {
    database.orderBuilder.paintColorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}

export const getCustomOrders = () => {
    return [...database.customOrders]
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    newOrder.id = [...database.customOrders].pop().id + 1

    // Add a timestamp to the order
    newOrder.timestamp = new Date(Date.now())

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}