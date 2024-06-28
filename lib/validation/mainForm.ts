import { z } from "zod"

const mainFormValidation = z.object({
    field_1: z.string().min(1).max(50),
    field_2: z.string().min(1).max(50),
    field_3: z.string().min(1).max(50)
})

export default mainFormValidation

