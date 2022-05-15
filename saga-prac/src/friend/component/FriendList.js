function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friends) => (
        <li key={friends.id}>{friends.name}</li>
      ))}
    </ul>
  );
}

export default FriendList;
