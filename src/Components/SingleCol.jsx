import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";

const SingleCol = (props) => (
  <Col>
    <Image className="w-100 h-50 object-fit-cover" src={props.imageUrl} alt="" fluid />
  </Col>
);

export default SingleCol;
