import Pizza from "./Pizza";

function Menu({ pizza }) {
  const numPizzas = pizza.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            aperiam magnam impedit reprehenderit quasi facere, quae
          </p>
          <ul className="pizzas">
            {pizza.map((pizza, index) => (
              <Pizza pizza={pizza} key={index} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're Still Working on Our Menu Please Come back later</p>
      )}
    </main>
  );
}

export default Menu;
