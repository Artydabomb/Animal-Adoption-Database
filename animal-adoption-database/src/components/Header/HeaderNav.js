import React from "react";

function HeaderNav() {
    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item">
                    
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="test">
                        Mewsletter
                    </a>

                    <a class="navbar-item" href="test">
                        Animal Tips
                    </a>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link" href="test">
                            More
                        </a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item" href="test">
                                About
                            </a>
                            <a class="navbar-item" href="test">
                                Jobs & Volunteering
                            </a>
                            <a class="navbar-item" href="test">
                                Contact Us
                            </a>
                            <hr class="navbar-divider" />
                            <a class="navbar-item" href="test">
                                Report an issue
                            </a>
                        </div>
                    </div>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary" href="test">
                                <strong>Sign up</strong>
                            </a>
                            <a class="button is-light" href="test">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default HeaderNav;