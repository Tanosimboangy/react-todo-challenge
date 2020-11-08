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
                        <button id={item.id} onClick={() => handleDelete(item.id)}>delete</button>
                    </li>
                    )
                })
            }
            <button onClick={handleChangeAll}>Delete</button>
        </ul>
    )
}
export default Complete;

