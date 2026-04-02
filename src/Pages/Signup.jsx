
import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../fire_Database/firebase';


const Signup = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

    const onSubmit= async(data)=>{
     try {
      // data daa wixii noogu jiray labaxanaa
      const {email,password}=data;
      const userCredantials=await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert('seccefully registrade')
      
     }catch(err){
      console.log(err)
     };

    };

  return (
    <div className='relative flex flex-col h-screen w-screen md:items-center md:justify-center'>
        <img 
        className='absolute h-screen w-full object-cover -z-10 opacity-60 sm:inline'
        src='./images/misc/home.jpeg'></img>
    
    <Link to='/' className='absolute top-0 left-2 w-[100px] md:w-[150px] object-contain'>
        <img src='./images/logo/logo.svg'></img>

     </Link>

     <form onSubmit={handleSubmit(onSubmit)}
     className='relative mt-24 space-y-8 rounded bg-black/70 py-10 px-6 md:mt-0 md:max-w-md md:px-14'>

     <h1 className='my-6 text-2xl font-semibold text-white '>Sign up</h1>
     <label className='inline-block w-full'>
        <input
         {...register('email', {required:true})}
         type='email' className='form-control' />

  {errors.email && <p className='pt-2 text-sm text-orange-500'>this is feild in requered</p>}

     </label>
     <label className='inline-block w-full'>
        <input
        {...register('password', {required:true})}
         type='password' className='form-control' />
         {errors.password && <p className='pt-2 text-sm text-orange-500'>this is feild in requered</p>}

     </label>

     <button className='btn'>Sigin up</button>

    <div className='flex flex-row  my-4 space-x-2'>
      <p  className='text-lg text-[#8d8d8d]'>Already have acount</p>
      <Link  className='hover:underline'  to='/Login'>Sign in now</Link>
    </div>

     </form>


    </div>
  )
}



// qaybtaan waxay shaqaynasaa marka qofku signup taabto
// h-screen w-screen waxay naga saacidasaa inaan shaashada ku farisino
// -z-10 waxay naga saacidasaa in loga du ka soo kormarto picture ka
   
 

export default Signup;