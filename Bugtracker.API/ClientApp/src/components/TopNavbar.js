import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle, faSignOutAlt, faUserEdit, faCogs} from "@fortawesome/free-solid-svg-icons";
import avatar from '../assets/avatar.svg';
import { Link } from 'react-router-dom';
import {faBell} from "@fortawesome/free-regular-svg-icons/faBell";
export class TopNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = { profileName : 'Bouthoukine'}
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="navbarWrapper">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="mr-auto">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                       aria-label="Search" />
                        </div>
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faBell} size='lg' />
                        </div>
                        <div className="dropdown my-2 my-lg-0">
                            <button className="btn dropdown" type="button"
                                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                <img src={avatar} className="mr-2" height="20"/>
                                {this.state.profileName}
                            </button>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">
                                   <FontAwesomeIcon icon={faUserEdit} className="mr-1" /> Edit my profile
                                </a>
                                <a className="dropdown-item" href="#">
                                    <FontAwesomeIcon icon={faCogs} className="mr-1" />  Settings
                                </a>
                                <Link className="dropdown-item" to="/">
                                    <FontAwesomeIcon icon={faSignOutAlt} className="mr-1" /> Logout
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}