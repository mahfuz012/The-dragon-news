import React, { useEffect, useState } from 'react';
import { BsBookmark,BsFillBookmarkFill,BsFillShareFill,BsStar } from 'react-icons/bs';
import { FaStarHalfAlt,FaStar } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { EmailIcon, FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton, FacebookShareButton, InstapaperIcon, LinkedinIcon, WhatsappIcon, WhatsappShareButton} from "react-share";


const News = ({data,BookmarADd}) => {
const [icon,seticon] = useState(false)



const {_id,author,details,rating,total_view,title,thumbnail_url,image_url,others_info} = data

const mystring = author.published_date

const [show, setShow] = useState(false);
const handleShow = () => setShow(true);


function handleClick2(){
  seticon(!icon)
}



    return (
        <div className='container pb-3 my-4 border rounded'>



     <div style={{backgroundColor:"#F1F6F9"}} className="row justify-content-between">
     <div className='align-items-center w-75 d-flex'>
      
     <div className=''> 
      <img style={{width:"2.5rem"}} className='my-2 rounded-circle' src={author.img} alt="" />
      </div>

     <div className=''>
        <small  className='mx-2 fw-bold '>{author.name}</small><br></br>
     <small className='mx-2 text-secondary'>{mystring?.slice(0,10)}</small>
     </div>
 </div>


<div className=' d-flex align-items-center w-25'>
 <div className='ms-auto'>


{ icon?
<BsFillBookmarkFill className='mx-2'  onClick={()=>{BookmarADd(data);handleClick2()}} />:
 <BsBookmark className='mx-2'  onClick={()=>{BookmarADd(data);handleClick2()}}/> 

 }



 <BsFillShareFill  className=''  onClick={handleShow}/>
<ModalUse />

 </div>
</div>
</div>




      <div className="row">
        <h5 style={{color:"#403F3F"}} className='my-3 fw-bold  '>{title}</h5>
</div> 


   <img  className='mb-3' src={thumbnail_url} alt="" />


  <p>{details.slice(0,150)}....</p>
 <Link to={`/newsdetails/${_id}`}> <span  className='text-primary fw-bold'>Read More</span></Link>


             <hr />



             <div className="row">

              <div className='d-flex align-items-center  w-50 '>
<div className=' mb-1'>
<Rating 
  placeholderRating={rating?.number}
  emptySymbol={<BsStar style={{color:"coral"}}/> }
  placeholderSymbol={ <FaStar style={{color:"coral"}} />}
  fullSymbol={<FaStar style={{color:"coral"}} />}
  readonly
/>
</div>
<span className='mx-2 fw-bold text-secondary'>{rating?.number}</span>
 </div>

<div className=' ms-auto  w-25 d-flex align-items-center'>
           <GrView />
<span className='mx-2 fw-bold text-secondary' >{total_view} views</span>
              </div>
             </div>
        </div>
    );





    function ModalUse(){
  
  
      
      const handleClose = () => setShow(false);
  
        return (
          <>
           <Modal   size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Share Now </Modal.Title>
              </Modal.Header>
              <Modal.Body className='d-flex justify-content-evenly'>



   <FacebookShareButton url={"www.cvf71.com"}>
         <FacebookIcon className='rounded-circle mx-2' />  
</FacebookShareButton>

<WhatsappShareButton url='www.cvf71.com"'><WhatsappIcon className='rounded-circle mx-2'/></WhatsappShareButton> 






              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
               
              </Modal.Footer>
            </Modal>
          </>
        )
      }
      




};




export default News;