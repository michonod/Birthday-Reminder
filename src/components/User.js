import React, { useState } from "react";
import classes from "./User.module.css";
import Card from "./Card";
import Button from "./Button";

const User = () => {
  const usersData = [
    {
      user: "Mihail Davidevski",
      years: 26,
      img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
    },
    {
      user: "Damjan Stojkovski",
      years: 33,
      img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    },
    {
      user: "Hristijan Garbeski",
      years: 22,
      img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    },
    {
      user: "Marina Stanojovska",
      years: 17,
      img: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      user: "Ana Stojanova",
      years: 20,
      img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    },
  ];

  const [data, setData] = useState(usersData);
  const [button, setButton] = useState(false);

  const buttonDataHandler = () => {
    setData([]);
    setButton(true);
  };

  const buttonRefreshHandler = () => {
    setData(usersData);
    setButton(false);
  };
  return (
    <Card>
      <h2>{data.length} birthdays today</h2>
      {data.map((user) => {
        return (
          <div className={classes.container}>
            <img className={classes.img} src={user.img} />
            <div className={classes.info}>
              <h1 className={classes.name}>{user.user}</h1>
              <span className={classes.years}>{user.years} years old</span>
            </div>
          </div>
        );
      })}
      {!button && (
        <Button onClick={buttonDataHandler}>Clear All Birthdays</Button>
      )}
      {button && <Button onClick={buttonRefreshHandler}>Refresh</Button>}
    </Card>
  );
};

export default User;
