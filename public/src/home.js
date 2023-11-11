
import { Button, Col, Container, Row } from 'react-bootstrap';


const Home = () => {
    return (
        <div className='Intro'>
            <Container className='text-white text-center d-flex justify-content-center align-items-center'>
                <Row>
                    <Col>
                    <div className='title'>STREAMING DAN FILM GRATIS </div>
                    <div className='Buttonhome'><Button className='btn btn-dark btn-sm '>see more</Button></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home