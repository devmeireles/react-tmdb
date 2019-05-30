import React, { Component } from 'react';

class RenderTrailers extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const trailers = this.props.trailers;
        return(
            <div className="col-12">
                <div className="row">
                    {trailers.map((video, index) => (
                        <div className="col-6 mt-4" key={index}>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" type="text/html" src={`https://www.youtube.com/embed/`+ video.key} key={index} frameBorder="0"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default RenderTrailers;