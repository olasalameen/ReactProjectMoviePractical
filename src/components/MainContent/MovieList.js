import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class MovieList extends Component {

    render() {
        console.log(this.props.item); 
        const { item } = this.props;

        return (
            <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gen-carousel-movies-style-3 movie-grid style-3">
                    <div className="gen-movie-contain">
                        <div className="gen-movie-img">
                            <img src={item.poster} alt="streamlab-image" />
                            <div className="gen-movie-add">
                                <div className="wpulike wpulike-heart">
                                    <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                        type="button" className="wp_ulike_btn wp_ulike_put_image"></button>
                                    </div>
                                </div>
                                <ul className="menu bottomRight">
                                    <li className="share top">
                                        <i className="fa fa-share-alt"></i>
                                        <ul className="submenu">
                                            <li><a href="#" className="facebook"><i
                                                className="fab fa-facebook-f"></i></a>
                                            </li>
                                            <li><a href="#" className="facebook"><i
                                                className="fab fa-instagram"></i></a>
                                            </li>
                                            <li><a href="#" className="facebook"><i
                                                className="fab fa-twitter"></i></a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="movie-actions--link_add-to-playlist dropdown">
                                    <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                        className="fa fa-plus"></i></a>
                                    <div className="dropdown-menu mCustomScrollbar">
                                        <div className="mCustomScrollBox">
                                            <div className="mCSB_container">
                                                <a className="login-link" href="#">Sign in to add this movie to
                                                a
                                                                playlist.</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="gen-movie-action">
                                <a href={'movie/' + item.id} className="gen-button">
                                    <i className="fa fa-play"></i>
                                </a>
                                {/* <NavLink to = {'movie/' + item.ID} className="gen-button"> 
                                    <i className="fa fa-play"></i>
                                </NavLink> */}
                            </div>
                        </div>
                        <div className="gen-info-contain">
                            <div className="gen-movie-info">
                                <h3><a href="single-movie.html">{item.title}</a></h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                                <ul>
                                    <li>2hr 00mins</li>
                                    <li>
                                        <a href="action.html"><span>Action</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
