import React from 'react'
import './Footer.css'


function Footer() {
  return (
    <>
      <footer>
        <div className="row  align-items-center  mt-3 g-4 gap-5 container-fluid p-5 footer-wrapper">
          <div className="col-lg-3 col-12 col-md-5">
            <div className='footer-logo d-flex align-items-center '>
              <i className="fa-solid fa-play me-2 ms-3 logo-i mb-2"></i>
              <h3>MYVID</h3>
            </div>
            <p className=' container-fluid'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, molestias velit odit sit omnis repellendus quod non eligendi illo eos voluptatum temporibus, id optio. Eaque asperiores ab neque fugit corrupti.</p>

          </div>
          <div className=" col-lg-2 col-12 col-md-5 list">
            <ul>
              <li>Links</li>
              <li>landing</li>
              <li>home</li>
              <li>Watch History</li>
            </ul>
          </div>
          <div className="col-lg-2 col-12 col-md-5 list">
            <ul>
              <li>Guides</li>
              <li>React</li>
              <li>React Bootstrap</li>
              <li>Wath Router</li>
            </ul>
          </div>
          <div className="col-lg-3 col-12 col-md-5 list d-flex flex-column">
            <h4>Contact US</h4>
            <div className='seacrh'>
              <div className="input-group">
                <div className="form-outline" data-mdb-input-init>
                  <input type="search" id="form1" className="form-control"  placeholder='search'/>
                  
                </div>
                <button type="button" className="btn btn-primary ms-2" data-mdb-ripple-init>
                <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>

            <div className='icons'>
              <a
                data-mdb-ripple-init
                class="btn btn-link btn-floating btn-lg text-body m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i class="fab fa-facebook-f"></i></a>
              <a
                data-mdb-ripple-init
                class="btn btn-link btn-floating btn-lg text-body m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i class="fab fa-twitter"></i></a>
              <a
                data-mdb-ripple-init
                class="btn btn-link btn-floating btn-lg text-body m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i class="fab fa-google"></i></a>
              <a
                data-mdb-ripple-init
                class="btn btn-link btn-floating btn-lg text-body m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i class="fab fa-instagram"></i></a>
              <a
                data-mdb-ripple-init
                class="btn btn-link btn-floating btn-lg text-body m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i class="fab fa-github"></i></a>



            </div>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer