
import { Link ,useNavigate} from "react-router-dom";
import {Button,Alert,Spinner} from "flowbite-react"
import { useState } from "react";

function SignUp() {
  const navigate=useNavigate();
  const [formData,SetformData]=useState({})
  const [errorMessage,SeterrorMessage]=useState(null);
  const [loading,Setloading]=useState(false);
  var handlechange=(e)=>{
SetformData({...formData,[e.target.id]:e.target.value.trim()})
  }
var handlesubmit=async(e)=>{

  e.preventDefault()
  if(!formData.username||!formData.email||!formData.password){
    return SeterrorMessage("please fill up message")
   
  }
  try{
    Setloading(true)
    SeterrorMessage(null)
    const res= await fetch('/api/auth/signup',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
body:JSON.stringify(formData)
    })
    const data= await res.json()
    if(data.success===false){
      SeterrorMessage(data.messsage)
    }
    Setloading(false)
   if(res.ok){
    navigate('/signin')
   }
  }

  catch(err){
 SeterrorMessage(err.messsage)
   Setloading(false)
  }
}
  
  return (
   <>

   <div className="min-h-screen mt-20">
   <div className=" flex p-3 max-w-4xl mx-auto flex-col md:flex-row md:items-center gap-10">
<div className=" flex-1 ">
<Link to='/' className='self-center font-semibold text-2xl md:text-4xl'>
<span>Mentor.</span>IT
<h2 className=" w-full text-2xl md:text-4xl">Our Exiting Blogs</h2>
  </Link>
  <p className="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quisquam ullam, amet quas repudiandae voluptatem corrupti perspiciatis quae aliquid, magni voluptates error suscipit laboriosam
    ossimus ut maiores, aperiam rem necessitatibus?</p>
</div>
<div className="flex items-center justify-center  flex-1">
      <div className=" max-w-md w-[500px] h-[300px]">
        <form className="bg-white p-8 rounded shadow-md" onSubmit={handlesubmit}>
          <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        
    <div className="mb-4">
      <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
        Username
      </label>
      <input
      type="text"
      id="username"
      placeholder="username"
      className="w-full px-3 py-2 rounded focus:outline-none focus:border-blue-500"
      onChange={handlechange}
      />


    </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="username@gmail.com"
              className="w-full px-3 py-2 rounded focus:outline-none focus:border-blue-500"
             
              onChange={handlechange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="password"
              className="w-full px-3 py-2  rounded focus:outline-none focus:border-blue-500"
              onChange={handlechange}
              autoComplete="on"
            />
          </div>
          <Button gradientDuoTone="pinkToOrange" type="submit" disabled={loading}  className="w-full mt-5">
            
            
 {loading?
 <>
 <Spinner size='sm'><span className="pl-3">loading...</span></Spinner>
 </>:"Sign Up"}
            
            </Button>
         
          <p className="mb-2">Already Have a Account <Link to='/signin' className="underline">Signin</Link></p>

        </form>

        {errorMessage&&<p><Alert className="mt-5" color='failure'>{errorMessage}</Alert></p>}

       
      </div>
    </div>
   </div>

   </div>
    
   </>
  )
}

export default SignUp