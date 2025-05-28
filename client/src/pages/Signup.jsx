import React from 'react'

export default function Signup() {
  return (
    <div>
      <h1>Signup</h1>
      <form>
        <label>Username</label>
        <input type="text" name="username" /><br />
        <label>Password</label>
        <input type="password" name="password" />
        <label>email</label>
        <input type="password" name="password" />
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}