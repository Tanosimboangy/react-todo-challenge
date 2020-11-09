import { useState } from 'react';
function useContext() {

    // const initialValue = () => window.localStorage.getItem("data");
    // useEffect(() => {
    //     window.localStorage.setItem('data', data);
    // }, [inputValue])

    const [inputValue, setInputValue] = useState("");
    const [data, setData] = useState([]);
    // setData(initialValue);

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
        const updatedTodos = data.map(item => {
            return item.id === id
            ? { ...item, isComplete: !item.isComplete }
            : item;
        });
        setData(updatedTodos);
    }

  return {inputValue, handleChange, handleSubmit, data, handleChangeCheck, setData };
};
export default useContext;
