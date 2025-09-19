import React from "react";
import { Link } from "react-router-dom";
import gradesData from "./data/gradesData";
import "./GradesTable.css";

const GradesTable = () => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered text-center align-middle grades-table">
        <thead className="table-dark">
          <tr>
            {gradesData.map((cat, index) => (
              <th key={index}>{cat.category}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({
            length: Math.max(...gradesData.map((c) => c.grades.length)),
          }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {gradesData.map((cat, colIndex) => (
                <td key={colIndex}>
                  {cat.grades[rowIndex] ? (
                    <Link to={cat.grades[rowIndex].link} className="grade-link">
                      {cat.grades[rowIndex].name}
                    </Link>
                  ) : (
                    ""
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradesTable;
