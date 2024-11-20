import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addvideo } from '../service/allapi';





function Add({setaddVideoresponse}) {

  let [videodetails,setvideodetails] =useState({caption:"",img:"",url:"",})
  const [show, setShow] = useState(false);
  let [isVlid,setisvalid] =useState();
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

 
  let getvid=(vidd)=>{
    if (vidd.includes("=")) {
      
   let vidid = vidd.split("=")[1].slice(0,11)
    setvideodetails({...videodetails,url:`https://www.youtube.com/embed/${vidid}`})
    setisvalid(false)

    }
    else{
      setisvalid(true)
    }
  }
  let handleUpload = async ()=>{
    let {img,url} = videodetails;
    if(img && url){
      setShow(false);
    const result = await addvideo(videodetails)
    setaddVideoresponse(result.data)
   
    toast.success(`${result.data.caption} uploaded`)

    
       
    }
    else{
      setShow(true);
      
      
    }
  }





  return (


<>
      <div className=' d-flex align-items-center'>
        <h4 style={{color:"rgb(8, 124, 233)"}}>Add new video</h4>
        <button onClick={handleShow} style={{border: "2px solid rgb(8, 124, 233)",color:"rgb(8, 124, 233)" }} className=' btn ms-3 rounded-circle fs-5'>+</button>
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
        label="Video Cpation"
        className="mb-3 mt-3">
        <Form.Control onChange={(e)=>{setvideodetails({...videodetails,caption:e.target.value})}} type="text" placeholder="Video Caption" className=' placeholder-glow'/>
      </FloatingLabel>
        <FloatingLabel
        controlId="floatingInput"
        label="Image Url"
        className="mb-3">
        <Form.Control onChange={(e)=>{setvideodetails({...videodetails,img:e.target.value})}}  type="text" placeholder="Image Url" className=' placeholder-glow'/>
      </FloatingLabel>
        <FloatingLabel
        controlId="floatingInput"
        label="Video Url"
        className="mb-3">
        <Form.Control onChange={(e)=>{getvid(e.target.value)}}  type="text" placeholder="Video Url" className=' placeholder-glow'/>
         {isVlid && <p >invalid url</p>}
      </FloatingLabel>


      </Modal.Body>
 
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload}  variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition: Bounce/>

</>
  )
}

export default Add
