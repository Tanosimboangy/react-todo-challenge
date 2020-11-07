import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
// import React from "react";
import useContext from "./Component/useContext";
import All from "./Component/All";
import Active from "./Component/Active";
import Complete from "./Component/Complete";

function App() {
    const { handleChange, handleSubmit, data, handleChangeCheck } = useContext();
    return (
        <div className="container">
            <h1>TO DO APP</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} />
                <button type="submit" >Add</button>
            </form>
            <nav>
                <ul className="lists_items">
                    <li><Link to="/">All</Link></li>
                    <li><Link to="/active">Active</Link></li>
                    <li><Link to="/complete">Completed</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route path="/" key={data.id}>
                    <All handleChangeCheck={handleChangeCheck} data={data} />
                </Route>
                <Route path="/active" key={data.id}>
                    <Active handleChangeCheck={handleChangeCheck} data={data} />
                </Route>
                <Route path="/complete" key={data.id}>
                    <Complete handleChangeCheck={handleChangeCheck} data={data} />
                </Route>
            </Switch>
        </div>
    )
}
export default App;