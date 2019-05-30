import React, { Component } from 'react';

class RenderKeyWords extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const keyWords = this.props.keyWords;
        return(
            <div className="col-12">
                <div className="row">
                    {keyWords.map((keyWord, index) => (
                        <a href="#" className="badge p-2 m-2 keyWords" key={index}>{keyWord.name}</a>
                    ))}
                </div>
            </div>
        )
    }
}

export default RenderKeyWords;