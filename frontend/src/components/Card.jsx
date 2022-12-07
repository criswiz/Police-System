import React from 'react'

function Card({ person }) {
    return(
        <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 ">
            <img className="br-100 h3 w3 dib" alt={person.name} src={process.env.PUBLIC_URL + person.imgPath} />
            <div>
            <h2> {person.name}</h2>
            <p><strong>EMAIL:</strong> {person.email}</p>
            <p><strong>ADDRESS:</strong> {person.address}</p>
            <p><strong>CRIME:</strong> {person.crime}</p>
            <p><strong>GH CARD:</strong>{person.ghcard}</p>
            </div>
        </div>
    );
}

export default Card