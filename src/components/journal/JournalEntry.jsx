import React from "react";

const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage:
            "url(https://inmobiliare.com/himalaya/wp-content/uploads/2020/05/vivienda-cdmx-valor.png)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-ttile">un nuevo dia</p>
        <p className="journal__entry-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur.
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
