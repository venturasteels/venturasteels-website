import React from "react";
import { Link } from "react-router-dom";
import "./UnderConstruction.css";

export default function UnderConstruction() {
  return (
    <div className="under-construction-section d-flex flex-column justify-content-center align-items-center text-center">
      <div className="construction-box px-5 pt-5">
        <div className="icon mb-3 fs-2">🚧</div>
        <h1 className="heading mb-3">Page Under Construction</h1>
        <p className="subtitle mb-4">
          We’re currently updating this page to provide detailed product and
          grade information.
          <br />
          If you have any enquiries regarding
          <strong>available grades or materials</strong>, feel free to contact
          us.
        </p>
      </div>
    </div>
  );
}
