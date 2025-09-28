import React, { useState } from "react";

const Qr2 = () => {
  const [user, setUser] = useState({
    name: "giri",
    age: "23",
  });

  function changename(e) {
    setUser((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  }

  function changeage(e) {
    setUser((prevState) => ({
      ...prevState,
      age: e.target.value,
    }));
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter the name"
          value={user.name}
          onChange={changename}
        />
        <input
          type="text"
          placeholder="Enter the age"
          value={user.age}
          onChange={changeage}
        />
      </form>
    </div>
  );
};

export default Qr2;
