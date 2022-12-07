import React from 'react'
import Search from '../components/Search';
import CitizenData from '../CitizenData';

function Citizen() {
    return (
        <div className="tc bg-white ma0 pa4 min-vh-100">
          <center><img src="https://omanfm1071.com/wp-content/uploads/2022/03/1-ghana-police-service.jpg" width="300px" height="200px" alt=''/></center>

          <Search details={CitizenData}/>
        </div>
    );
}

export default Citizen