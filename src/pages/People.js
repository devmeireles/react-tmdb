import React, {Component} from 'react';
import api from '../services/api';

export default class People extends Component{
    constructor(props){
        super(props);

        this.state = {
            profile : {},
        };
    }

    async componentDidMount(){
        this.loadPeople();
        this.loadMovies();
    }

    loadPeople = async () => {
        const {id} = this.props.match.params;
        const response = await api.get(`/person/${id}/?api_key=7de1111e4ea9fa0dc45893f3c81297b3&language=en-US`);
        
        this.setState({
            profile: response.data.profile_path,
        });
    }

    loadMovies = async () => {
        const {id} = this.props.match.params;
        const response = await api.get(`/person/${id}/movie_credits?api_key=7de1111e4ea9fa0dc45893f3c81297b3&language=en-US`);

        this.setState({
            cast: response.data.cast,
            crew: response.data.crew
        });
    }

    render(){
        return(
            <h1>{this.state.name}</h1>
        )
    }
}