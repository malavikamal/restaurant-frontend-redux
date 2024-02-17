import React from 'react';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function RestReview({ selectedRestaurant }) {

  const reviews = selectedRestaurant.reviews;

  const [open, setOpen] = useState(false);

  return (
    <>
      <button className='btn btn-outline-dark rounded shadow border-0 ms-3' style={{ color: "hotpink" }} onClick={() => setOpen(!open)} >
        Reviews <i class="fa-regular fa-eye"></i>
      </button>
      <Collapse in={open}>
        <div className="my-2">
          <hr />

          {

            reviews?.length > 0 ?
              reviews.map((item) => (

                <div className='mt-5'>
                  <h6>Name : <span className='text-primary' > {item.name} </span> </h6>
                  <h6>Date : <span className='text-primary' > {item.date} </span> </h6>
                  <h6>Reviews : <span className='text-primary' > {item.rating} </span> </h6>
                  <p className='mt-3'><u className='fw-bold'>Description</u> <br /> <span style={{color: "hotpink"}} > {item.comments} </span> </p>
                </div>

              )):
              <p>No Review Found</p>

          }
          {/* <hr /> */}
        </div>
      </Collapse>
    </>
  )
}

export default RestReview;