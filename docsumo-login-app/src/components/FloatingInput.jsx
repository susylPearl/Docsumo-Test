import React, { useState, useEffect, useRef } from "react";
import "./FloatingInput.css";

const FloatingInput = ({ label, inputType, handleInputChange }) => {
  const floatContainer = useRef();
  const floatField = useRef();

  const [focused, setFocused] = useState(false);
  const [hasInputValue, setInputValue] = useState("");

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const onChange = (event) => {
    if (event && event.target) {
        setInputValue(event.target.value);
    }
    handleInputChange(event);
  };

  useEffect(() => {
    hasInputValue || focused
      ? floatContainer.current.classList.add("active")
      : floatContainer.current.classList.remove("active");
  });

  return (
    <>
      <div className="float-container" ref={floatContainer}>
        <label>{label}</label>
        <input
          id="floatField"
          type={inputType}
          ref={floatField}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
        ></input>
      </div>
    </>
  );
};

export default FloatingInput;
