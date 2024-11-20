import React, { useEffect, useState } from 'react'
import './History.css'
import { Link } from 'react-router-dom'
import { deletehistory, fetchhistory } from '../service/allapi';
import { toast } from 'react-toastify';
import axios from 'axios';






function History() {
  const [history, sethistory] = useState([]);
  
  


  const fetchHistory = async () => {
    try {
      const resulthist = await fetchhistory()
      sethistory(resulthist.data)
      fetchHistory()


    } catch (error) {
      console.log(error);

    }


  }
  useEffect(() => {
    fetchHistory()

  }, [])

 const remove = async (id) => {
   try {
     const result = await deletehistory(id)
     if (result.status >= 200 && result.status<300) {
      setdeletes(result)
      
      
    }
    toast.info('Deleting...')
   } catch (error) {
     console.log(error);
   }
 }

 

const fetching = async ()=>{
  const data = new FormData();

const options  =  {
  method: 'GET',
  url: 'https://api.unsplash.com/search/photos?query=nature&per_page=20&client_id=xx',

  data: data
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

}
useEffect(() => {
  
  fetching()
 
}, []);



  return (
    <>
      <Link className=' text-decoration-none' to={"/home"}><h5 className=' text-end text-bg-secondary p-3'>Back To Home</h5></Link>
      <div className="history-wrapper p-5">
        <div className="history-list">
          <h2 className='' style={{ color: "rgb(8, 124, 233)" }}>Watch History</h2>
          <table className=' table mt-4'>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>URL</th>
                <th>Date and Time</th>
                <th><i class="fa-solid fa-ellipsis-vertical"></i></th>
              </tr>
            </thead>
            <tbody>
              {history.length>0?
                history?.map((item,index) => {
                  return (
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.caption}</td>
                      <td>{item.url}</td>
                      <td>{item.formattedDate}</td>
                      <td><i onClick={() => remove(item.id)} className=" text-danger p-2 fa-solid fa-trash"></i></td>
                    </tr>
                  )
                })
                :<h3 className=' text-center mt-5 text-secondary'>You Have no History</h3>
              }

            </tbody>
          </table>



        </div>

      </div>
    </>
  )
}

export default History