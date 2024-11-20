
import React from 'react'
// import marco from "../assets/marco.jpeg"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deletevideo, history } from '../service/allapi';
import { toast } from 'react-toastify';









function Videocard({ display, setDeleted, insideCategory }) {
 


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {

    const { caption, url } = display;


    const date = new Date()
    const formattedDate = date.toLocaleString()
    const Savehistory = { caption, url, formattedDate }

    try {
      await history(Savehistory)




    } catch (error) {
      console.log(error.message);


    }







    setShow(true)
  }


  const remove = async (id) => {
    try {
      const result = await deletevideo(id)

      toast.info('Deleted')
      setDeleted(result.data)


    } catch (error) {
      toast.error(error.message)

    }
  }

  const dragged = (e, id) => {

    console.log(`dragged ${id}`);
    e.dataTransfer.setData("videoid", id)

  }





  return (
    <div className=' d-flex flex-wrap gap-5 p-1'>
      <Card draggable={true} onDragStart={(e) => dragged(e, display.id)} className=' p-3 d-flex flex-column justify-content-center align-items-center ' style={{ width: '20rem ', height:"30rem" }}>
        <Card.Img className=' w-100 h-75' variant="top" src={display.img} />
        <Card.Body>
          <Card.Title className=' d-flex justify-content-center fs-6 align-items-center'>{display.caption}
            {!insideCategory &&

              <i onClick={() => remove(display.id)} className=" p-2 fa-solid fa-trash"></i>
              }
              </Card.Title>
          <Card.Text>

          </Card.Text>
          <Button onClick={handleShow} variant="primary">  View</Button>
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className=' align-items-center d-flex flex-column justify-content-center'
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Your Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="560" height="315" src={display.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </Modal.Body>

      </Modal>

    </div>

  )
}

export default Videocard
