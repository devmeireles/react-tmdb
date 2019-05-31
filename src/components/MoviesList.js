import React from 'react';
import {Link} from 'react-router-dom';
import api from '../services/api';
import '../styles/Styles.css';

class MovieList extends React.Component {
    state = {
        results: [],
        info: {},
        page: 1
    }

    componentDidMount() {
        this.loadFilms();
    }

    loadFilms = async (page = 1) => {
        const type = this.props.type;
        const id = this.props.id;

        switch(type){
            case 'similar':
                var response = await api.get(`/movie/${id}/similar?api_key=7de1111e4ea9fa0dc45893f3c81297b3&language=en-US&page=${page}`);
            break;
            default:
                var response = await api.get(`/trending/movie/day?api_key=7de1111e4ea9fa0dc45893f3c81297b3&language=en-US&page=${page}`);
        }

        
        const {results,  ...info} = response.data;
        this.setState({
            results: [...this.state.results, ...results],
            info,
            page
        });
    }

    nextPage = () =>{
        const {page, info} = this.state;
        const pageNumber = page + 1;
        this.loadFilms(pageNumber);
    }

    render(){
        const {results, page, info} = this.state;

        const films = results.map((film, index) => {
            return (
                <div className="film col" key={index}>
                    <Link to={`/movie/${film.id}`}>
                        <img src={"https://image.tmdb.org/t/p/w185/" + film.poster_path} />
                    </Link>
                    <Link to={`/movie/${film.id}`}>
                        <p className="movieListTitle">{film.title}</p>
                    </Link>
                </div>
            )
        });

        return (
            <div className="row">
                <div className="row">
                    {films}
                </div>

                <div className="row">
                    <div className="col text-center">
                        <button className="btn btn-primary" disabled={page === info.pages} onClick={this.nextPage}>Load More</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieList;