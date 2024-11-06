import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/dropdown.css';
const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);

    if (value === "Option 1") {
      navigate("/option1");
    } else if (value === "Option 2") {
      navigate("/option2");
    }else if (value === "Option 3") {
      navigate("/option3");
    }

  };

  return (
    <div>
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        style={dropdownStyle}  // Apply custom styles for navbar
      >
        <option value="" disabled>
          Login as
        </option>
        <option value="Option 1">NGO Login</option>
        <option value="Option 2">Volunteer Login</option>
        <option value="Option 3">Admin Login</option>
      </select>
    </div>
  );
};

// Styling for the dropdown inside the navbar
const dropdownStyle = {
  padding: "5px",
  fontSize: "16px",
  borderRadius: "10px",
  backgroundColor: "white",
  color: "black",
  cursor: "pointer",
};

export default Dropdown;
