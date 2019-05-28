import React, { Component } from 'react';

class RenderCast extends Component {
    render() {
        const casts = this.props.casts;

        return casts.map((person, index) => (
            <div className="col-4" key={index}>
                <img 
                    src={person.profile_path
                        ? `https://image.tmdb.org/t/p/w45/${person.profile_path}`
                        : `http://www.globeinst.org/dev/wp-content/uploads/2016/06/people-placeholder-320x303.png`}
                    style={{maxWidth:50}}
                />
                <p>{person.name}</p>
                <p>{person.character ? person.character : person.department}</p>
            </div>
        ))
        

    }
}



export default RenderCast;