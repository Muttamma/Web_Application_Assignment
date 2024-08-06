import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function NetprofitGoal() {
  const percentage = 70; // Example percentage value

  return (
    <div
      style={{
        position: "relative",
        width: "120px", // Increased width to accommodate the text
        height: "109px", // Increased height to accommodate additional text
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 0", // Add padding to ensure content stays within bounds
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100px",
          height: "87px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgressbar
          value={percentage}
          styles={{
            path: {
              stroke: "rgb(136, 132, 216)",
            },
            text: {
              fill: "#000000",
              fontSize: "10px",
              dominantBaseline: "middle",
              textAnchor: "middle",
            },
          }}
        />
        <div
          style={{
            position: "absolute",
            textAlign: "center",
            fontSize: "10px",
            color: "white",
          }}
        >
          <div>{`${percentage}%`}</div>
          <div>Goal Completed</div>
        </div>
      </div>
      <div
        style={{
          marginTop: "10px", // Add some space above this text
          fontSize: "10px",
          color: "white",
          paddingRight: "48px",
          textAlign: "center",
          whiteSpace: "nowrap", // Prevent text from wrapping
        }}
      >
        *The values here have been rounded off
      </div>
    </div>
  );
}

export default NetprofitGoal;
