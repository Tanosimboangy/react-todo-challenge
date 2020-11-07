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
        if (inputValue === "") return;
        setData(prev => [...prev,
        {
            id: Date.now(),
            title: inputValue,
            isComplete: false,
        }
        ]);
        setInputValue('');
        e.target.reset();
    }

    function handleChangeCheck(id) {
        const crossWord = data.find(item => item.id === id);
        console.log(crossWord);
    }

  return {inputValue, handleChange, handleSubmit, data, handleChangeCheck };
};
export default useContext;
