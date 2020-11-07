import { format } from 'path';
import { useState } from 'react';
function useContext() {

    const [inputValue, setInputValue] = useState("");
    const [data, setData] = useState([]);

    function handleChange(e) {
        e.preventDefault();
        setInputValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setData(prev => [...prev, inputValue] );
    }

  return {inputValue, handleChange, handleSubmit, data };
};
export default useContext;
