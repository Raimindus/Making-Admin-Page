import {
  Button,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  Nav,
  Navbar,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import toggleIcon from "../assets/img/fi_menu.png";
import iconAccount from "../assets/img/Group 15.png";

function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate(`/`);
  };
  return (
    <Navbar bg="light">
      <Container fluid className="container1">
        <div className="divlogo1" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Navbar.Toggle aria-controls="navbarScroll" />
            <img
              src={toggleIcon}
              alt="toggleIconImg"
              style={{ marginLeft: "190px" }}
            />
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 "
              aria-label="Search"
            />
            <Button
              style={{
                marginLeft: "-10px",
                backgroundColor: "white",
                borderColor: "#0D28A6",
                color: "#0D28A6",
              }}
            >
              Search
            </Button>
          </Form>
          <img
            src={iconAccount}
            alt="iconAccountImg"
            className="rounded ms-3 "
          />
          <DropdownButton
            id="dropdown-item-button"
            title={JSON.parse(localStorage.getItem("auth"))?.email}
            variant="light"
          >
            <Dropdown.Item as="button">
              {JSON.parse(localStorage.getItem("auth"))?.role}
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={handleLogout}>
              Logout
            </Dropdown.Item>
          </DropdownButton>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
