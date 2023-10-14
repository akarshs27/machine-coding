import { useRef, useState, useEffect } from "react";
import "./App.css";

const Multiselect = ({ value, options, onChange }) => {
  const [showOptions, setShowOptions] = useState(false);
  const multiSelectRef = useRef(null);

  function getOptionName(item) {
    return options.find((each) => each.name === item).value;
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        multiSelectRef.current &&
        !multiSelectRef.current.contains(event.target)
      ) {
        console.log(
          "multiSelectRef",
          multiSelectRef.current.contains(event.target)
        );
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClearAll() {
    onChange([]);
  }

  function onValuesChange(item) {
    if (value.includes(item)) {
      onChange(value.filter((each) => each !== item));
    } else {
      onChange([...value, item]);
    }
  }

  return (
    <div
      ref={multiSelectRef}
      tabIndex={0}
      className="multi-select-wrapper"
      onClick={() => {
        setShowOptions(!showOptions);
      }}
    >
      <div className="selected-wrapper">
        {
          <div className="selected-values">
            {value.length > 0
              ? value.map((eachSelectedOption) => (
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      onValuesChange(eachSelectedOption);
                    }}
                  >
                    {getOptionName(eachSelectedOption)} &times;
                  </button>
                ))
              : "Select"}
          </div>
        }
      </div>
      <span
        className="cross-icon"
        onClick={(event) => {
          handleClearAll();
        }}
      >
        &times;
      </span>
      <ul className={`options-wrapper ${showOptions && "show"}`}>
        {options.map((each) => (
          <li
            className="each-option-wrapper"
            key={each.name}
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <input
              type="checkbox"
              checked={value.includes(each.name)}
              id={each.name}
              onChange={(event) => {
                event.stopPropagation();
                onValuesChange(each.name);
              }}
            />
            <label>{each.value}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Multiselect;
