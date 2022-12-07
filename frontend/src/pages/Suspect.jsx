import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { createSuspect } from '../features/suspects/suspectSlice'
import Spinner from '../components/Spinner'
import SuspectItem from '../components/SuspectItem'

function Suspect() {
  const [formData, setFormData] = useState({
    suspectname: '',
    suspectlocation: '',
    suspectcrime: '',
    additionalinformation: '',
  })

  const { suspectname, suspectlocation, suspectcrime, additionalinformation } = formData

  const dispatch = useDispatch()

  const { suspects, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.suspects
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if( isSuccess){
      toast.success('Suspect information has been added')
    }

  }, [suspects, isError, isSuccess, message, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const suspecData = {
      suspectname,
      suspectlocation,
      suspectcrime,
      additionalinformation,
    }

    dispatch(createSuspect(suspecData))
   
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div>
      <center><img src="https://omanfm1071.com/wp-content/uploads/2022/03/1-ghana-police-service.jpg" width="300px" height="200px" alt=''/></center>
      <h2>Suspect And Investigations Form</h2> 

      <section className='form-suspect'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='suspectname'
              name='suspectname'
              value={suspectname}
              placeholder='Enter your suspect name'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='suspectlocation'
              name='suspectlocation'
              value={suspectlocation}
              placeholder='Suspect Location'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='suspectcrime'
              name='suspectcrime'
              value={suspectcrime}
              placeholder='Suspect Crime'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
          <textarea
            type="text"
            name="additionalinformation"
            id="additionalinformation"
            value={additionalinformation}
            placeholder='Investigation Findings'
            onChange={onChange}
          />
        </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>

      <section className='complaints-filed'>
        <h1>
           Suspects Information
        </h1>
        <section className='content'>
        {suspects.length > 0 ? (
          <div className='goals'>
            {suspects.map((suspect) => (
              <SuspectItem key={suspect._id} suspect={suspect} />
            ))}
          </div>
        ) : (
          <h3>No Suspects Have been added</h3>
        )}
      </section>
      </section>
    </div>
  )
}

export default Suspect