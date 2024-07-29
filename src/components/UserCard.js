import { useState } from "react";
const UserCard = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(2);
  return (
    <div className="user-card">
      <h1>Count={count}</h1>
      <h1>Count2={count2}</h1>
      <h2>{name}</h2>
      <h3>Location: Saharanpur</h3>
      <h4>Contact: 9528832990</h4>
    </div>
  );
};
export default UserCard;
