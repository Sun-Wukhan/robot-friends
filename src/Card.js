import React, { useState } from 'react';

const Card = (props) => {
    const [seenButton, setSeenButton] = useState(true);


    const { id, name, email, username } = props;

    const changeText = () => {
        setSeenButton((seenButton) => !seenButton)
    }


    return (
        <div className='bg-blue tc dib br3 pa3 ma2 grow bw2 shadow-5'>
            <h1>{username}</h1>
            <img src={`https://robohash.org/${id}?200x200`} alt="This is where robots do stuff" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <button onClick={changeText}>{seenButton ? "I am reference" : "I am not reference"}</button>
            </div>
        </div>
    )
}

export default Card