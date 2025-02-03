import { useState } from 'react';

function MyComponents() {
    const [year, setYear] = useState(new Date().getFullYear());
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [cars, setCar] = useState([]);

    function add() {
        const newCar = {year: year,
                        name: name,
                        brand: brand};
        setCar(pre => [...pre, newCar])
        setYear(new Date().getFullYear());
        setName("");
        setBrand("");
    }
    function handleYear(e) {
        setYear(e.target.value);
    }
    function handleName(e) {
        setName(e.target.value);
    }
    function handleBrand(e) {
        setBrand(e.target.value);
    }
    function remove(index) {
        setCar(cars.filter((ele,i)=> i !== index))
    }
    return (
        <>  
            <h1>List of Car</h1>
            <ul>
                {cars.map((car,index)=> <li key={index} onClick={()=>remove(index)}>{car.year} {car.name} {car.brand} </li>)}
            </ul>
            <input type="number" value={year} placeholder='Enter year' onChange={handleYear}/><br />
            <input type="text" value={name} placeholder='Enter name' onChange={handleName}/><br />
            <input type="text" value={brand} placeholder='Enter brand' onChange={handleBrand}/><br />
            <button onClick={add}>Add Food</button>
        </>
    );
}
export default MyComponents;