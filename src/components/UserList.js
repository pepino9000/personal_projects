import React from "react";
import "./style/User.css";

function UserList(props) {
  return props.user.map((user) => {
    return (
      <li key={user.email} className="user">
        <img
          src={`${user.image}?${Date.now()}`}
          className="user__img"
          alt="avatar_usuario"
        />
        <div className="user__info">
          <span>
            <b>{user.name}</b>
          </span>
          <br />
          <span className="mail_logo" />
          <span className="mail__text">{user.email}</span>
          <br />
          <span className="phone_logo" />
          <span className="phone__text">{user.phone}</span>
          <br />
        </div>
      </li>
    );
  });
}
export default UserList;
