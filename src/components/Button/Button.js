import React from 'react';
import Styles from "./Button.module.scss";

export default function Button(props) {

    const { name, className } = props;

  return (
    <span className={`${Styles.buttonMain} ${className}`}>
      {name}
    </span>
  )
}
