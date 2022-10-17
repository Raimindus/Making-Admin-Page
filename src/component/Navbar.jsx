import { Link } from "react-router-dom";

import iconBox from "../assets/img/box.png";
import iconDashb from "../assets/img/dashb.png";
import iconCar from "../assets/img/fi_truck.png";

function Navbar() {
  return (
    <div style={{ width: "70px" }}>
      <div className="d-flex column">
        <div className="side">
          <img
            src={iconBox}
            className="ms-3 mt-3 "
            alt="iconBoxImg"
            style={{ marginBottom: "10px" }}
          />
          <div className=" pt-3  bg-primary">
            <Link to="/dashboard">
              <img src={iconDashb} alt="iconDashbImg" className="iconAdm" />
              <p className="iconDesc pt-1 pb-3">Dashboard</p>
            </Link>
            <Link to="/car">
              <img src={iconCar} className="iconAdm" alt="iconAdmImg" />
              <p className="iconDesc pt-1 pb-3">Cars</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
