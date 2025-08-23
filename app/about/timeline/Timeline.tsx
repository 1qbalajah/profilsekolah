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
                <h3>
                  {item.year} – <span>{item.title}</span>
                </h3>
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
                <h3>
                  {item.year} – <span>{item.title}</span>
                </h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
           <p className="text-center mt-10">“SMK TI BAZMA bukan sekadar sekolah,<span className="text-blue-500 font-bold">tapi wadah mencetak generasi Islami yang unggul di bidang teknologi dan berjiwa sosial tinggi.</span><br/>Seluruh operasional dan pendidikan ditopang oleh wakaf, menjadi contoh nyata pendidikan berkualitas tanpa biaya.”</p>
    </div>
  );
};

export default Timeline;
