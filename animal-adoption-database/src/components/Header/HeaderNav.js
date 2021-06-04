import React from "react";

function HeaderNav() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item">
                    
                </a>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="test">
                        Mewsletter
                    </a>

                    <a className="navbar-item" href="test">
                        Animal Tips
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link" href="test">
                            More
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item" href="test">
                                About
                            </a>
                            <a className="navbar-item" href="test">
                                Jobs & Volunteering
                            </a>
                            <a className="navbar-item" href="test">
                                Contact Us
                            </a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item" href="test">
                                Report an issue
                            </a>
                            </div>
                        </div>
                    </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary" href="test">
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light" href="test">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

        );
    }
}
export default HeaderNav;