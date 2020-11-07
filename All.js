import React from "react";

function All({data, handleChangeCheck}) {
    return (
        <ul>
            {data.map(item => {
                return (
                    <li key={item.id} className="lists">
                        <input onClick={handleChangeCheck} type="checkbox" />
                        <span>{item.title}</span>
                    </li>
                    )
                })
            }
        </ul>
    )
}

export default All;