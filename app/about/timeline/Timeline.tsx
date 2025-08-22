"use client";
import React from "react";
import "./timeline.css";
import { leftTimelineData, rightTimelineData } from "./data";

const Timeline = () => {
  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Sejarah SMK TI Bazma</h2>
      <div className="timeline-two-column">
        
        {/* Kolom Kiri */}
        <div className="timeline-column left-column">
          <div className="timeline-line"></div>
          {leftTimelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-point"></div>
              <div className="timeline-content">
                <h3>{item.year} – <span>{item.title}</span></h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Kolom Kanan */}
        <div className="timeline-column right-column">
          <div className="timeline-line"></div>
          {rightTimelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-point"></div>
              <div className="timeline-content">
                <h3>{item.year} – <span>{item.title}</span></h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Timeline;
