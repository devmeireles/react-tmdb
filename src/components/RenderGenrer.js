import React, { Component } from 'react';

class RenderGenrer extends Component {
    render() {
        const genres = this.props.genres;
        let nestedArray = [],
        resultString;

        if(genres !== undefined){
            genres.forEach(function(item){
                nestedArray.push(item.name);
            });
        }

        resultString = nestedArray.join(', ');

        return (
            <span>{resultString}</span>
        );
    }
}

export default RenderGenrer;