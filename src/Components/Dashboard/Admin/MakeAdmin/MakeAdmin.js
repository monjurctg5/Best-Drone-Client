import React, { useState } from 'react';
import swal from 'sweetalert';
const MakeAdmin = () => {
    const [adminEmail, setAdminEmail] = useState('')
    const hanldeEmail = (e) => {
        e.preventDefault()
        setAdminEmail(e.target.value)
        e.target.value=""

    }
    const handlSubmit = (e) => {
        const user = { adminEmail }
        fetch(`https://hidden-inlet-96106.herokuapp.com/users/admin`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                swal({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success",
                });
            }
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