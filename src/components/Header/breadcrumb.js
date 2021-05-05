import React, { Component } from 'react'

export default class Breadcrumb extends Component {
    render() {
        return (
            <div className="gen-breadcrumb" data-style="background-image: url('images/background/asset-25.jpeg');">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <nav aria-label="breadcrumb">
                                    <div className="gen-breadcrumb-title">
                                        <h1>
                                            Movies
                            </h1>
                                    </div>
                                    <div className="gen-breadcrumb-container">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="index.html"><i
                                                className="fas fa-home mr-2"></i>Home</a></li>
                                            <li className="breadcrumb-item active">Movie</li>
                                        </ol>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
