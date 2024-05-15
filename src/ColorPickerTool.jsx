import React, { useState } from "react";

function ColorPickerTool() {
  const [colors, setColors] = useState();

  function colorPicker(e) {
    setColors(e.target.value);
  }

  return (
    <>
      <div className="container">
        <h3>Pick a Color</h3>
        <div className="colorPickerBg" style={{ backgroundColor: colors }}>
          <p className="text-color">Select Color: {colors}</p>
        </div>
        <label> Select Color</label>
        <input type="color" value={colors} onChange={colorPicker} />
      </div>
    </>
  );
}
export default ColorPickerTool;
