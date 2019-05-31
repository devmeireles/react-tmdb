import React, { Component } from 'react';

class RenderImages extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: 4
        }

        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        this.setState((prev) => {
            return {visible: prev.visible + 2};
        });
    }

    render(){
        const images = this.props.images;
        return(
            <div className="col-12">
                <div className="row">
                    {images.slice(0, this.state.visible).map((image, index) => (
                        <div className="col-6 mt-4" key={index}>
                            <img src={`https://image.tmdb.org/t/p/w500/` + image.file_path} className="img-thumbnail"></img>
                        </div>
                    ))}

                    {this.state.visible < images.length &&
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

export default RenderImages;