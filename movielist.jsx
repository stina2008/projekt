//src/movielist.jsx
import React, {useState} from "react";
import './style.css'; //import your CSS file

const movielist = () => {
    const [movieinput, setmovieinput] = useState('');
    const [movies, setmovies] = useState ([]);

    const handleaddmovie = () => {
        const trimmedTitle = movieinput.trim();
        if (trimmedTitle) {
            setmovies([...movies, trimmedTitle]);
            setmoviesinput(''); //clear the input
        } else {
            alert('Please enter a movie title');
        }
    };

    return (
        <div className="Container">
            <h1>Movie List</h1>
            <input
            type="text"
            value={movieinput}
            onChange={(e) => setmovieinput(e.target.value)}
            placeholder="Enter movie title"
            />
            <button onClick={handleaddmovie}>Add Movie</button>
            <ul>
                {movie.map((movie) => (
                    <li key={index}>{movie}</li>
                ))}
            </ul>
        </div>
    );
};

export default movielist;