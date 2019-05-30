import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import RenderGenrer from '../components/RenderGenrer';
import RenderCast from '../components/RenderCast';
import RenderTrailers from '../components/RenderTrailers';
import api from '../services/api';
import '../styles/Styles.css';
import RenderKeyWords from '../components/RenderKeyWords';



export default class Movie extends Component{
    constructor() {
        super();

        this.state = {
            movie:{},
            genres:{},
            cast:{},
            crew:{},
            trailers:{},
            keyWords:{}
        };
    }

    async componentDidMount(){
        this.loadFilm();
        this.loadCast();
        this.loadVideos();
        this.loadKeyWords();
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
        const res = await api.get(`/movie/${id}/videos?api_key=7de1111e4ea9fa0dc45893f3c81297b3&language=en-US`);
        
        let trailers = res.data.results.filter(function(trailer){
            return trailer.type == 'Trailer';
        });

        this.setState({
            trailers: trailers
        });
    }

    loadKeyWords = async () => {
        const {id} = this.props.match.params;
        const res = await api.get(`/movie/${id}/keywords?api_key=7de1111e4ea9fa0dc45893f3c81297b3&language=en-US`);
        
        this.setState({
            keyWords: res.data.keywords
        });
    }


    render(){
        const {movie} = this.state;
        const genre = this.state.genres;
        const cast = this.state.cast;
        const crew = this.state.crew;
        const trailers = this.state.trailers;
        const keyWords = this.state.keyWords;

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
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-3">
                                <div className="col-12">
                                    <p><strong>{movie.title}</strong></p>
                                    <p><strong>Status:</strong> {movie.status || null}</p>
                                    <p><strong>Running Time:</strong> {movie.runtime || null} mins</p>
                                    <p><strong>Release Date:</strong> {movie.release_date || null}</p>
                                    <p><strong>Budget:</strong> {this.convertToDolar(movie.budget || 0)}</p>
                                    <p><strong>Revenue:</strong> {this.convertToDolar(movie.revenue || 0)}</p>
                                </div>

                                <div className="col-12">
                                    {keyWords.length > 0 &&
                                        <div className="row trailerBox mt-5">
                                            <div className="col-12">
                                                <h5 className="mb-4 pt-2">Key Words</h5>
                                            </div>
                                            <RenderKeyWords keyWords={keyWords} />
                                        </div>
                                    }
                                </div>
                            </div>

                            <div className="col-8">
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
                </div>
            </div>
                
        );
    }
}
