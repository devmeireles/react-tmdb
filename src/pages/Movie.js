import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import RenderGenrer from '../components/RenderGenrer';
import RenderCast from '../components/RenderCast';
import RenderTrailers from '../components/RenderTrailers';
import api from '../services/api';
import '../styles/Styles.css';



export default class Movie extends Component{
    constructor() {
        super();

        this.state = {
            movie:{},
            genres:{},
            cast:{},
            crew:{},
            trailers:{}
        };
    }

    async componentDidMount(){
        this.loadFilm();
        this.loadCast();
        this.loadVideos();
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

        this.setState({
            movie: res.data,
            genres: res.data.genres
        });
    }

    loadCast = async () => {
        const {id} = this.props.match.params;

        let res = await api.get(`/movie/${id}/credits?api_key=7de1111e4ea9fa0dc45893f3c81297b3&language=en-US`);

        this.setState({
            cast: res.data.cast,
            crew: res.data.crew
        });
    }

    loadVideos = async () => {
        const {id} = this.props.match.params;
        const response = await api.get(`/movie/${id}/videos?api_key=7de1111e4ea9fa0dc45893f3c81297b3&language=en-US`);
        
        let trailers = response.data.results.filter(function(trailer){
            return trailer.type == 'Trailer';
        });

        this.setState({
            trailers: trailers
        });
    }


    render(){
        const {movie} = this.state;
        const genre = this.state.genres;
        const cast = this.state.cast;
        const crew = this.state.crew;
        const trailers = this.state.trailers;

        return(
            <div className="fluid-container">
                <div className="filmPage" ref={div => {this.posterPath = div;}}>
                    <div className="filmHeader">
                        <div className="col-4 ml-5">
                            <h1 className="filmTitle">{movie.title}</h1>
                            <h2 className="filmTagLine">{movie.tagline ? movie.tagline : null }</h2>
                            
                        </div>

                        <div className="col-5 ml-5">
                            <p>{movie.overview}</p>
                            <p><RenderGenrer genres={movie.genres} /></p>
                            <p>
                                <span className="mr-5"><FaCalendarAlt /> {movie.release_date ? movie.release_date.substring(0,4) : null}</span>
                                <span className="ml-5"><FaClock /> {movie.runtime ? movie.runtime + " mins" : null}</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="filmInfo">
                    <div className="container">
                        {cast.length > 0 &&
                            <div className="row castBox mt-2">
                                <div className="col-12">
                                    <h3 className="text-center mb-4">Principal Cast</h3>
                                </div>
                                <RenderCast casts={cast} />
                            </div>
                        }

                        {crew.length > 0 &&
                            <div className="row castBox mt-5">
                                <div className="col-12">
                                    <h3 className="text-center mb-4 pt-2">Principal Crew</h3>
                                </div>
                                <RenderCast casts={crew} />
                            </div>
                        }

                        {trailers.length > 0 &&
                            <div className="row trailerBox mt-5">
                                <div className="col-12">
                                    <h3 className="text-center mb-4 pt-2">Trailers</h3>
                                </div>
                                <RenderTrailers trailers={trailers} />
                            </div>
                        }
                    </div>
                </div>
            </div>
                
        );
    }
}
