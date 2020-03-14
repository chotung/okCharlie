import React from "react"


const Auth = (props) => {
  const { auth } = props
  return (
    <div>
      <button name="login" onClick={auth}>LOGIN</button>
      <button name="register" onClick={auth}>REGISTER</button>
    </div>
  )
}


export default Auth