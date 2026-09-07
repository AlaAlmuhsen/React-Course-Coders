function StepMessage({ step, message }) {
  return (
    <div className="message">
      <h3>Step: {step}</h3>
      <p>{message}</p>
    </div>
  );
}

export default StepMessage;
