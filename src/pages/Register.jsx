import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { newUser } from '../redux/auth/auth.functions';

const Register = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const registerUser = (formdata) => {
    console.log(formdata);
    newUser(formdata, navigate, dispatch)
  }

  return (
    <form onSubmit={handleSubmit(registerUser)}>
      <label>
        Email
        <input type='email' name='email' {...register('email', {
          required: "Introduce an email",
          pattern:{
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i ,
            message: "Introduce a valid email adress"
          }
        })}/>
      </label>
      {errors.email ? <>
        {errors.email.type === "required" && <p>{errors.email.message}</p>}
        {errors.email.type === "pattern" && <p>{errors.email.message}</p>}
      </> : null}
      <label>
        Username
        <input type='text' name='username' {...register('username', {
          required: "Introduce an username",
          pattern: {
            value: /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
            message: "Introduce a valid username"
          }
        })}/>
      </label>
      {errors.username ? <>
        {errors.username.type === "required" && <p>{errors.username.message}</p>}
        {errors.username.type === "pattern" && <p>{errors.username.message}</p>}
      </> : null}
      <label>
        Password
        <input type='password' name='password' {...register('password', {
          required: "Introduce a password",
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
            message: "Introduce a valid password"
          }
        })}/>
      </label>
      {errors.password ? <>
        {errors.password.type === "required" && <p>{errors.password.message}</p>}
        {errors.password.type === "pattern" && <p>{errors.password.message}</p>}
      </> : null}
      {/* <label>
        Repeat password
        <input type='password'/>
      </label> */}
      <button>Submit</button>
    </form>
  )
}

export default Register