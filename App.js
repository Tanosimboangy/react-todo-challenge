import React from "react";
import useContext from "./useContext";
import All from "./All";

function App() {
    const { handleChange, handleSubmit, data, handleChangeCheck } = useContext();
    return (
        <div className="container">
            <h1>TO DO APP</h1>

            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange} 
                />
                <button
                    type="submit"
                >Add</button>
            </form>
            <All handleChangeCheck={handleChangeCheck} data={data} />
        </div>
    )
}
export default App;