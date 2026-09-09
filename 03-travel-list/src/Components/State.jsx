function State({ items }) {
  const numOfItems = items.length;

  if (numOfItems == 0) {
    return (
      <p className="stats">Start Adding some items to your packing list</p>
    );
  }

  const numOfPacked = items.filter((item) => item.packed).length;
  const percentage = ((numOfPacked / numOfItems) * 100).toFixed(2);
  console.log(percentage);
  return (
    <footer className="stats">
      {numOfItems == numOfPacked ? (
        <em>You Packed Everything ready to go</em>
      ) : (
        <em>
          💼️ You have {numOfItems} items on your list, and you already packed
          {numOfPacked}({percentage}%)
        </em>
      )}
    </footer>
  );
}

export default State;
