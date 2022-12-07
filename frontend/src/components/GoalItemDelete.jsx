import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'

function GoalItem({ goal }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <table className="table tc bg-grey dib br3 pa3 ma2 grow bw2 shadow-5">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Name-of-Complainant</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>Name-of-Officer</th>
                    <th>Email</th>
                    <th>Type-of-Complaint</th>
                    <th>Date-of-Incident</th>
                    <th>Region</th>
                    <th>Complaint</th>
                </tr>
            </thead>
            <tbody>
            
                
              <tr>
                <td>{new Date(goal.createdAt).toLocaleString('en-US')}</td>
                <td>{goal.nameofcomplaint}</td>
                <td>{goal.address}</td>
                <td>{goal.phonenumber}</td>
                <td>{goal.nameofserviceprovider}</td>
                <td>{goal.email}</td>
                <td>{goal.typeofcomplaint}</td>
                <td>{goal.date}</td>
                <td>{goal.region}</td>
                <td>{goal.complaint}</td>
                <td><button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
                  Delete X
                </button></td>
              </tr>
            
            </tbody>
        </table>
    </div>

    
  )
}

export default GoalItem
