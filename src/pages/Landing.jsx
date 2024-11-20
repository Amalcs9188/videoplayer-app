import React from 'react'
import "./Landing.css"
import Landingimg from "../assets/IMG1.gif"
import settings from "../assets/abcd.png"
import file from "../assets/filelogo.png"



function Landing() {
  return (
    <>
      <div className="row">
        <div style={{ paddingTop: "10%" }} className=' col-lg-6 col-md-12 d-flex justify-content-center align-items-center container-fluid'>
          <div className='p-5 container-fluid'>
            <h3 className='chumma'>Welcome to <span className='running' style={{ color: "#2BA3ED" }}>Media Player <i className="fa-solid fa-music" style={{ color: "#357efd" }}></i></span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequuntur quisquam ut ad dolor, natus dicta excepturi repellat accusamus nostrum itaque quaerat esse iusto impedit vitae, consectetur, nobis voluptates. Vel!Lorem
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam minus corrupti dolores eaque, velit quibusdam molestias fugit necessitatibus beatae reiciendis, praesentium nihil in ex natus voluptatibus impedit reprehenderit? Unde, dolore.
            </p>
            <a href="./home" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Get Started</a>
          </div>

        </div>
        <div className=' col-6'>
          <img className=' img-fluid m-5 imagem' src={Landingimg} alt="" />

        </div>
      </div>

      <div className="Features">
        <h1>Features</h1>

        <div className='features-section'>
          <div className="cards mt-3">
            <img src={settings} alt="" />
            <h5>Managing Videos</h5>
            <p>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos pariatur maxime nobis doloremque ea, porro tempora odio n
            </p>
          </div>
          <div className="cards mt-3">
            <img src={settings} alt="" />
            <h5>Categorize Video Videos </h5>
            <p>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos pariatur maxime nobis doloremque ea, porro tempora odio n
            </p>
          </div>
          <div className="cards mt-3">
            <img src={file} alt="" />
            <h5>Managing history</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit molestiae neque odit, porro sequi architecto repudiandae recusandae ut, perferendis fug</p>
          </div>
        </div>
      </div>

      <div className="youtube  ">


        <div className=' gap-5 p-5 border border-3 border-opacity-100 border-white youtube-wrapper' >
          <div className='youtube-content'>
            <h2 className=' text-warning mb-4'>Simple, fast And powerfull</h2>
            <p><span style={{ font: "2em", fontWeight: "bold", color: "white" }}>Play everything:</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, beatae, ea dolorem sequi suscipit cupiditate perspiciatis ipsam excepturi molestias, explicabo ipsa? Ipsa, quae doloremque laborum tempora non vitae consequuntur odit!</p>
            <p><span style={{ font: "2em", fontWeight: "bold", color: "white" }}>Categorize video:</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, beatae, ea dolorem sequi suscipit cupiditate perspiciatis ipsam excepturi molestias, explicabo ipsa? Ipsa, quae doloremque laborum tempora non vitae consequuntur odit!</p>
            <p><span style={{ font: "2em", fontWeight: "bold", color: "white" }}>Managing history:</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, beatae, ea dolorem sequi suscipit cupiditate perspiciatis ipsam excepturi molestias, explicabo ipsa? Ipsa, quae doloremque laborum tempora non vitae consequuntur odit!</p>

          </div>
          <div className='youtube-content'>
          <iframe className='yvideo mt-3' src="https://www.youtube.com/embed/7fmwBn7gxaQ?si=56URck2hu8n3O9CT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

      </div>


    </>

  )
}

export default Landing