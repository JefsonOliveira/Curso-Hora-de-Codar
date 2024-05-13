import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "Pedro", "Josias"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Matheus", age: 31 },
    { id: 2, name: "Pedro", age: 20 },
    { id: 3, name: "João", age: 19 },
  ]);

  const deleteRandow = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) =>
    prevUsers.filter((user) => randomNumber !== user.id)
);
  };

  return (
    <div>
      {/* 4 - Render sem key */}
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {/* 5 - Render com key */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} anos{" "}
          </li>
        ))}
      </ul>
      {/* 6 - previous state */}
      <button onClick={deleteRandow}>Delete random user</button>
    </div>
  );
};

export default ListRender;
