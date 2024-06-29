import { z } from "zod"

const mainFormValidation = z.object({
    date: z.date({
        required_error: "A date of birth is required.",
    }),
    windSpeed: z.string().min(1).max(50),
    sunshine: z.string().min(1).max(50),
    airPressure: z.string().min(1).max(50),
    radiation: z.string().min(1).max(50),
    airTemperature: z.string().min(1).max(50),
    humidity: z.string().min(1).max(50),
})

export default mainFormValidation

