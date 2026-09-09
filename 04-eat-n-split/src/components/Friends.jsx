import Button from "./ui/Button";

function Friends({ friend }) {
  const { id, name, image, balance } = friend;
  return (
    <li>
      <img src={image} />
      <h3>{name}</h3>

      {balance > 0 && (
        <p className="green">
          {name} Oews you {Math.abs(balance)}
        </p>
      )}
      {balance < 0 && (
        <p className="red">
          You Owe {name} {Math.abs(balance)}
        </p>
      )}
      {balance == 0 && <p>You and {name} are even</p>}

      <Button>Select</Button>
    </li>
  );
}

export default Friends;
