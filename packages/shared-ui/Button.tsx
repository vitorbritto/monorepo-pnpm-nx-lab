import React from 'react'

const Button = ({ children }) => {
  return <button onClick={() => console.log('Clicked!')}>{children}</button>;
}

export default Button;
