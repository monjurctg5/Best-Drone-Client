import React, { useState } from 'react';

const MakeAdmin = () => {
    const [adminEmail, setAdminEmail] = useState('')
    const hanldeEmail = (e) => {
        e.preventDefault()
        setAdminEmail(e.target.value)

    }
    const handlSubmit = (e) => {
        const user = { adminEmail }
        fetch(`http://localhost:5000/users/admin`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)

        })
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handlSubmit}>
                <input type="email" onBlur={hanldeEmail} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default MakeAdmin;