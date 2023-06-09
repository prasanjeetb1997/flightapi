import { Router } from "express"
import { getFlightPrice } from "../controllers/home_controller.js"

const router = Router()


router.post('/get-flight-price', getFlightPrice)



export default router