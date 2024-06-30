import { z } from "zod"

const mainFormValidation = z.object({
   
        
    time: z.string()
        .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Invalid time format (HH:MM)')
        .refine((time) => {
            const [hours, minutes] = time.split(':').map(Number);
            return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
        }, 'Time must be between 00:00 and 23:59'),
    windSpeed: z.string().min(1).max(50),
    sunshine: z.string().min(1).max(50),
    airPressure: z.string().min(1).max(50),
    radiation: z.string().min(1).max(50),
    airTemperature: z.string().min(1).max(50),
    humidity: z.string().min(1).max(50),
})

export default mainFormValidation

