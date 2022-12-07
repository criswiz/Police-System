import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBook } from "react-icons/fa"
import { toast } from 'react-toastify'
import { logout, reset } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'


function SupervisorLogin() {

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
    
        if (userData.email === "supervisor@supervisor.net" && userData.password === "supervisor"){
          navigate('/supervisor')
        } else {
          toast.error("You're not an admin")
        }
      
      }
    
      const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
      }

  return (
    <div>
        <section className='heading'>
        <img src="https://omanfm1071.com/wp-content/uploads/2022/03/1-ghana-police-service.jpg" width="300px" height="200px" alt=''/>
        <h1>
          <FaBook className='fa-admin' style={{ textDecoration: 'none', color: '#fff' }} invert/> Supervisor
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
    </div>
  )
}

export default SupervisorLogin