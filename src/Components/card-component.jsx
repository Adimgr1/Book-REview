import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Bookcard({child}) {
     return (
       <Card style={{ width: '18rem' }}>
         <Card.Body>
           <Card.Title>{child.name}</Card.Title>
           <Card.Subtitle className="mb-2 text-muted">{child.author}</Card.Subtitle>
           <Card.Text>{child.genre}</Card.Text>
           <Card.Link as={Link} style={{marginLeft:"30%"}} to="./bookdetail">Book-Detail</Card.Link>
         </Card.Body>
       </Card>
     );
   }
   
   export default Bookcard;