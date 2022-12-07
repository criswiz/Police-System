import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createGoal, reset } from '../features/goals/goalSlice'
import Spinner from './Spinner'

function GoalForm() {
  const [formData, setFormData] = useState({
    nameofcomplaint: '',
    address: '',
    phonenumber: '', 
    email: '',
    nameofserviceprovider: '',
    typeofcomplaint: '',
    date: '',
    region: '',
    witness: '',
    complaint: '',
  })
  

  const { nameofcomplaint, address, phonenumber, email, nameofserviceprovider, date,typeofcomplaint, region, witness, complaint} = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.goals
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (!user){
      navigate('/')
    }

    if( isSuccess){
      toast.message('Complaint has been filed')
    }

    dispatch(reset())
  }, [goals, user, isError, isSuccess, message, navigate, dispatch])


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const complaintData = {
      nameofcomplaint,
      address,
      phonenumber, 
      email,
      nameofserviceprovider,
      typeofcomplaint,
      date,
      witness,
      region,
      complaint,
    }

    dispatch(createGoal( complaintData))
    setFormData('')

    
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <section className='formcomplaint'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Name of Complaint</label>
          <input
            type='text'
            name='nameofcomplaint'
            id='nameofcomplaint'
            value={nameofcomplaint}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>Address</label>
          <input
            type='text'
            name='address'
            id='address'
            value={address}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>Phone Number</label>
          <input
            type='number'
            name='phonenumber'
            id='phonenumber'
            value={phonenumber}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>Email</label>
          <input
            type='text'
            name='email'
            id='email'
            value={email}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>Name of Officer</label>
          <input
            type='text'
            name='nameofserviceprovider'
            id='nameofserviceprovider'
            value={nameofserviceprovider}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>Type of Complaint</label>
          <input
            type='text'
            name='typeofcomplaint'
            id='typeofcomplaint'
            value={typeofcomplaint}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>Date of Incident</label>
          <input
            type='text'
            name='date'
            id='date'
            value={date}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>Witness</label>
          <input
            type='text'
            name='witness'
            id='witness'
            value={witness}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>Region</label>
          <input
            type='text'
            name='region'
            id='region'
            value={region}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>Complaint</label>
          <textarea
            type="text"
            name="complaint"
            id="complaint"
            value={complaint}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Sumbmit Complaint
          </button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm
