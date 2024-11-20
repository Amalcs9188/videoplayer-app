import React, { useEffect, useState } from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Category, deleteCategory, deletevideo, fetchCategory, fetchSingleCategory, getSingleVideo, updateCategory } from '../service/allapi';

import Videocard from './Videocard'






function Ctoegory() {
  const [show, setShow] = useState(false);

  const [categories, setcategories] = useState();
  const [FetchedData, setFetchedData] = useState();
 



  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  const HandleClick = async () => {


    if (categories) {
      try {
        handleClose()

        await Category({ categories, Allvideo: [] })

      } catch (error) {
        console.log(error);


      }


    }
    else {
      alert("enter category")
    }

  }

  const fetchCat = async () => {
    try {

      const result = await fetchCategory();

      setFetchedData(result.data)


    } catch (error) {
      console.log(error);

    }

  }

  useEffect(() => {
    fetchCat()




  }, [FetchedData]);

  const deleteCategoris = async (id) => {
    try {
      await deleteCategory(id)
      fetchCat()


    } catch (error) {
      console.log(error);

    }
  }

  const videoDropped = async (e, catid) => {

    console.log(`dragged in ${catid}`);

    const result = e.dataTransfer.getData("videoid")

    const { data } = await getSingleVideo(result)
    console.log(data);

    const catdetails = FetchedData.find(item => item.id == catid)
    catdetails.Allvideo.push(data)

    await updateCategory(catid, catdetails)
    await deletevideo(result)

  }
  const prevent = (e) => {
    e.preventDefault()
  }

  // const draggstarted= async (e, video, categoryid) => {
  //   const shareData = { video, categoryid }
  //   e.dataTransfer.setData("shareData", JSON.stringify(shareData))

  //   try { 
  //     const {data} = await fetchSingleCategory(categoryid)
  //     console.log(data.Allvideo);
  //   const removed =  data.Allvideo.filter(v => v.id !==video.id)
  //   console.log(removed);
  //   const {id, categories} = data

  //   await updateCategory({id,categories, Allvideo: removed})
    
      

      
  //   } catch (error) {
  //     console.log(error.message);
      
      
  //   }
    
  // }
  const draggstarted = async (e, video, categoryId) => {
    const shareData = { video, categoryId };
    e.dataTransfer.setData("shareData", JSON.stringify(shareData));
   
    
  

  };








  return (
    <div>
      <div className=' d-flex align-items-center justify-content-between'>
        <h2>Category</h2>
        <div className=' d-flex'>
          <h4 style={{ color: "rgb(8, 124, 233)" }}>Add new Category</h4>
          <button onClick={handleShow} style={{ border: "2px solid rgb(8, 124, 233)", color: "rgb(8, 124, 233)" }} className=' btn ms-3 rounded-circle fs-5'>+</button>
        </div>
      </div>
      

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title className=' text-primary' id="contained-modal-title-vcenter">
            Video details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Please Fill The Following Details</h6>
          <FloatingLabel

            controlId="floatingInput"
            label="Category"
            className="mb-3 mt-3">
            <Form.Control onChange={(e) => setcategories(e.target.value)} type="text" placeholder="Catogery" className=' placeholder-glow' />
          </FloatingLabel>



        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={HandleClick} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      {
        FetchedData?.map((item) => {

          return <div droppable={true} onDragOver={(e) => prevent(e)} onDrop={(e) => videoDropped(e, item.id)} className=' container-fluid border-2 border p-4'>
            <div className=' d-flex justify-content-between bg-info mb-4 p-2  rounded '>
              <h5>{item.categories}</h5>
              <i onClick={() => deleteCategoris(item.id)} className=" text-danger p-2 fa-solid fa-trash"></i>

            </div>
            <div className=' d-flex gap-2 flex-wrap container-fluid'>

              <div  className=' d-flex flex-wrap'>
                {
                  item.Allvideo?.map((video) => (
                    <div draggable={true} onDragStart={(e) => { draggstarted(e, video, item.id) }} className=' d-flex '><Videocard  display={video} insideCategory={true} /></div>
                  ))

                }
              </div>


            </div>
          </div>
        }

        )
      }






    </div>
  )
}

export default Ctoegory

{/* <Card style={{  height:"450px"}} className=' p-3 border border-2 shadow-lg'>
                          <Card.Img  className=' img-fluid h-75 w-100'  hvariant="top" src={video.img} />
                          <Card.Body className=' d-flex flex-column align-items-center'>
                            <Card.Title>{video.caption}</Card.Title>
                            <Card.Text>
          
                            </Card.Text>
                            <Button src="" variant="primary">View</Button>
                          </Card.Body>
                        </Card> */}