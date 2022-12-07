import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalItemDelete from "../components/GoalItemDelete"
import Spinner from '../components/Spinner'
import {  reset } from '../features/goals/goalSlice'
import { FaBook } from "react-icons/fa"
import { toast } from 'react-toastify'
import { getGoalsAdmin } from "../features/goals/goalSlice"


function Supervisor() {


    const { goals } = useSelector(
        (state) => state.goals
    )
    
      const navigate = useNavigate()
      const dispatch = useDispatch()
    
      const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
      )
    
      useEffect(() => {
        if (isError) {
          toast.error(message)
        }
    
        dispatch(reset())

        dispatch(getGoalsAdmin())
      }, [user, isError, isSuccess, message, navigate, dispatch])
    
    
      if (isLoading) {
        return <Spinner />
      }

    
  return (
    <>
      <section className='heading'>
        <center><img src="https://omanfm1071.com/wp-content/uploads/2022/03/1-ghana-police-service.jpg" width="300px" height="200px" alt=''/></center>
        <h1>
          <FaBook /> Supervisor
        </h1>
      </section>

      <section className='complaints-filed'>
        <h1>
           Delete Complaints
        </h1>
        <section className='content'>
        {goals.length > 0 ? (
          <div className='goals'>
            {goals.map((goal) => (
              <GoalItemDelete key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>No Complaints filed</h3>
        )}
      </section>
      </section>
    </>
  )
}

export default Supervisor