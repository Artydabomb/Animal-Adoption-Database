import React from "react";
import './Footer.css';

function Footer() {
    return (
        <div className="tile-is-ancestor">
            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                        <strong>Cosmopawlitan</strong> by <a href="https://github.com/Artydabomb">Arthur Leung</a>, <a href="https://github.com/Billy-MK">Billy Montooth-Keating</a>, <a href="https://github.com/maria-lara">Maria Lara</a>, <a href="https://github.com/ItsMEChacon">Manuel Chacon</a>, <a href="https://github.com/acombs801">Adrian Combs</a>. The source code is licensed
                        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                    </p>
                </div>
            </footer>
        </div >
    );
}

export default Footer