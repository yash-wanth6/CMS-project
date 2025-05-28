import React from 'react'

export default function Signup() {
    return (
        <div>
            <h1>Signup</h1>
            <form>
                <label>Username</label>
                <input type="text" name="username" /><br />
                <label>email</label>
                <input type="email" name="email" /><br />
                <label>Password</label>
                <input type="password" name="password" /><br />
                <label>Gender</label>
                <input type="radio"  name="fav_language" value="HTML" />
                <label for="html">male</label>
                <input type="radio"  name="fav_language" value="CSS" />
                <label for="css">female</label><br />
                <button type="submit">Signup</button>  
            </form>
        </div>
    );
}