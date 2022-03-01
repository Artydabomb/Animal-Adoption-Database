import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footerMain">
      <div className="tile">
        <footer className="footerElement">
          <div
            className="content has-text-centered box"
          >
            <p>
              Website created by {" "}
              <a className="contributorName" href="https://github.com/Billy-MK">
                Billy Montooth-Keating
              </a>
              ,{" "}
              <a
                className="contributorName"
                href="https://github.com/Artydabomb"
              >
                Arthur Leung
              </a>
              ,{" "}
              <a
                href="https://github.com/maria-lara"
                className="contributorName"
              >
                Maria Lara
              </a>
              ,{" "}
              <a
                href="https://github.com/ItsMEChacon"
                className="contributorName"
              >
                Manuel Chacon
              </a>
              ,{" "}
              <a
                href="https://github.com/acombs801"
                className="contributorName"
              >
                Adrian Combs
              </a>
              .<br></br>
              The source code is licensed{" "}
              <a
                href="http://opensource.org/licenses/mit-license.php"
                className="contributorName"
              >
                MIT
              </a>
              .<br></br>
              The website content is licensed{" "}
              <a
                href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
                className="contributorName"
              >
                CC BY NC SA 4.0
              </a>
              .
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
