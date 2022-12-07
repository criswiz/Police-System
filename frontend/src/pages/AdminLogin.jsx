import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GrUserAdmin } from "react-icons/gr"
import { toast } from 'react-toastify'
import { logout, reset } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'

function AdminLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const dispatch = useDispatch()

  const { email, password } = formData

  const navigate = useNavigate()
 
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    if (userData.email === "admin@admin.net" && userData.password === "admin"){
      navigate('/adminpage')
    } else {
      toast.error("You're not an admin")
    }
  
  }

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
  }


  return (
    <>
      <section className='heading'>
        <img src="https://omanfm1071.com/wp-content/uploads/2022/03/1-ghana-police-service.jpg" width="300px" height="200px" alt=''/>
        <h1>
          <GrUserAdmin className='fa-admin' style={{ textDecoration: 'none', color: '#fff' }} invert/> Admin
        </h1>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-block' onClick={onLogout}>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default AdminLogin
