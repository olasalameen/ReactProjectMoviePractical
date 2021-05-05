import axios from 'axios';
import React, { Component } from 'react';
import Breadcrumb from '../components/Header/breadcrumb';
import MovieList from '../components/MainContent/MovieList';
import { config } from './../utils/config';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.page = 1;
        this.state = {
            movies: []
        };
    }

    componentDidMount() {

        if (this.props.match && this.props.match.params.search === undefined) {
            this.getAllMovies();
            this.getTopSearchMovies();
        } else {
            this.searchMovies(this.props.match.params.search);
        }

    }

    render() {
        const { movies, topMovies, hasData } = this.state;

        console.log(movies);

        const movieLists = () => {
            if (movies) {
                if (movies && movies.length > 0) {
                    return movies.map((movie, index) => {
                        return (
                            <MovieList item={movie} />
                        )
                    });
                } else {
                    return (<h2>No Record found </h2>)
                }
            }
        }

        const topMovieLists = () => {
            if (topMovies) {
                if (topMovies && topMovies.length > 0) {
                    return topMovies.map((item, index) => {
                        return (
                            <li style={{ padding: 0, margin: 0, float: 'left', paddingRight: 30, listStyleType: 'none' }}>{item.movies}</li>
                        )
                    });
                } else {
                    return (<h2>No Record found </h2>)
                }
            }
        }


        return (
            <>
                <Breadcrumb />

                <section className="gen-section-padding-3">
                    <div style={{ float: 'left' }}>
                            <h4 style={{ marginLeft: 30}}>Top Search Movies</h4>
                            <ul>
                            {topMovieLists()}
                        </ul>
                    </div>
                    <div className="container">
                    <h4 style={{ marginLeft: 30}}>Top Movies</h4>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    {movieLists()}
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="gen-load-more-button">
                                    <div className="gen-btn-container">
                                        <a className="gen-button gen-button-loadmore" href="#">
                                            <span className="button-text">Load More</span>
                                            <span className="loadmore-icon" data-style="display: none;"><i className="fa fa-spinner fa-spin"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

    getAllMovies() {
        let pathUrl = config.apiUrl + '/GetMovies';

        return axios
            .get(pathUrl)
            .then(resp => {
                this.setState({ movies: resp.data });
            })
            .catch(error => { console.log(error) });
    }

    searchMovies(query) {
        let pathUrl = config.apiUrl + `/GetMovieByTitle/${query}`;

        return axios
            .get(pathUrl)
            .then(resp => {
                console.log(resp.data);
                if (resp.data && resp.data.length !== 0) {
                    console.log('ok');
                    this.setState({ hasData: true, movies: resp.data });
                } else {
                    this.setState({ hasData: false });
                }

            })
            .catch(error => { console.log(error) });
    }

    getTopSearchMovies() {
        let pathUrl = config.apiUrl + '/GetTopSearchMovies';

        return axios
            .get(pathUrl)
            .then(resp => {
                console.log(resp);
                this.setState({ topMovies: resp.data });
            })
            .catch(error => { console.log(error) });
    }

}
