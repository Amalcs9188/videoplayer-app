import React, {  useEffect, useState } from 'react'
import Videocard from './Videocard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { addvideo, fetchSingleCategory, fetchvideo, updateCategory } from '../service/allapi';








function View({ addVideoresponse }) {
  const [deleted, setDeleted] = useState()
  const [allvideos, setallvideos] = useState([])
  const [newuploaded, setnewuploaded] = useState();
  

  useEffect(() => {


    fetchVideos()
   
    droppeddata()

  }, [addVideoresponse, deleted,allvideos])
 
    
  





  const fetchVideos = async () => {
    try {

      const result = await fetchvideo()
      if (result.status >= 200 && result.status < 300) {


        setallvideos(result.data)

      }


    }
    catch (error) {

      console.log(error.message);


    }
  }
  const prevent = (e) => {
    e.preventDefault();
  }
  
  const droppeddata = async (e) => {
    const { video, categoryId } = JSON.parse(e.dataTransfer.getData('shareData'))

    
    
    try { 
     

  
      // Fetch the category and update it
      const { data } = await fetchSingleCategory(categoryId);

      console.log(data);
      
      const remainingVideos = data.Allvideo.filter(v => v.id != video.id);
      
      console.log(remainingVideos);
      
      const { id, categories } = data;
  
     const  result = await updateCategory(categoryId,{ id, categories, Allvideo: remainingVideos });
     console.log(result);
           
           await addvideo(video)
           fetchVideos()
           
    
         

     
    } catch (error) {
      console.error( error);
      // Implement user feedback here, e.g.:
      // showErrorNotification("Failed to update category. Please try again.");
    }
  }
  




  return (
    <>
      <h2 className=' text-info'>All Videos</h2>
      <Row className=' border border-2'>
        <div droppable={true} onDragOver={(e)=>prevent(e)} onDrop={(e)=>droppeddata(e)} style={{}} className=' d-flex'>

          {
            allvideos.length > 0 ?
              allvideos?.map(video => (
                <Col key={video.id} lg={4} md={6} sm={12}>
                  <Videocard setDeleted={setDeleted} display={video} />
                </Col>
              ))
              :
              <h3>No Videos Found</h3>

          }

        </div>








      </Row>
    </>
  )
}


export default View