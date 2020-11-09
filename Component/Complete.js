import React from "react";

function Complete({data, handleChangeCheck, setData}) {

    function handleDelete(id)  {
        const dataToDelete = data.filter(item => item.id !== id);
        setData(dataToDelete);
        console.log(data);
    }
    function handleChangeAll()  {
        const dataToDeleteAll = data.filter(item => item.isComplete === false);
        setData(dataToDeleteAll);
    }

    return (
        <ul className="lists_items">
           {data.filter(item => item.isComplete === true).map(item => {
                return (
                    <li className="lists" key={item.id}>
                        <input onChange={() => handleChangeCheck(item.id)} type="checkbox" checked ={item.isComplete} />
                        <span className={item.isComplete ? "line_through" : ""}>{item.title}</span>
                        <button id={item.id} onClick={() => handleDelete(item.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="blue" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                        </button>
                    </li>
                    )
                })
            }
            <button className="deleteAllButt" onClick={handleChangeAll}>Delete</button>
        </ul>
    )
}
export default Complete;

