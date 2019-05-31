import React, {Component} from 'react';
import api from '../services/api';

export default class RenderSimilarMovie extends Component{
    constructor(props){
        super(props);
    }

    async componentDidMount(){
        this.loadSimilar();
    }

    loadSimilar = async () => {
        const id = this.props.id;
        let res = await api.get(`/movie/${id}/similar?api_key=7de1111e4ea9fa0dc45893f3c81297b3&language=en-US`);

        console.log(res.data.results)
        this.setState({
            movie: res.data.results,
        });

    }

    render(){

        return (
            <h1>similar</h1>
        )
    }
}