import React from 'react'

// INTERNAL IMPORT
import Style from './Button.module.css';

const Button = ({btnName}) => {
  return (
    <div className={Style.box}>
      <button className={Style.button}>
        {btnName}
      </button>
    </div>
  )
}

export default Button