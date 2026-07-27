import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';

const Login = () => {
  const [currState,setCurrState] = useState('Login');
  const {token,setToken,navigate,backendUrl} = useContext(ShopContext);
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  const [email,setEmail] =  useState('');
   const onSubmitHandler =async(e)=>{

    e.preventDefault();
    console.log(backendUrl);
    
    try {
      if(currState === 'Sign Up'){
           
            const res = await axios.post(backendUrl + '/api/user/register', {name,email,password})
            console.log(res.data);
            

      }else{

      }
    } catch (error) {
      
    }
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mt-10 mb-2'>
        <p className='prata-regular text-3xl'>{currState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currState=== 'Login' ? '':<input onChange={(e)=>setName(e.target.value)} value={name} className='w-full px-3 py-2 border border-gray-800 ' placeholder='Name' type="text" required/>}
      
      <input onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full px-3 py-2 border border-gray-800 ' placeholder='Email' type="email" required/>
      <input onChange={(e)=>setPassword(e.target.value)} value={password} className='w-full px-3 py-2 border border-gray-800 ' placeholder='Password' type="password" required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forget your password</p>
        {
          currState === 'Login' ?
          <p onClick={()=>setCurrState('Sign Up')} className='cursor-pointer'>Create Account</p> 
          : <p onClick={()=>setCurrState('Login')} className='cursor-pointer'>Login here</p>
        }
      </div>
     <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currState === 'Login' ? 'Sign In':'Sign Up'}</button>
    </form>
  )
}

export default Login
