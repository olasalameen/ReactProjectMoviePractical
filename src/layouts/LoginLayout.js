import React, { Component } from 'react';
import axios from 'axios';
import { config } from './../utils/config';

export default class LoginLayout extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            search: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log(this.props.children.props);
        

    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { search } = this.state;
        this.setState({ submitted: true });

        this.saveMovies(search);
        
        
    }

    render() {

        const { search } = this.state;
        const { children } = this.props;
        //let imgUrl = "assets/images/img-1.png";

        return (
            <>
                <header id="gen-header" class="gen-header-style-1 gen-has-sticky">
                    <div class="gen-bottom-header">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <nav class="navbar navbar-expand-lg navbar-light">
                                        <a class="navbar-brand" href="#">
                                            <img class="img-fluid logo" src="images/logo-1.png" alt="streamlab-image" />
                                        </a>
                                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                            <div id="gen-menu-contain" class="gen-menu-contain">
                                                <ul id="gen-main-menu" class="navbar-nav ml-auto">
                                                    <li class="menu-item">
                                                        <a href="#" aria-current="page">Home</a>
                                                        <i class="fa fa-chevron-down gen-submenu-icon"></i>
                                                    </li>
                                                    <li class="menu-item active">
                                                        <a href="#">Movies</a>
                                                        <i class="fa fa-chevron-down gen-submenu-icon"></i>
                                                    </li>
                                                    <li class="menu-item">
                                                        <a href="#">Tv Shows</a>
                                                        <i class="fa fa-chevron-down gen-submenu-icon"></i>

                                                    </li>
                                                    <li class="menu-item">
                                                        <a href="#">Video</a>
                                                        <i class="fa fa-chevron-down gen-submenu-icon"></i>

                                                    </li>
                                                    <li class="menu-item">
                                                        <form role="search" method="get" class="search-form" action="#" style={{ marginTop: 10 }}>
                                                            <label>
                                                                <span class="screen-reader-text"></span>
                                                                <input id="search"
                                                                    name="search"
                                                                    type="search"
                                                                    value={search}
                                                                    class="search-field"
                                                                    placeholder="Search …"
                                                                    onChange={this.handleChange} />
                                                            </label>
                                                            <button type="submit" class="search-submit"
                                                                onClick={this.handleSubmit}>
                                                                <span class="screen-reader-text"></span>
                                                            </button>
                                                        </form>

                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="gen-header-info-box">

                                            <div class="gen-account-holder">
                                                <a href="javascript:void(0)" id="gen-user-btn"><i class="fa fa-user"></i></a>
                                                <div class="gen-account-menu">
                                                    <ul class="gen-account-menu">

                                                        <li>
                                                            <a href="log-in.html"><i class="fas fa-sign-in-alt"></i>
                                                    login </a>
                                                        </li>
                                                        <li>
                                                            <a href="register.html"><i class="fa fa-user"></i>
                                                    Register </a>
                                                        </li>

                                                        <li>
                                                            <a href="library.html">
                                                                <i class="fa fa-indent"></i>
                                                    Library </a>
                                                        </li>
                                                        <li>
                                                            <a href="library.html"><i class="fa fa-list"></i>
                                                    Movie Playlist </a>
                                                        </li>
                                                        <li>
                                                            <a href="library.html"><i class="fa fa-list"></i>
                                                    Tv Show Playlist </a>
                                                        </li>
                                                        <li>
                                                            <a href="library.html"><i class="fa fa-list"></i>
                                                    Video Playlist </a>
                                                        </li>
                                                        <li>
                                                            <a href="upload-video.html"> <i class="fa fa-upload"></i>
                                                    Upload Video </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="gen-btn-container">
                                                <a href="register.html" class="gen-button">
                                                    <div class="gen-button-block">
                                                        <span class="gen-button-line-left"></span>
                                                        <span class="gen-button-text">Subscribe</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">
                                            <i class="fas fa-bars"></i>
                                        </button>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {children}
            </>
        )
    }

    saveMovies(search) {
        let pathUrl = config.apiUrl + '/SaveSearchedMovie';

        let model = {
            id: 0,
            movies: search
        };

        return axios
            .post(pathUrl, model)
            .then(resp => {
                this.setState({ movies: resp.data });
                this.props.children.props.history.push(`/search/${search}`);
                window.location.reload();
            })
            .catch(error => { 
                this.props.children.props.history.push(`/search/${search}`);
                window.location.reload();
             });
    }

}

