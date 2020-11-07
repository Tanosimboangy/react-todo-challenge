import React from "react";

function All({data, handleChangeCheck}) {
    return (
        <div>
            {data.map(item => {
                return (
                    <div key={item.id} className="lists">
                        <input onClick={handleChangeCheck} type="checkbox" />
                        <p>{item.title}</p>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default All;