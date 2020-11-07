import React from "react";

function All({data, handleChangeCheck}) {
    return (
        <ul  className="lists_items">
            {data.map(item => {
                return (
                    <li className="lists" key={item.id}>
                        <input onClick={() => handleChangeCheck(item.id)} type="checkbox" />
                        <span className={item.isComplete ? "line_through" : ""}>{item.title}</span>
                    </li>
                    )
                })
            }
        </ul>
    )
}

export default All;