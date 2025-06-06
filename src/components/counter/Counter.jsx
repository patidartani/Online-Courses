import "./Counter.css";

const Counter = () => {
  return (
    <div className="counter-container">
      <div className="counter-data">
        <div className="counter-left">
          <span className="counter-subtitle">OUR BEST COUNTER</span>
          <h2 className="counter-title">
            Complete About Students
            <br />
            University Education.
          </h2>
          <p className="counter-desc">
            Business tailored IT design, management & support services business
            agency elit, sed do eiusmod tempor.
          </p>

          <div className="counter-stats">
            <div className="stat-box">
              <h3>22K+</h3>
              <p>Successfully Trained</p>
            </div>
            <div className="stat-box">
              <h3>69K+</h3>
              <p>Keywords Updated</p>
            </div>
            <div className="stat-box">
              <h3>56K+</h3>
              <p>Google Search</p>
            </div>
          </div>
        </div>

        <div className="counter-right">
          {/* <img src={img} alt="Student" className="counter-img" /> */}
        </div>
      </div>
    </div>
  );
};

export default Counter;
