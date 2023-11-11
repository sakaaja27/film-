import { Carousel,Container,Image, Row,Col} from "react-bootstrap"
import Image4 from "./assets/bg/bg1.png"
import Image5 from "./assets/bg/g3.png"



const Home = () => {

    return (
      <div>
        <Container>
          <Row>
            <Col>
            <div className="Intro text-white text-center d-flex justify-content-center align-items-center">
              <div className='title'>STREAMING DAN FILM GRATIS </div>
            </div>
            <div className="ImgSlide d-flex justify-content-center align-items-center">
            <Carousel>
              <Carousel.Item>
                <div className="Img ">
                  <Image src={Image4} className="d-block w-100"/>
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </div>
                
              </Carousel.Item>
              <Carousel.Item>
                <div className="Img">
                  <Image src={Image5} className="d-block w-100"/>
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </div>
                
              </Carousel.Item>
            </Carousel>
            </div>
            </Col>
            
          </Row>
        </Container>
      </div>
      );
    // return (
    //     <div className='Intro'>
    //         <Container className='text-white text-center d-flex justify-content-center align-items-center'>
    //             <Row>
    //                 <Col>
    //                 <div className='title'>STREAMING DAN FILM GRATIS </div>
    //                 <div className='Buttonhome'><Button className='btn btn-dark btn-sm '>see more</Button></div>
    //                 </Col>
    //             </Row>
    //         </Container>
    //     </div>
    // )
}

export default Home