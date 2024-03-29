import { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = (props) => {
    const [input, setInput] = useState("pikachu");

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    const [pokemon, setPokemon] = useState();
    const [datas, setDatas] = useState([]);

    const fetchData = () => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon/" + input)
            .then((response) => {
                console.log(response.data);
                props.onChange(response.data);
                setPokemon(response.data.results);
                console.log(pokemon);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    };

    useEffect(() => {
        fetchData();
    }, [input]);

    return (
        <div className="search-box">
            <input
                type="text"
                className="search-input"
                placeholder="Cerca il Pokemon..."
                value={input}
                // onChange={(e) => setInput(e.target.value)}
                onChange={(e) => handleChange(e.target.value)}
            />
            <button className="search-button">VAI</button>
        </div>
    );
};
export default SearchBar;
