import { useState } from "react";
import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/ui/Button";

const initaialFriends = [
  {
    id: 1,
    name: "name",
    image: "https://i.pravatar.cc/400?u=15",
    balance: 12,
  },
  {
    id: 2,
    name: "name2",
    image: "https://i.pravatar.cc/400?u=852",
    balance: -4,
  },
  {
    id: 3,
    name: "name3",
    image: "https://i.pravatar.cc/400?u=7852",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initaialFriends);

  function handleAddFriend() {}

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        <FormAddFriend />
      </div>
      <div>FormSplitFriend</div>
    </div>
  );
}

export default App;
