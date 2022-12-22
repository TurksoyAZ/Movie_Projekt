import { useState } from "react";
import "./Movies.css";

import { movies } from "./MoviesData";

const Movies = () => {

    const [sort, setSort] = useState(movies);
    const [input, setInput] = useState([]);

    // ausführliche Schreibweise von sort() (verbose spelling of sort())
    // // sort A-Z
    // const sortForAz = () => {
    //     setSort([...sort.sort((a, b) => (a.title > b.title ? 1 : -1))]);
    // };
    // // sort Z-A
    // const sortForZa = () => {
    //     setSort([...sort.sort((a, b) => (a.title < b.title ? 1 : -1))]);
    // };
    // // sort Rate
    // const sortForRate = () => {
    //     setSort([...sort.sort((a, b) => b.rate - a.rate)]);
    // };
    // // sort Data Ascending
    // const sortForDataAscending = () => {
    //     setSort([...sort.sort((a, b) => a.year - b.year)]);
    // };
    // // sort Data Descending
    // const sortForDataDescending = () => {
    //     setSort([...sort.sort((a, b) => b.year - a.year)]);
    // };
    //
    //


    // for Search filter()
    function search(p) {
        return p.filter((e) => e.title.toLowerCase().includes(input));
    }
    function change(p) {
        setInput(p.target.value);
    }

    return (
        <section className="container">
            <article className="article1">
                <h1>MOVIES</h1>
            </article>

            <article className="articleButton">
                <button onClick={() => setSort([...sort.sort((a, b) => a.year - b.year)])}>Sort by Date Ascending</button>
                <button onClick={() => setSort([...sort.sort((a, b) => b.year - a.year)])}>Sort by Date Descending</button>
                <button onClick={() => setSort([...sort.sort((a, b) => b.rate - a.rate)])}>Best Rate</button>
                <button onClick={() => setSort([...sort.sort((a, b) => (a.title > b.title ? 1 : -1))])}>A-Z</button>
                <button onClick={() => setSort([...sort.sort((a, b) => (a.title < b.title ? 1 : -1))])}>Z-A</button>
            </article>

            <input
                type="text"
                placeholder="Search"
                value={input}
                onChange={change}
            />

            <article className="article2">
                {search(sort).map((e, i) => {
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
