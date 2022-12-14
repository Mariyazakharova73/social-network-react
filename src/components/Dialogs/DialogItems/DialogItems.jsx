import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './../dialogs.module.css';

//console.log(props)
//{name: 'Mariya', id: 1}
//{name: 'Pavel', id: 2}
//{name: 'Dima', id: 3}
//{name: 'Pavel', id: 4}
//{name: 'Mariya', id: 5}
//{name: 'Dima', id: 6}

const DialogItem = (props) => {
  return (
    <li className={style.item}>
      <NavLink className={style.link} to={'/dialogs/' + props.id}>
        {props.name}
      </NavLink>
    </li>
  );
};

export default DialogItem;