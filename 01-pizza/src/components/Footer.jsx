function Footer() {
  const openHour = 12;
  const closeHour = 22;
  const hour = new Date().getHours();
  console.log(hour);

  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We're Happy to Welcome You Between {openHour}:00 & {closeHour}:00
        </p>
      )}
    </footer>
  );
}

export default Footer;

function Order({ openHour, closeHour }) {
  function handleClick() {
    window.alert("!!!!!!!!!!!");
  }

  return (
    <div className="order">
      <p>
        We're Currently Open from {openHour}:00 to {closeHour}:00 Come Visit Us
        or Order Online
      </p>
      <button className="btn" onClick={handleClick}>
        Order
      </button>
    </div>
  );
}
