import React from "react";

function PrevNext(props) {
    return(
        <div className="columns is-centered mt-5 m-3">
            <div className="column">
                <nav className="pagination" role="navigation" aria-label="pagination">
                    <a className="pagination-previous button">Previous Page</a>
                    <a className="pagination-next button">Next Page</a>
                </nav>
            </div>
        </div>
    )
}

export default PrevNext;