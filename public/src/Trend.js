import { Col, Container, Row,Card,Image} from "react-bootstrap"
import Image1 from "../src/assets/img/trending/1.jpeg"
import Image2 from "./assets/img/trending/2.jpeg"
import Image3 from "../src/assets/img/trending/3.jpeg"
import Image4 from "./assets/img/trending/4.jpeg"
import Image5 from "../src/assets/img/trending/5.jpeg"
import Image6 from "./assets/img/trending/6.jpeg"
const Trends = () => {
    return (
        <div>
            <Container  id="trend">
                <br/>
                <h1 className="text-white">Trending Movies</h1>
                <br/>
                <Row>
                    <Col md={4} >
                        <Card className="movieTrend">
                            <Image src={Image1} alt="Card image" className="ImagesTrend"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Card title</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                               
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="movieTrend">
                            <Image src={Image2} alt="Card image" className="ImagesTrend"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Card title</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                               
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="movieTrend">
                            <Image src={Image3} alt="Card image" className="ImagesTrend"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Card title</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                               
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="movieTrend">
                            <Image src={Image4} alt="Card image" className="ImagesTrend"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Card title</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                               
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="movieTrend">
                            <Image src={Image5} alt="Card image" className="ImagesTrend"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Card title</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                               
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="movieTrend">
                            <Image src={Image6} alt="Card image" className="ImagesTrend"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Card title</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                               
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        
        
    )
}

export default Trends