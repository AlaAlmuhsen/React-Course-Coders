function Numbers({ step, numOfMessage }) {
  return (
    <div className="numbers">
      {Array.from({ length: numOfMessage }, (_, i) => (
        <div className={step >= i + 1 ? "active" : ""}>{i + 1}</div>
      ))}
    </div>
  );
}

export default Numbers;
