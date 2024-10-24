import React, { useState } from 'react'

const Login = () => {

 // use state 
    const [Email, setEmail] = useState("")
    const [Passward, setPassward] = useState("")
     // submit button 
     const SubmitHandler = (e) =>{
        e.preventDefault() 
        
        console.log("Email is :", Email)
        console.log("passward is", Passward);

      // reset the form after sbmit 
        setEmail("")
        setPassward("")
        
        
     }


  return (

    
    <div className='flex h-screen w-screen items-center justify-center'>
        
        <div className='border-2 border-emerald-600 p-20 rounded-lg'>

           <form 
           
           onSubmit={(e)=>{
            SubmitHandler(e)
           }}
           className='flex flex-col items-center justify-center'>
           
           <input

           value={Email}
           onChange={(e)=>{

            setEmail(e.target.value)
              
           }}

           required className=' text-xl outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder=' Enter your email' />
           <input  
            value={Passward}
            onChange={(e)=>{
                setPassward(e.target.value)
            }}
           
           required className='text-xl outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full  placeholder:text-gray-400 mt-3' type="passward" placeholder='Enter passward' />
           <button className=' mt-5 text-white outline-none border-none text-xl bg-emerald-600 py-3 px-5 rounded-full placeholder:text-white'>Log in</button>
           
           </form>
        </div>


    </div>
  )
}

export default Login