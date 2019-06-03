import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaAngleDown } from 'react-icons/fa';
import RenderGenrer from '../components/RenderGenrer';
import RenderCast from '../components/RenderCast';
import RenderTrailers from '../components/RenderTrailers';
import api from '../services/api';
import '../styles/Styles.css';
import RenderKeyWords from '../components/RenderKeyWords';
import RenderImages from '../components/RenderImages';
import RenderCollection from '../components/RenderCollection';
import RenderSimilarMovie from '../components/RenderSimilarMovie';
import MovieList from '../components/MoviesList';



export default class Movie extends Component{
    constructor(props) {
        super(props);

        this.toggleCast = this.toggleCast.bind(this);
        this.toggleMedia = this.toggleMedia.bind(this);

        this.state = {
            activeTabCast: '1',
            activeTabMedia: '1',
            movie:{},
            genres:{},
            cast:{},
            crew:{},
            trailers:{},
            keyWords:{},
            backdrops:{},
            posters:{},
            collection:{}
        };
    }

    toggleCast(tab) {
        if (this.state.activeTabCast !== tab) {
            this.setState({
                activeTabCast: tab
            });
        }
    }

    toggleMedia(tab) {
        if (this.state.activeTabMedia !== tab) {
            this.setState({
                activeTabMedia: tab
            });
        }
    }

    async componentDidMount(){
        this.loadFilm();
        this.loadCast();
        this.loadVideos();
        this.loadKeyWords();
        this.loadImages();
    }

    componentDidUpdate() {
        this.posterPath.style.backgroundImage = 'url(http://image.tmdb.org/t/p/original' + this.state.movie.backdrop_path + ')';
        
    }

    shouldComponentUpdate(nextProps) {
        if(nextProps.location.pathname != this.props.location.pathname){
            window.location.reload();
        }
        return true;
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
            genres: res.data.genres,
        });

        if(this.state.movie.belongs_to_collection){
            this.loadCollection(this.state.movie.belongs_to_collection.id);
        }
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

    loadImages = async () => {
        const {id} = this.props.match.params;
        const res = await api.get(`/movie/${id}/images?api_key=7de1111e4ea9fa0dc45893f3c81297b3`);
        
        this.setState({
            backdrops: res.data.backdrops,
            posters: res.data.posters
        });
    }

    loadCollection = async (id) => {
        const res = await api.get(`/collection/${id}?api_key=7de1111e4ea9fa0dc45893f3c81297b3&language=en-US`);
        this.setState({
            collection: res.data
        });
    }


    render(){
        const {movie} = this.state;
        const genre = this.state.genres;
        const cast = this.state.cast;
        const crew = this.state.crew;
        const trailers = this.state.trailers;
        const keyWords = this.state.keyWords;
        const backdrops = this.state.backdrops;
        const posters = this.state.posters;
        const collection = this.state.collection;

        return(
            <div className="fluid-container">
                <div className="filmPage" ref={div => {this.posterPath = div;}}>
                    <div className="filmHeader">
                        <div className="col-12 col-sm-12 col-md-4 ml-0 ml-md-5">
                            <h1 className="filmTitle">{movie.title}</h1>
                            <h2 className="filmTagLine">{movie.tagline ? movie.tagline : null }</h2>
                        </div>

                        <div className="col-12 col-sm-12 col-md-4 ml-0 ml-md-5">
                            <p>{movie.overview}</p>
                            <p><RenderGenrer genres={movie.genres} /></p>
                            <p>
                                <span className="mr-5"><FaCalendarAlt /> {movie.release_date ? movie.release_date.substring(0,4) : null}</span>
                                <span className="ml-5"><FaClock /> {movie.runtime ? movie.runtime + " mins" : null}</span>
                            </p>
                        </div>

                        <div className="col-12">
                            <div className="d-flex justify-content-center">
                                <FaAngleDown size={30}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="filmInfo">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-3">
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
                                        <div className="row keyWordsBox mt-5">
                                            <div className="col-12">
                                                <h5 className="mb-4 pt-2">Keywords</h5>
                                            </div>
                                            <RenderKeyWords keyWords={keyWords} />
                                        </div>
                                    }
                                </div>

                                <div className="col-12">
                                    {collection &&
                                        <div className="row collectionBox mt-5">
                                            <RenderCollection collection={collection} />
                                        </div>
                                    }
                                </div>
                            </div>

                            <div className="col-12 col-sm-12 col-md-8">
                                <div className="col-12">
                                    <Nav tabs>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: this.state.activeTabCast === '1' })}
                                                onClick={() => { this.toggleCast('1'); }}
                                            >
                                                Principal Cast
                                            </NavLink>
                                        </NavItem>

                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: this.state.activeTabCast === '2' })}
                                                onClick={() => { this.toggleCast('2'); }}
                                            >
                                                Principal Crew
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                    <TabContent activeTab={this.state.activeTabCast}>
                                        <TabPane tabId="1">
                                            <Row>
                                                <Col sm="12">
                                                {cast.length > 0 &&
                                                    <div className="row castBox mt-2">
                                                        <RenderCast casts={cast} />
                                                    </div>
                                                }
                                                </Col>
                                            </Row>
                                        </TabPane>

                                        <TabPane tabId="2">
                                            <Row>
                                                <Col sm="12">
                                                {crew.length > 0 &&
                                                    <div className="row castBox mt-2">
                                                        <RenderCast casts={crew} />
                                                    </div>
                                                }
                                                </Col>
                                            </Row>
                                        </TabPane>
                                    </TabContent>
                                </div>

                                <div className="col-12">
                                    <Nav tabs>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: this.state.activeTabMedia === '1' })}
                                                onClick={() => { this.toggleMedia('1'); }}
                                            >
                                                Videos
                                            </NavLink>
                                        </NavItem>

                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: this.state.activeTabMedia === '2' })}
                                                onClick={() => { this.toggleMedia('2'); }}
                                            >
                                                Backdrops
                                            </NavLink>
                                        </NavItem>

                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: this.state.activeTabMedia === '3' })}
                                                onClick={() => { this.toggleMedia('3'); }}
                                            >
                                                Posters
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                    <TabContent activeTab={this.state.activeTabMedia}>
                                        <TabPane tabId="1">
                                            <Row>
                                                <Col sm="12">
                                                    {trailers.length > 0 &&
                                                        <div className="row trailerBox mt-2">
                                                            <RenderTrailers trailers={trailers} />
                                                        </div>
                                                    }
                                                </Col>
                                            </Row>
                                        </TabPane>

                                        <TabPane tabId="2">
                                            <Row>
                                                <Col sm="12">
                                                    {backdrops.length > 0 &&
                                                        <div className="row castBox mt-2">
                                                            <RenderImages images={backdrops} />
                                                        </div>
                                                    }
                                                </Col>
                                            </Row>
                                        </TabPane>

                                        <TabPane tabId="3">
                                            <Row>
                                                <Col sm="12">
                                                    {posters.length > 0 &&
                                                        <div className="row castBox mt-2">
                                                            <RenderImages images={posters} />
                                                        </div>
                                                    }
                                                </Col>
                                            </Row>
                                        </TabPane>
                                    </TabContent>
                                </div>

                                {movie.id &&
                                <div className="row pt-5 mt-5">
                                    <div className="col-12">
                                        <h3 className="text-center pb-4">Recommendations</h3>
                                    </div>
                                    <div className="col-12">
                                        <MovieList type="recommendation" id={movie.id} />
                                    </div>
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
