import "./ApplyPoster.css";
import { useState } from "react";

const ApplyPoster = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted!");
    // Yahan aap API call ya whatever kar sakte ho
    setIsFormOpen(false);
  };

  return (
    <div className="ApplyPoster">
      <div className="apply-now">
        <h5>Let’s best Something Agency</h5>
        <p>There are many variations of passages of agency.</p>
        <button className="apply-btn" onClick={() => setIsFormOpen(true)}>APPLY NOW</button>
      </div>

      {isFormOpen && (
        <div className="popup">
          <div className="popup-content">
            <h5 className="mb-4">Apply Now</h5>

            {/* Your form here */}
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Enter your name" />
              <input type="email" placeholder="Enter your email" />
              <textarea name="" id="" placeholder="Enter Your message..."></textarea>

              <button type="submit">Submit</button> 
              <button type="button" onClick={() => setIsFormOpen(false)}>Close</button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default ApplyPoster;
