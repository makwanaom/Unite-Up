"use client"
import React ,{ useState }from "react";
import {AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai"
import {toast} from "react-toastify"
const SignUpForm = (setIsLoggedIn) => {
  const [FormData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const [accountType, setaccountType] = useState("instructor")
  const [showPassword, setshowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  function submitHandler(event) {
    event.preventDefault();

    if(FormData.password != FormData.confirmPassword){
      toast.error("Passwords do not match")
    }
    setIsLoggedIn(true);
    toast.success("Account Created")
    const accountData ={
      ...FormData
    }
    const finalaccountData={
      ...accountData,
      accountType

    }
    console.log(finalaccountData)
  
    
}
  return (
    <div>
      <div className="flex bg-slate-100 p-1 gap-x-2 my-6 rounded-full max-w-max">
        
        <button onClick={() => setaccountType("student")} className={`${accountType === "student" ? " bg-slate-500 py-2 px-5 rounded-full transition-all duration-200": " bg-transparent py-2 px-5 rounded-full transition-all duration-200"}`}>As Individual</button>
        <button onClick={() => setaccountType("instructor")} className={`${accountType === "instructor" ? " bg-slate-500 py-2 px-5 rounded-full transition-all duration-200": " bg-transparent py-2 px-5 rounded-full transition-all duration-200"}`}>As Company</button>

     </div>
        <form onSubmit={submitHandler} className="mt-10">
          <div className="mt-4">
            <label className='w-full'>
              <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-6'>
                First Name<sup className=' text-red-700'>*</sup>
              </p>
              <input
                required
                type="text"
                name="firstname"
                onChange={changeHandler}
                placeholder="Enter First Name"
                value={FormData.firstname}
                className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
              />
            </label>

            <label className='w-full'>
              <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-6'>
                Last Name<sup className=' text-red-700'>*</sup>
              </p>
              <input
                required
                type="text"
                name="lastname"
                onChange={changeHandler}
                placeholder="Enter Last Name"
                value={FormData.lastnametname}
                className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
              />
            </label>
          </div>
          <label className='w-full mt-4'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-6'>
              Email <sup className=' text-red-700'>*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              onChange={changeHandler}
              placeholder="Enter Your Email"
              value={FormData.email}
              className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
          </label>

          <div  className="flex gap-x-4 mt-6">
          <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Create Password<sup className=' text-red-700'>*</sup>
            </p>
            <input

                required
                type={showPassword ? ("text"):("password")}
                value={FormData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
                className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
            <span className='absolute right-3 top-[40px] cursor-pointer' onClick={() => setshowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24}/>): (<AiOutlineEye fontSize={24}/>)}
            </span>
        </label>
        <label className='w-full relative '>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
               Confirm Password<sup>*</sup>
            </p>
            <input

                required
                type={showConfirmPassword ? ("text"):("password")}
                value={FormData.confirmPassword}
                onChange={changeHandler}
                placeholder="Confirm Password"
                name="confirmPassword"
                className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
            <span className='absolute right-3 top-[40px] cursor-pointer' onClick={() => setShowConfirmPassword((prev) => !prev)}>
                {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24}/>): (<AiOutlineEye fontSize={24}/>)}
            </span>
        </label>
          </div>
          <button className='  w-full bg-gray-400 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 '>
            Create Account
        </button>
        </form>
     
    </div>
  );
};

export default SignUpForm;
