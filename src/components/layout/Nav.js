import React from "react";
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            collapsed: true,
        };
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    render() {
        // const { location } = this.props;
        const { collapsed } = this.state;
        const navClass = collapsed ? "collapse" : "";

        return (
            <nav
                className="navbar navbar-inverse navbar-fixed-top"
                role="navigation">

                <div className="container">

                    <div className="navbar-header">

                        <button
                            type="button"
                            className="navbar-toggle"
                            onClick={this.toggleCollapse.bind(this)} >

                            <span className="sr-only">
                                Toggle navigation
                            </span>

                            <span className="icon-bar">
                            </span>

                            <span className="icon-bar">
                            </span>

                            <span className="icon-bar">
                            </span>

                        </button>

                    </div>

                    <div
                        className={"navbar-collapse " + navClass}
                        id="bs-example-navbar-collapse-1">

                        <ul className="nav navbar-nav">

                            <li>

                                <Link
                                    to="/"
                                    onClick={this.toggleCollapse.bind(this)}>Todos</Link>

                            </li>

                            <li>

                                <Link
                                    to="favorites"
                                    onClick={this.toggleCollapse.bind(this)}>Favorites</Link>

                            </li>

                            <li>

                                <Link
                                    to="settings"
                                    onClick={this.toggleCollapse.bind(this)}>Settings</Link>

                            </li>

                        </ul>

                    </div>

                </div>

            </nav>
        );
    }
}
