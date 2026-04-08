import React, { useState } from "react";
import "./MetalWeightCalculator.css";

const MetalWeightCalculator = () => {
  const [shape, setShape] = useState("round");
  const [quantity, setQuantity] = useState(1);
  const [dia, setDia] = useState("");
  const [thickness, setThickness] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [weight, setWeight] = useState(0);

  const calculateWeight = () => {
    let result = 0;

    if (shape === "round") {
      result = ((dia * dia * 0.0019) / 304.8) * length;
    } else if (shape === "flat") {
      result = ((thickness * width * 0.0024) / 304.8) * length;
    }

    result = result * quantity;

    setWeight(result.toFixed(3));
  };

  const clearFields = () => {
    setDia("");
    setThickness("");
    setWidth("");
    setLength("");
    setQuantity(1);
    setWeight(0);
  };

  return (
    <div className="calculator-wrapper">
      <div className="calculator-card">
        <h3 className="title">Metal Weight Calculator</h3>

        {/* Shape */}
        <div className="form-group">
          <label>Shape</label>
          <select
            className="form-control"
            value={shape}
            onChange={(e) => setShape(e.target.value)}
          >
            <option value="round">Round</option>
            <option value="flat">Flat</option>
          </select>
        </div>

        {/* Quantity */}
        <div className="form-group">
          <label>No. of Pieces</label>
          <input
            type="number"
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        {/* Round Inputs */}
        {shape === "round" && (
          <div className="row">
            <div className="col-md-6">
              <label>Diameter (mm)</label>
              <input
                type="number"
                className="form-control"
                value={dia}
                onChange={(e) => setDia(e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Flat Inputs */}
        {shape === "flat" && (
          <div className="row">
            <div className="col-md-6">
              <label>Thickness (mm)</label>
              <input
                type="number"
                className="form-control"
                value={thickness}
                onChange={(e) => setThickness(e.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label>Width (mm)</label>
              <input
                type="number"
                className="form-control"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Length */}
        <div className="form-group">
          <label>Length (mm)</label>
          <input
            type="number"
            className="form-control"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="btn-group">
          <button className="btn calculate-btn" onClick={calculateWeight}>
            Calculate
          </button>
          <button className="btn clear-btn" onClick={clearFields}>
            Clear
          </button>
        </div>

        {/* Result */}
        <div className="result-box">
          <p>Calculated Weight</p>
          <h4>{weight} Kg</h4>
        </div>
      </div>
    </div>
  );
};

export default MetalWeightCalculator;
