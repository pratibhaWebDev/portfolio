import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit = async(data) => {
        const userInfo={
            name:data.name,
            email:data.email,
            message:data.message
        }
        try{
            await axios.post("https://getform.io/f/brolwpja",userInfo)
            toast.success("Your message has been sent");
        }catch(error){
            console.log(error);
            toast.error("Something went wrong")
        }
      }

    return (
        <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-14'>
            <div className='text-center '>
                <h1 className='text-3xl font-bold text-center '>Contact Us</h1>
                <p className='mt-4'>Please fill out the form below to contact me</p>
            </div>
            <div className='flex flex-col  items-center justify-center mt-5 '>
            <form 
            // action="https://getform.io/f/brolwpja" 

            onSubmit={handleSubmit(onSubmit)} 
            // method="POST" 
            className=' flex flex-col mb-4 bg-gray-100 w-96 px-8 py-6 rounded-xl shadow'>
                <h2 className='text-xl font-semibold my-2'>Send Your Message</h2>
                <div className='flex flex-col mb-4 space-y-2'>
                
                    <label htmlFor="name">Full Name</label>
                    <input {...register("name", { required: true })} type="text" name="name"   className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:shadow-outline' />
                    {errors.name && <span>This field is required</span>}


                    <label htmlFor="email">Email Address</label>
                    <input {...register("email", { required: true })} type="text"  name="email"  className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:shadow-outline' />
                    {errors.email && <span>This field is required</span>}


                    <label htmlFor="message">Message</label>
                    <textarea {...register("message", { required: true })} type="text" name="message" className='shadow rounded-lg appearance-none border py-4 px-3 text-gray-700 leading-tight focus:outline-none  focus:shadow-outline' />
                    {errors.message && <span>This field is required</span>}
                
                    <button type='submit' className='bg-black w-fit text-white p-2 rounded-md mt-2'>Send</button>
                    
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contact