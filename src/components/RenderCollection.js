import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class RenderCollection extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const collection = this.props.collection;
        const parts = collection.parts;

        return(
            <div className="col-12">
                <div className="row">
                    <div className="col-12">
                        <h5 className="mb-4 pt-2">{collection.name}</h5>
                        <p>{collection.overview}</p>
                    </div>

                    <div className="col-12">
                        {parts ?
                            parts.map((film, index) => (
                                <div className="col-12 pt-3" key={index}>
                                    <Link to={`/movie/${film.id}`}>
                                        <img src={"https://image.tmdb.org/t/p/w185/" + film.poster_path} className="rounded mx-auto d-block"/>
                                        <p className="movieListTitle" style={{color:"#000"}}>{film.title}</p>
                                    </Link>
                                </div>
                            )) 
                            : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default RenderCollection;