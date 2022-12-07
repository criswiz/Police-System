
import React from "react";
import Barchart from "../components/Barchart";

function Dashboard() {

  return (
    <>
      <section className='heading'>
        <img src="https://omanfm1071.com/wp-content/uploads/2022/03/1-ghana-police-service.jpg" width="300px" height="200px" alt=''/>
        <h4>Stats</h4>
      </section>

      <section>
        <Barchart />
      </section>

     
    </>
  )
}

export default Dashboard
