import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class RenderCast extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: 6
        }

        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        this.setState((prev) => {
            return {visible: prev.visible + 6};
        });
    }
    

    render() {
        const casts = this.props.casts;
        return(
            <div className="row">
                {casts.slice(0, this.state.visible).map((person, index) => (
                    <div className="col-2" key={index}>
                        <Link to={`/people/${person.id}`} className="linkDefault">
                            <img 
                                className="rounded mx-auto d-block"
                                src={person.profile_path
                                    ? `https://image.tmdb.org/t/p/w185/${person.profile_path}`
                                    : `http://www.simpleimageresizer.com/_uploads/photos/56ebef2e/person_8x10_1_80x120.png`}
                                style={{maxWidth:80}}
                            />
                            <p className="text-center">
                                <span className="castName">{person.name}</span> <br />
                                <span className="castPosition">{person.character ? person.character : person.department}</span>
                            </p>
                        </Link>
                    </div>
                ))}
                
                {this.state.visible < casts.length &&
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
        

    }
}



export default RenderCast;