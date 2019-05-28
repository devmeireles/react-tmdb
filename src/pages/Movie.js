import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import api from '../services/api';
import '../styles/Styles.css';
import RenderGenrer from '../components/RenderGenrer';
import RenderCast from '../components/RenderCast';



export default class Movie extends Component{
    constructor() {
        super();

        this.state = {
            movie:{},
            genres:{},
            cast:{},
            crew:{}
        };
    }

    async componentDidMount(){
        this.loadFilm();
        this.loadCast();
    }

    componentDidUpdate() {
        this.posterPath.style.backgroundImage = 'url(http://image.tmdb.org/t/p/original' + this.state.movie.backdrop_path + ')';
    }

    convertToDolar = value => {
        return (
            `$${value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}` || null
        );
    };

    loadFilm = async () => {
        const {id} = this.props.match.params;

        let res = await api.get(`/movie/${id}?api_key=7de1111e4ea9fa0dc45893f3c81297b3&language=en-US`);
        let {data} = await res.data;

        this.setState({
            movie: res.data,
            genres: res.data.genres
        });
    }

    loadCast = async () => {
        const {id} = this.props.match.params;

        let res = await api.get(`/movie/${id}/credits?api_key=7de1111e4ea9fa0dc45893f3c81297b3&language=en-US`);
        let {data} = await res.data;

        this.setState({
            cast: res.data.cast,
            crew: res.data.crew
        });

        console.log(res.data);
    }


    render(){
        const {movie} = this.state;
        const genre = this.state.genres;
        const cast = this.state.cast;
        const crew = this.state.crew;

        return(
            <div className="fluid-container filmPage" ref={div => {this.posterPath = div;}}>
                {this.state.movie.length === 0 ? (
                    <div>Loading...</div>
                ) : (
                    <div className="container mt-5 pt-5">
                        <div className="col-12">
                            <div className="row filmInfo">
                                <div className="col-12  pl-0">
                                    <div className="col-4">
                                        <img src={"https://image.tmdb.org/t/p/w342/" + movie.poster_path} />
                                    </div>

                                    <div className="col-8 pt-3">
                                        <div className="col-12">
                                            <h1 className="filmTitle">{movie.title}</h1>
                                            <h2 className="filmTagLine">{movie.tagline}</h2>
                                            <p className="filmOverview">{movie.overview}</p>
                                        </div>

                                        <div className="col-12">
                                            <p><strong>Running Time:</strong> {movie.runtime} mins</p>
                                            <p><strong>Release Date:</strong> {movie.release_date}</p>
                                            <p><strong>Budget:</strong> {this.convertToDolar(movie.budget || 0)}</p>
                                            <p><strong>Revenue:</strong> {this.convertToDolar(movie.revenue || 0)}</p>
                                        </div>

                                        <div className="col-12">
                                            {genre.length > 0 &&
                                                <p><strong>Revenue:</strong> <RenderGenrer genres={genre} /></p>
                                            }
                                        </div>

                                        <div className="col-12">
                                            {cast.length > 0 &&
                                                <RenderCast casts={cast} />
                                            }
                                        </div>

                                        <div className="col-12">
                                            {crew.length > 0 &&
                                                <RenderCast casts={crew} />
                                            }
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
