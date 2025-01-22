import axios from "axios";
import React from "react";
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Contactx=()=>{
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async(data) =>{
      const useInfo={
        name:data.name,
        email:data.email,
        message:data.message
      }
      try {
        await axios.post("https://getform.io/f/byvvozda",useInfo);
        toast.success("your message has been sent");
        
      } catch (error) {
        toast.error("something went wrong");
      }
  };
     return(
        <>
        <div name="Contactus" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 mb-10">
            <h1 className="text-3xl font-bold mb-4">Contact</h1>
            <span>please fill out the form below to contact me</span>
            <div className="w-[400px] h-[410px] bg-slate-200 flex flex-col items-center justify-center mx-auto bg-white p-8 rounded-lg shadow-lg">
             <h2 className="text-xl font-semibold mb-4">Send Me Message</h2>
             <form 
              onSubmit={handleSubmit(onSubmit)}
             //action="https://getform.io/f/byvvozda" 
             //method="POST"
             >
              <div className="flex flex-col mt-4">
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text"
                {...register("name", { required: true })}
                name="name"
                id="id"
                placeholder="Enter your full Name"
                className="mt-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
/>             {errors.name && <span>This field is required</span>}
              </div>
              <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">Enter Your Email</label>
                <input type="email"
                {...register("email", { required: true })}
                name="email"
                id="id"
                placeholder="enter your emailid"
                className="mt-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
/>              {errors.email && <span>This field is required</span>}
              </div>
              <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea type="message"
                {...register("message", { required: true })}
                name="message"
                id="message"
                placeholder="write your message"
                rows={4}
                className="mt-2   px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
></textarea> {errors.message && <span>This field is required</span>}
              </div>
              <div className="flex items-center justify-center mt-6">
                <button type="submit" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Send Message</button>
              </div>
             </form>
            </div>
        </div>
        </>
     )
}
export default Contactx