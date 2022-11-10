import {Card, Col, Container, Row, Image} from "react-bootstrap";
import antmanImage from "../assets/superhero/antman.jpg";
import avengerImage from "../assets/superhero/avenger.jpg";
import batmanImage from "../assets/superhero/batman.jpg";
import robinhoodImage from "../assets/superhero/robinhood.jpg";
import spidermanImage from "../assets/superhero/spiderman-cover.jpg";
import supermanImage from "../assets/superhero/superman.jpg";


const Superhero = () => { 
    return(
        <div>
            <Container>
                <br/>                
                <h1 className="text-white">SUPERHERO MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" Id="superhero">
                    <Card className="bg-dark text-white text-dark movieImage">
                    <Image src={antmanImage} alt="Dune Movies"className="images"/>                
                    <Card.Title className="text-center">ANTMAN</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>                
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark text-white text-dark movieImage">
                    <Image src={avengerImage} alt="Dune Movies"className="images"/>                
                    <Card.Title className="text-center">AVENGER</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>                
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark text-white text-dark movieImage">
                    <Image src={batmanImage} alt="Dune Movies" className="images"/>                
                    <Card.Title className="text-center">BATMAN</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>                
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark text-white text-dark movieImage">
                    <Image src={robinhoodImage} alt="Dune Movies" className="images"/>                
                    <Card.Title className="text-center">ROBINHOOD</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>                
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark text-white text-dark movieImage">
                    <Image src={spidermanImage} alt="Dune Movies" className="images"/>                
                    <Card.Title className="text-center">SPIDERMAN</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>                
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark text-white text-dark movieImage">
                    <Image src={supermanImage} alt="Dune Movies" className="images"/>                
                    <Card.Title className="text-center">SUPERMAN</Card.Title>
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

export default Superhero;