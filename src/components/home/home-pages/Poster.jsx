import "./Poster.css";
import notebookimg from "../../../assets/notebook.png";
import posterBoyimg from "../../../assets/posterboy.png";

const Poster = () => {
  return (
    <div className="poster-container">
      <div className="poster-data">
        <div className="poster-left">
          <img src={posterBoyimg} alt="posterboy" className="poster-boy-image" />
          <img src={notebookimg} alt="Notebook" className="poster-image" />
        </div>
        <div className="poster-right">
          <div className="text-container">
            <h2 className="poster-heading">Study Off Flexibly</h2>
            <p className="poster-text">
              We can provide you with a reliable handyan in this school cros students. 
              Please input an email address down below we can be collage apply school. 
              Please input anand school. included the today.
            </p>
          </div>
          <button className="poster-button">CONTACT US</button>
        </div>
      </div>
    </div>
  );
};

export default Poster;
