import Flight from "../models/flight.js"



export async function getFlightPrice(req, res) {
    try {
        const customerQuery = req.body
        const result = await Flight.find(customerQuery)
        if (result.length != 0) {
            console.log(result)
            return res.send(result)
        } else {
            return res.send({ message: "Sorry! No flights available" })
        }
    } catch (error) {
        console.log(error)
        return res.send("Something went wrong")
    }
}

