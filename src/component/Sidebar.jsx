import { Col } from "react-bootstrap";

function Sidebar(props) {
  return (
    <Col className="sideDashboard">
      <div className="side2 bg-white">
        <p className="dash-judul" type="text1">
          {props.title}
        </p>
        <p className="dash-judul2">{props.submenu}</p>
      </div>
    </Col>
  );
}

export default Sidebar;
