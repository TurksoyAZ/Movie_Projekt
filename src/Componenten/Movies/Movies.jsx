
import { useState } from 'react'
import './Movies.css'

import { data } from './MoviesData'


const Movies = () => {

    const [state, setState] = useState(data)

    // sort A-Z
    const sortForAz = () => {
        setState((parametr) => {
            const items = [...parametr];
            items.sort((a, b) => a.title > b.title ? 1 : -1);
            return items
        })
    }

    // sort Z-A
    const sortForZa = () => {
        setState((parametr) => {
            const items = [...parametr];
            items.sort((a, b) => a.title < b.title ? 1 : -1);
            return items
        })
    }

    // sort Rate
    const sortForRate = () => {
        setState((parametr) => {
            const items = [...parametr];
            items.sort((a, b) => b.rate - a.rate);
            return items
        })
    }

    // sort Data Ascending
    const sortForDataAscending = () => {
        setState((parametr) => {
            const items = [...parametr];
            items.sort((a, b) => a.year - b.year);
            return items
        })
    }

    // sort Data Descending
    const sortForDataDescending = () => {
        setState((parametr) => {
            const items = [...parametr];
            items.sort((a, b) => b.year - a.year);
            return items
        })
    }


    return (
        <section className='container'>

            <article className='article1'>
                <h1>MOVIES</h1>
            </article>

            <article className='articleButton'>
                <button onClick={sortForDataAscending} >Sort by Date Ascending</button>
                <button onClick={sortForDataDescending}>Sort by Date Descending</button>
                <button onClick={sortForRate}>Best Rate</button>
                <button onClick={sortForAz}>A-Z</button>
                <button onClick={sortForZa}>Z-A</button>
            </article>

            <article className='article2'>

                {state.map((e, i) => {
                    return (
                        <div className='boxs' key={i}>
                            <ul className='ul1'>
                                <li>{e.title}</li>
                                <li>{e.year}</li>
                                <li>{e.director}</li>
                                <li>{e.duration}</li>
                                <li>{e.title}</li>
                                <li>{e.rate}</li>

                                <ul className='ul2'>{e.genre.map((e, i) => (
                                    <li key={i}>{e}</li>
                                ))}</ul>

                            </ul>
                        </div>
                    )
                })}


            </article>
        </section>
    )
}

export default Movies;