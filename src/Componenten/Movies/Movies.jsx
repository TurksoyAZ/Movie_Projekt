import { useEffect, useState } from "react";
import "./Movies.css";

import { movies } from "./MoviesData";

const Movies = () => {
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");
    const [sort, setSort] = useState(movies);


    useEffect(() => {
        setData(sort);
    }, [sort]);

    // sort A-Z
    const sortForAz = () => {
        setSort([...movies.sort((a, b) => (a.title > b.title ? 1 : -1))]);
    };
    // sort Z-A
    const sortForZa = () => {
        setSort([...movies.sort((a, b) => (a.title < b.title ? 1 : -1))]);
    };
    // sort Rate
    const sortForRate = () => {
        setSort([...movies.sort((a, b) => b.rate - a.rate)]);
    };
    // sort Data Ascending
    const sortForDataAscending = () => {
        setSort([...movies.sort((a, b) => a.year - b.year)]);
    };
    // sort Data Descending
    const sortForDataDescending = () => {
        setSort([...movies.sort((a, b) => b.year - a.year)]);
    };

    // for Search filter()
    function search(p) {
        return p.filter((e) => e.title.toLowerCase().includes(input));
    }

    return (
        <section className="container">
            <article className="article1">
                <h1>MOVIES</h1>
            </article>

            <article className="articleButton">
                <button onClick={sortForDataAscending}>Sort by Date Ascending</button>
                <button onClick={sortForDataDescending}>Sort by Date Descending</button>
                <button onClick={sortForRate}>Best Rate</button>
                <button onClick={sortForAz}>A-Z</button>
                <button onClick={sortForZa}>Z-A</button>
            </article>

            <input
                type="text"
                placeholder="Search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <article className="article2">
                {search(data).map((e, i) => {
                    return (
                        <div className="boxs" key={i}>
                            <ul className="ul1">
                                <li>{e.title}</li>
                                <li>{e.year}</li>
                                <li>{e.director}</li>
                                <li>{e.duration}</li>
                                <li>{e.title}</li>
                                <li>{e.rate}</li>

                                <ul className="ul2">
                                    {e.genre.map((e, i) => (
                                        <li key={i}>{e}</li>
                                    ))}
                                </ul>
                            </ul>
                        </div>
                    );
                })}
            </article>
        </section>
    );
};

export default Movies;
