import React, { useState, useCallback }from 'react';
import Carousel, { Modal, ModalGateway } from "react-images";
import Card from 'react-bootstrap/Card';
import Gallery from "react-photo-gallery";
import { photos } from "./Photo";
import { SocialIcon } from 'react-social-icons';

//Styled Widgets
import { Images } from './StyledComponents';
import { Icons } from './StyledComponents';
import { WelcomeHeader } from './StyledComponents';



const WelcomePage = () => {
    const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

    return (
        <div>
            <WelcomeHeader>
            <h1>Dream Luxury Rentals</h1>
            </WelcomeHeader>

            <Images>
                <Gallery photos={photos} onClick={openLightbox} />
            </Images> 
               <ModalGateway>
                   {viewerIsOpen ? (
                   <Modal onClose={closeLightbox}>
                       <Carousel 
                       currentIndex={currentImage}
                       views={photos.map(x => ({
                           ...x,
                           srcset: x.srcSet,
                           caption: x.title
                       }))}
                       />
                   </Modal>
                   ) : null}
               </ModalGateway>
   
       
       <Card bg= 'light' style={{ width: '40%', margin: '0 auto', marginBottom: '50px', marginTop: '20px', textAlign: 'center'}}>
               <Card.Header style={{fontSize: '25px'}}>Contact Me</Card.Header>
           <Card.Body>
                   {/* <Card.Title>Contact Me</Card.Title> */}
               <Card.Text>
               Business: (469) 475-5863 <br/>
               Email: dreamluxuryrental1@gmail.com <br/>
               Location: 5728 Lunsford Rd Plano, TX 75024
               </Card.Text>
           </Card.Body>
       </Card>

       <footer className="social-icons">
                
                
                <Icons>
                    <SocialIcon url="https://www.facebook.com/profile.php?id=100085706750718" style={{ height: 40, width: 70 }} target="_blank"/>
                    <SocialIcon url="https://www.instagram.com/dream.luxury.rentals/" style={{ height: 40, width: 70 }} target="_blank"/>
                    <SocialIcon url="mailto:dreamluxuryrental1@gmail.com?subject=here" style={{ height: 40, width: 70 }} fgColor="#ff5a01" bgColor="#ffffff" target="_blank"/> 
           
                </Icons>
                
            </footer>
 
        
        </div>
    )


}

export default WelcomePage;