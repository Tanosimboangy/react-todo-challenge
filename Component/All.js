import React from "react";

function All({data, handleChangeCheck}) {
    return (
        <ul  className="lists_items">
             {data.map(item => {
                return (
                    <li className="lists" key={item.id}>
                        <input onChange={() => handleChangeCheck(item.id)} type="checkbox" checked ={item.isComplete} />
                        <span className={item.isComplete ? "line_through" : ""}>{item.title}</span>
                    </li>
                    )
                })
            }
        </ul>
    )
}

export default All;