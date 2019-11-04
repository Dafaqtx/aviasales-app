import React from 'react'

const Content = ({tickets}) => {
    return <div className="Content">
        {tickets.length ? (
            <ul>
                {tickets.map((ticket, id) => ( 
                    <li key={id}>{ticket.carrier}</li>
                ))}
            </ul>

        ) : (
            <p>No results</p>
        )}
    </div>
}

export default Content