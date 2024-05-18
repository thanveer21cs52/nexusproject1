import React from 'react'

function Signup() {
  return (
    <div>
        <form action='./' class="backround">
            <div class="title">
                Register
            </div>
            <div class="inputs">
            <input required type="text" placeholder='username'></input>
            <input required type="email" placeholder='email'></input>
            <input required type="password" placeholder='password'></input>
            </div>
            <button type="submit">Sign up</button>
            <p>Already have an account? <a href="/login">Login</a></p>
        </form>
    </div>
  )
}

export default Signup