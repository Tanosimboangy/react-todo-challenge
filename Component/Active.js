import React from "react";

function Complete({data, handleChangeCheck}) {
    return (
        <ul  className="lists_items">
            {data.filter(item => item.isComplete === false).map(item => {
                return (
                    <li className="lists" key={item.id}>
                        <input onChange={() => handleChangeCheck(item.id)} checked={item.isComplete} type="checkbox" />
                        <span className={item.isComplete ? "line_through" : ""}>{item.title}</span>
                    </li>
                    )
                })
            }
        </ul>
    )
}
export default Complete;
