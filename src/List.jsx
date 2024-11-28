import React, { useState, useMemo } from "react";

const MultiCheck = ({ parentLabel, childOptions }) => {
    const [selectedChildren, setSelectedChildren] = useState([]);

    // Check if the parent checkbox should be selected
    const isParentSelected = useMemo(
        () => selectedChildren.length === childOptions.length,
        [selectedChildren, childOptions.length],
    );

    // Handle parent checkbox change
    const handleParentCheckboxChange = (checked) => {
        if (checked) {
            // Select all child options
            setSelectedChildren([...childOptions]);
        } else {
            // Deselect all child options
            setSelectedChildren([]);
        }
    };

    // Handle individual child checkbox change
    const handleChildCheckboxChange = (value) => {
        setSelectedChildren((prevSelectedChildren) => {
            if (prevSelectedChildren.includes(value)) {
                // Remove the value
                return prevSelectedChildren.filter((item) => item !== value);
            } else {
                // Add the value
                return [...prevSelectedChildren, value];
            }
        });
    };

    return (
        <div
            style={{
                padding: "16px",
            }}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "8px 0",
                }}>
                <input
                    type='checkbox'
                    checked={isParentSelected}
                    onChange={(e) =>
                        handleParentCheckboxChange(e.target.checked)
                    }
                    style={{ cursor: "pointer" }}
                />
                <span
                    style={{
                        marginLeft: "8px",
                    }}>
                    {parentLabel}
                </span>
            </div>

            <div style={{ marginTop: "8px", paddingLeft: "16px" }}>
                {childOptions.map((option, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "4px 0",
                        }}>
                        <input
                            type='checkbox'
                            checked={selectedChildren.includes(option)}
                            onChange={() => handleChildCheckboxChange(option)}
                            style={{
                                cursor: "pointer",
                            }}
                        />
                        <span>{option}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MultiCheck;
