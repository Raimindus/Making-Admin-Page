import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import iconAccount from "../assets/img/Group 15.png";
import iconBox from "../assets/img/box.png";
import iconDashb from "../assets/img/dashb.png";
import iconCar from "../assets/img/fi_truck.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import toggleIcon from "../assets/img/fi_menu.png";
import { Link } from "react-router-dom";

function NavbarADM() {
  return (
    <>
      <Navbar bg="light" style={{ marginLeft: "70px" }}>
        <Container fluid>
          <div className="divlogo1"></div>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <img src={toggleIcon} style={{ marginLeft: "190px" }}></img>
              {/* <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
               */}
            </Nav>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2 " aria-label="Search" />
              <Button style={{ marginLeft: "-10px", backgroundColor: "white", borderColor: "#0D28A6", color: "#0D28A6" }}>Search</Button>
            </Form>
            <img src={iconAccount} className="rounded ms-3 "></img>
            <DropdownButton id="dropdown-item-button" title="Unis Badri" variant="light">
              <Dropdown.ItemText>Unis Badri</Dropdown.ItemText>
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="d-flex column">
        <div className="side">
          <img src={iconBox} className="ms-3 mt-3 " style={{ marginBottom: "10px" }}></img>
          <div className=" pt-3  bg-primary">
            <Link to="/dashboard">
              <img src={iconDashb} className="iconAdm"></img>
              <p className="iconDesc pt-1 pb-3">Dashboard</p>
            </Link>
            <Link to="/car">
              <img src={iconCar} className="iconAdm"></img>
              <p className="iconDesc pt-1 pb-3">Cars</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarADM;
