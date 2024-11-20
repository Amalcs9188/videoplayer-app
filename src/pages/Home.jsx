import React, {  useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View.Jsx'
import Ctoegory from '../Components/Ctoegory'



function Home() {
  const [addVideoresponse,setaddVideoresponse] = useState("")
 

   return (
    <>
      <div className='container d-flex justify-content-between my-3'>
        <Add setaddVideoresponse={setaddVideoresponse}/>
        <Link to={"/history"} style={{color:"rgb(8, 124, 233)"}} className=' fw-bold fs-4 text-decoration-none align-items-center' >Watch History</Link>
      </div>
      <div className="row container-fluid my-5">
        <div className="col-lg-6">
          <View  addVideoresponse={addVideoresponse} />
        </div>
        <div className="col-lg-6">
          <Ctoegory/>
        </div> 


      </div>
    </>
  )
}

export default Home