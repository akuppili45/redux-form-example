import React from "react";

export const Text = ({ label, input }) => {
  console.log("inputStuff: ", input);
  return (
    <div>
      <div>{label}</div>
      <div>
        <input {...input} placeholder={label} type="text" />
      </div>
    </div>
  );
};

export default Text;
