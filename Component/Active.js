import React from "react";

function Complete({data, handleChangeCheck}) {
    return (
        <ul  className="lists_items">
            {data.isComplete ?
                <li className="lists" key={data.id}>
                    <input onClick={() => handleChangeCheck(data.id)} type="checkbox" />
                    <span className={data.isComplete ? "line_through" : ""}>{data.title}</span>
                </li>
                : ''}
        </ul>
    )
}
export default Complete;
