function Pizza({ pizza }) {
  const { name, ingredients, price, photoName, soldOut } = pizza;

  return (
    <li className={`pizza${soldOut ? " sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : `${price.toFixed(2)}$`}</span>
      </div>
    </li>
  );
}

export default Pizza;

// {name: 'Pizza Spinaci', ingredients: 'Tomato, mozarella, spinach, and ricotta cheese', price: 12, photoName: 'pizzas/spinaci.jpg', soldOut: false}
