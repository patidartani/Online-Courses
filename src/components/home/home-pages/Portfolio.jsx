import React, { useState } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const portfolios = [
    {
      category: "Events",
      img: "https://img.freepik.com/premium-photo/children-standing-stage_1048944-14058842.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
      title: "Annual Day",
      description: "Cultural performances by students",
    },
    {
      category: "Achievements",
      img: "https://img.freepik.com/free-photo/kids-laboratory-doing-experiments_23-2148891928.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
      title: "Science Fair",
      description: "Students won state-level awards",
    },
    {
      category: "Facilities",
      img: "https://img.freepik.com/free-photo/cafe-frankfurt-germany_1268-20912.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
      title: "Library",
      description: "Well-stocked with 10,000+ books",
    },
    {
      category: "Facilities",
      img: "https://img.freepik.com/free-photo/woman-drawing-showing-triangle-blackboard-children_259150-60360.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
      title: "Smart Classroom",
      description: "Digital learning enabled",
    },
    {
      category: "Events",
      img: "https://img.freepik.com/premium-photo/little-kids-playing-football-indoors-happy-children-football-team_274719-6841.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
      title: "Sports Day",
      description: "Track and field events",
    },
    {
      category: "Achievements",
      img: "https://img.freepik.com/free-photo/proud-child-holding-blank-paper_1098-3412.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
      title: "Certificate Winners",
      description: "Students awarded in academics",
    },
    {
      category: "Facilities",
      img: "https://img.freepik.com/free-photo/kids-doing-chemical-experiment-school_23-2148990209.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
      title: "Science Lab",
      description: "Well-equipped for experiments",
    },
    {
      category: "Events",
      img: "https://img.freepik.com/premium-photo/beautiful-girls-boy-celebration-happy-diwali_1148899-1177.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
      title: "Festive Celebrations",
      description: "Events like Diwali & Christmas",
    },
    {
      category: "Achievements",
      img: "https://img.freepik.com/premium-photo/clever-schoolboy-raising-his-trophy-as-winner-school-competition_54391-4716.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
      title: "Topper Award",
      description: "100% results in board exams",
    },
  ];

  const filteredPortfolios =
    filter === "All"
      ? portfolios
      : portfolios.filter((p) => p.category === filter);

  return (
    <div className="Portfolio">
      <div className="port-folio">
        <div className="portfolio-top">
          <h5>PORTFOLIO</h5>
          <h6>Our School Highlights</h6>
        </div>

        <div className="portfolio-btm">
          <div className="p-btm-tp">
            <div className="cards">
              <p
                onClick={() => setFilter("All")}
                className={filter === "All" ? "active" : ""}
              >
                All
              </p>
              <p
                onClick={() => setFilter("Events")}
                className={filter === "Events" ? "active" : ""}
              >
                Events
              </p>
              <p
                onClick={() => setFilter("Achievements")}
                className={filter === "Achievements" ? "active" : ""}
              >
                Achievements
              </p>
              <p
                onClick={() => setFilter("Facilities")}
                className={filter === "Facilities" ? "active" : ""}
              >
                Facilities
              </p>
            </div>
          </div>
          <div className="p-btm-bottom">
            <div className="btm-botm">
              {filteredPortfolios.map((portfolio, index) => (
                <div
                  key={index}
                  className="portfolio-box"
                  style={{ backgroundImage: `url(${portfolio.img})` }}
                >
                  <div className="img-overlay">
                    <div className="overLeft">
                      <h5>{portfolio.title}</h5>
                      <p>{portfolio.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
