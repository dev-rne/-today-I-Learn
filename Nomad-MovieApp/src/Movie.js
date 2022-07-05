import React from "react";
import PropTypes from 'prop-types';
import './Movie.css'

function Movie({ year, title, summary, poster, genres}){
    return (
        <div className="movie">
            <img src={poster} title={title} alt={title}/>
            <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="movie_genres">{genres.map((genere, index) => <li className="generes_genere" key={index} >{genere}</li>)}
            </ul>
        <p className="movie_summary">{summary.slice(0, 250)}...</p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
}

export default Movie;