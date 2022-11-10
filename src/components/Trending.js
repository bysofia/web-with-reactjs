import {Card, Col, Container, Row, Image} from "react-bootstrap";
import duneImage from "../assets/trending/dune.jpg";
import everythingImage from "../assets/trending/everything.jpg";
import infiniteImage from "../assets/trending/infinite.jpg";
import jokerImage from "../assets/trending/joker.jpg";
import lightyearImage from "../assets/trending/lightyear.jpg";
import morbiusImage from "../assets/trending/morbius.jpg";


const Trending = () => { 
    return(
        <div>
            <Container>
                <br/>                
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" Id="trending">
                    <Card className="bg-dark text-white text-dark movieImage">
                    <Image src={duneImage} alt="Dune Movies"className="images"/>                
                    <Card.Title className="text-center">DUNE</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>                
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark text-white text-dark movieImage">
                    <Image src={everythingImage} alt="Dune Movies"className="images"/>                
                    <Card.Title className="text-center">EVERYTHING</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>                
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark text-white text-dark movieImage">
                    <Image src={infiniteImage} alt="Dune Movies" className="images"/>                
                    <Card.Title className="text-center">INFINITE</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>                
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark text-white text-dark movieImage">
                    <Image src={jokerImage} alt="Dune Movies" className="images"/>                
                    <Card.Title className="text-center">JOKER</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>                
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark text-white text-dark movieImage">
                    <Image src={lightyearImage} alt="Dune Movies" className="images"/>                
                    <Card.Title className="text-center">LIGHT YEAR</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>                
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark text-white text-dark movieImage">
                    <Image src={morbiusImage} alt="Dune Movies" className="images"/>                
                    <Card.Title className="text-center">MORBIUS</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>                
                    </Card>
                    </Col>
                </Row>
            </Container>
        
        </div>

    )
}

export default Trending;