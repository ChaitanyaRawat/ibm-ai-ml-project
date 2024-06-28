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


const page = () => {
  const [validInputs, setValidInputs] = useState<boolean>(true)
  const [disabledBtn, setDisabledBtn] = useState<boolean>(false)


  const form = useForm<z.infer<typeof mainFormValidation>>({
    resolver: zodResolver(mainFormValidation),
    defaultValues: {
      field_1: "",
      field_2: "",
      field_3: ""
    },
  })

  const onSubmit = (values: z.infer<typeof mainFormValidation>) => {

    // the values will be recieved here. now we can use it as we wish
    setDisabledBtn(true)
    try {
      const numberVersion = {
        field_1: Number(values.field_1),
        field_2: Number(values.field_2),
        field_3: Number(values.field_3)
      }
      if (isNaN(numberVersion.field_1) || isNaN(numberVersion.field_2) || isNaN(numberVersion.field_3)) {
        setValidInputs(false)
        setTimeout(() => {
          setValidInputs(true)
        },3000)
        // console.log("NaN found")
      } else {

        // console.log("numberVersion", numberVersion)
        form.reset()
      }
    } catch (error) {
      console.log("error", error)
    }
    setDisabledBtn(false)

  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center gap-8 bg-white p-6 rounded-lg" >




          <FormField
            control={form.control}
            name="field_1"
            render={({ field }) =>

            (


              <FormItem className="w-full flex flex-col gap-1">
                <FormLabel>Field 1</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter Field 1 here" {...field} />
                </FormControl>
                {/* <FormDescription>This is 1st field</FormDescription> */}
                <FormMessage />
              </FormItem>


            )
            }
          />

          <FormField
            control={form.control}
            name="field_2"
            render={({ field }) => (

              <FormItem className="w-full flex flex-col gap-1">
                <FormLabel>Field 2</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter Field 2 here" {...field} />
                </FormControl>
                {/* <FormDescription>This is 2nd field</FormDescription> */}
                <FormMessage />
              </FormItem>

            )}
          />

          <FormField
            control={form.control}
            name="field_3"
            render={({ field }) => (

              <FormItem className="w-full flex flex-col gap-1">
                <FormLabel>Field 3</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter Field 3 here"
                    {...field} />
                </FormControl>
                {/* <FormDescription>This is 3rd field</FormDescription> */}
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


