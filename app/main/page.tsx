"use client"

import { number, z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import mainFormValidation from "@/lib/validation/mainForm"
import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"



const page = () => {
  const [validInputs, setValidInputs] = useState<boolean>(true)
  const [disabledBtn, setDisabledBtn] = useState<boolean>(false)
  const { toast } = useToast()


  const form = useForm<z.infer<typeof mainFormValidation>>({
    resolver: zodResolver(mainFormValidation),
    defaultValues: {
      date: new Date(),
      windSpeed: "",
      sunshine: "",
      airPressure: "",
      radiation: "",
      airTemperature: "",
      humidity: "",
    },
  })

  const onSubmit = (values: z.infer<typeof mainFormValidation>) => {
    console.log("values", values)
    setDisabledBtn(true)
    // the values will be recieved here. now we can use it as we wish
    const result = {
      date: values.date,
      windSpeed: Number(values.windSpeed),
      sunshine: Number(values.sunshine),
      airPressure: Number(values.airPressure),
      radiation: Number(values.radiation),
      airTemperature: Number(values.airTemperature),
      humidity: Number(values.humidity),
    }

    console.log("result", result)

    setDisabledBtn(false)
    // toast({
    //   title: "Values Submitted",
    //   description: `date = ${result.date}
    //   windspeed = ${result.windSpeed}
    //   sunshine = ${result.sunshine}
    //   airpressure = ${result.airPressure}
    //   radiation = ${result.radiation}
    //   airtemperature = ${result.airTemperature}
    //   humidity = ${result.humidity}`,
    // });
    form.reset()

  }


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <h1 className="text-3xl font-bold text-center my-6">Enter the values in following fields</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center gap-8 bg-white p-6 rounded-lg my-4 w-4/5 md:w-1/2" >




          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col self-start">
                <FormLabel>Select Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          " pl-3 text-left font-normal w-full",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-3 h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}

                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {/* <FormDescription>
                  this will be the description
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />




          <FormField
            control={form.control}
            name="windSpeed"
            render={({ field }) => (

              <FormItem className="w-full flex flex-col gap-1">
                <FormLabel>Wind Speed</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter Wind Speed" {...field} />
                </FormControl>
                {/* <FormDescription>This is  field</FormDescription> */}
                <FormMessage />
              </FormItem>

            )}
          />



          <FormField
            control={form.control}
            name="sunshine"
            render={({ field }) => (

              <FormItem className="w-full flex flex-col gap-1">
                <FormLabel>Sunshine</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter Sunshine" {...field} />
                </FormControl>
                {/* <FormDescription>This is  field</FormDescription> */}
                <FormMessage />
              </FormItem>

            )}
          />


          <FormField
            control={form.control}
            name="airPressure"
            render={({ field }) => (

              <FormItem className="w-full flex flex-col gap-1">
                <FormLabel>Air Pressure</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter Air Pressure" {...field} />
                </FormControl>
                {/* <FormDescription>This is  field</FormDescription> */}
                <FormMessage />
              </FormItem>

            )}
          />




          <FormField
            control={form.control}
            name="radiation"
            render={({ field }) => (

              <FormItem className="w-full flex flex-col gap-1">
                <FormLabel>Radiation</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter Radiation" {...field} />
                </FormControl>
                {/* <FormDescription>This is  field</FormDescription> */}
                <FormMessage />
              </FormItem>

            )}
          />




          <FormField
            control={form.control}
            name="airTemperature"
            render={({ field }) => (

              <FormItem className="w-full flex flex-col gap-1">
                <FormLabel>Air Temperature</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter Air Temperature" {...field} />
                </FormControl>
                {/* <FormDescription>This is  field</FormDescription> */}
                <FormMessage />
              </FormItem>

            )}
          />




          <FormField
            control={form.control}
            name="humidity"
            render={({ field }) => (

              <FormItem className="w-full flex flex-col gap-1">
                <FormLabel>Humidity</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter Humidity" {...field} />
                </FormControl>
                {/* <FormDescription>This is  field</FormDescription> */}
                <FormMessage />
              </FormItem>

            )}
          />



          <p className="text-red-500" hidden={validInputs}>Please Enter only pure numbers</p>



          <Button type="submit" disabled={disabledBtn} className="bg-blue-600 text-sm text-white hover:bg-blue-800">Submit</Button>

        </form>
      </Form>
    </div>
  )
}

export default page


