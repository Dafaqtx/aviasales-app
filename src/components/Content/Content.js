import React from 'react'

const Content = ({tickets}) => {
    return <div className="Content">
        <ul>
            {tickets.map((ticket, id) => ( 
                <li key={id}>{ticket.carrier}</li>
            ))}
        </ul>
    </div>
}

export default Content