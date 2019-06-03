import React, { Component } from 'react';

class RenderTrailers extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: 2
        }

        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        this.setState((prev) => {
            return {visible: prev.visible + 2};
        });
    }

    render(){
        const trailers = this.props.trailers;
        return(
            <div className="col-12">
                <div className="row">
                    {trailers.slice(0, this.state.visible).map((video, index) => (
                        <div className="col-12 col-md-6 mt-4" key={index}>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" type="text/html" src={`https://www.youtube.com/embed/`+ video.key} key={index} frameBorder="0"/>
                            </div>
                        </div>
                    ))}

                    {this.state.visible < trailers.length &&
                        <div className="container">
                            <div className="row">
                                <div className="col text-center">
                                    <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default RenderTrailers;