function Button({ children, bgColor, textColor = "white", onClick }) {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
