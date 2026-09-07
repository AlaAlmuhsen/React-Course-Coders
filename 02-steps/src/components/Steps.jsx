import { useState } from "react";
import StepMessage from "./StepMessage";
import Button from "./Button";
import Numbers from "./Numbers";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "Hello World",
];

function Steps() {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(1);

  function handleClick() {
    setIsOpen((i) => !i);
  }

  function handleNext() {
    if (step < messages.length) {
      setStep((s) => s + 1);
    }
  }

  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  return (
    <div>
      <button className="close" onClick={handleClick}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <Numbers step={step} numOfMessage={messages.length} />

          <StepMessage step={step} message={messages[step - 1]} />

          <div className="buttons">
            <Button bgColor="#7950f2" onClick={handlePrevious}>
              <span>🌴️</span>Previous
            </Button>
            <Button bgColor="#7950f2" onClick={handleNext}>
              Next<span>🌴️</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Steps;
