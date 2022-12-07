

function SuspectItem({ suspect }) {

  return (
    <div className='suspects'>
      <table className="table tc dib br3 pa3 ma2 grow bw2 shadow-5">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Name of Suspect</th>
                    <th>Suspect Location</th>
                    <th>Crime Commited</th>
                    <th>Additional Information</th>
                </tr>
            </thead>
            <tbody>
            
                
              <tr>
                <td>{new Date(suspect.createdAt).toLocaleString('en-US')}</td>
                <td>{suspect.suspectname}</td>
                <td>{suspect.suspectlocation}</td>
                <td>{suspect.suspectcrime}</td>
                <td>{suspect.additionalinformation}</td>
              </tr>
            
            </tbody>
        </table>
    </div>

    
  )
}

export default SuspectItem
