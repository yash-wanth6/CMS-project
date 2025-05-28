import React from 'react'

export default function Signin() {
    return (
        <div>
            <form>
                <label>Username</label>
                <input type = "text" name = "username"/> <br/>
                <label>Password</label>
                <input type = "password" name = "password"/> <br/>
                <button type = "submit" > Signin </button>
            </form>
        </div>
    )
}