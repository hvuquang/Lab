import React, { useState } from 'react'

function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({id:1, name: "Huy"});
        }, 1000);
    })
}

export default function App() {
    const [id, setID] = useState("loading....");
    const [name, setName] = useState("loading....");
  
    React.useEffect(() => {
        fetchUser().then((user) => {
            setID(user.id);
            setName(user.name);
        });
    });
  
    return (
    <div>
        <p>ID: {id}</p>
        <p>Name: {name}</p>
    </div>
  )
}
