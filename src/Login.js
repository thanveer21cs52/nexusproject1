import React from 'react'

function Login() {
  return (
    <div>
         <form action='./' class="backround">
            <div class="title">
                Log In
            </div>
            <div class="inputs">
            <input required type="email" placeholder='email'></input>
            <input required type="password" placeholder='password'></input>
            </div>
            <button type="submit">Login</button>
            <p>Don't have an account? <a href="/signup">Signup</a></p>
        </form>
    </div>
  )
}

export default Login