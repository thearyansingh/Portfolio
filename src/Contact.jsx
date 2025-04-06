import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
const Contact = () => {
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [result, setResult] = useState("");
  
    const onSubmit = async (formData) => {
      setResult("Sending...");
      
      formData.access_key = "5a3320e6-db90-4f99-867e-0f3760e8c918"; // Add access_key directly
  
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          }
        });
  
        const data = await response.json();
  
        if (data.success) {
          setResult("Form Submitted Successfully");
          reset(); // Reset the form after submission
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      } catch (error) {
        console.error("Error during form submission", error);
        setResult("An error occurred. Please try again.");
      }
    };
  
    return (
      <>
        <form id='Contact' onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-3 border-t-2 border-slate-800  dark:bg-[#0F172A] dark:text-gray-300 px-4 ">
          <div className="text-center justify-center items-center  ">
            <h1 className='bg-gradient-to-r py-6  from-purple-300 via-pink-300 to-red-300 bg-clip-text text-transparent animate-gradient robotos text-5xl font-bold'>Contact Us</h1>
            <p className='text-xl opacity-50'>Got a technical issue? Want to send feedback about a beta feature? Let us know.</p>
          </div>
          <div className=' flex  flex-col justify-center px-8 sm:px-85 gap-4  '>
            <div className='flex flex-col space-y-2 justify-center'>
              <span className='text-white font-bold  text-base'>Your email</span>
              <label className="input input-bordered flex items-center gap-2">
              
                <input {...register("email", { required: true })} type="email" className="grow  dark:bg-slate-950 p-3 rounded-xl input-bordered dark:text-white" placeholder="Email" />
              </label>
              {errors.email && <p className="text-red-500">Email is required.</p>}
            </div>
  
            <div className='flex flex-col space-y-2 justify-center'>
              <span className='text-white font-bold  text-base'>Name</span>
              <label className="input input-bordered flex items-center gap-2">
                <input {...register("Name", { required: true })} type="text" className="grow  dark:bg-slate-950 p-3 rounded-xl input-bordered dark:text-white" placeholder="your name " />
              </label>
              {errors.subject && <p className="text-red-500">Subject is required.</p>}
            </div>
  
            <div className='flex flex-col space-y-2 justify-center'>
              <span className='text-white font-bold  text-base'>Message</span>
              <textarea {...register("message", { required: true })} id="message" rows="6" className="grow  dark:bg-slate-950 p-3 rounded-xl input-bordered dark:text-white" placeholder="Leave a comment..."></textarea>
              {errors.message && <p className="text-red-500">Message is required.</p>}
            </div>
            <button type='submit' className="btn btn-active btn-success py-3 px-12 bg-[#531881] rounded-lg text-white">Submit</button><br></br>
            <span>{result}</span>
  
          
          </div>
         
        </form>
        </>
    )
}

export default Contact;
