import "./App";
import { useState } from "react";

const STEPPER_CONFIG = [
  {
    name: "User Info",
    Component: () => <p>Enter user info</p>,
  },
  {
    name: "Shipping Info",
    Component: () => <p>Enter your Shipping info</p>,
  },
  {
    name: "Payment Info",
    Component: () => <p>Enter your payment info</p>,
  },
  {
    name: "Delivered",
    Component: () => <p>Your order is Delivered</p>,
  },
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  function handleNextClick() {
    setCurrentStep((prevStep) => {
      if (prevStep === STEPPER_CONFIG.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  }

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (STEPPER_CONFIG.length - 1)) * 100;
  };

  console.log("currentStep", currentStep);

  const ActiveComponent = STEPPER_CONFIG[currentStep - 1]?.Component;
  return (
    <div className="App">
      <div className="stepper-wrapper">
        {STEPPER_CONFIG.map((each, index) => (
          <div key={each.name} className="each-stepper">
            <div
              className={`each-wrapper ${
                currentStep > index + 1 || isComplete ? "complete" : ""
              } ${currentStep === index + 1 ? "active" : ""} `}
            >
              <span>
                {currentStep > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </span>
            </div>

            <span>{each.name}</span>
          </div>
        ))}
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${calculateProgressBarWidth()}%` }}
          ></div>
        </div>
      </div>

      <div className="components-wrapper">
        <ActiveComponent />
        {!isComplete && (
          <button className="btn" onClick={handleNextClick}>
            {currentStep === STEPPER_CONFIG.length ? "Finish" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
}
