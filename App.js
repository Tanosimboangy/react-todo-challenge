import React from "react";
import useContext from "./useContext";

function App() {
    const { handleChange, handleSubmit, data } = useContext();
    return (
        <div className="container">
            <h1>TO DO APP</h1>
            <form>
                <input
                    onChange={handleChange} 
                />
                <button 
                    onClick={handleSubmit}
                    type="submit"
                >Add</button>
            </form>
            <div>
                {data.map(item => {
                    return (
                        <div className="lists">
                            <input type="checkbox" />
                            <p>{item}</p>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default App;