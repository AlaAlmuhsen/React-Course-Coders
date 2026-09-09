import Friends from "./Friends";

function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friends friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

export default FriendsList;
