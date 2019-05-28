import React, {Component} from 'react';
import MovieList from '../components/MoviesList';


export default class Home extends Component{
    render(){
        return(
            <div className="container mt-5 pt-5">
                <MovieList />
            </div>
        );
    }
}