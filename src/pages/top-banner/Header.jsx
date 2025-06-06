import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ title, breadcrumb }) => {
  return (
    <div className="page-header">
     <div className="header-content">

        <div className="header-left">
        <h1>{title}</h1>
        <p className="breadcrumb">
          <Link style={{textDecoration:"none", color:"#000", fontSize:"20px"}} to="/" className="breadcrumb-home">Home</Link>
          <span style={{fontSize:"20px"}} className="breadcrumb-separator"> / </span>
          <span style={{fontSize:"20px"}} className="breadcrumb-current">{breadcrumb}</span>
        </p>
      </div>
      <div className="header-right">
        {/* <img
          src=""
        /> */}
      </div>   
          
</div>  
</div>
  );
};

export default Header;
