import React, {useContext, useState} from "react";
import SearchContext from "../../utils/SearchContext";

function PrevNext(props) {
    const { page } = useContext(SearchContext);

    function nextPage(){
        props.setPage(page + 1)
    }

    function prevPage(){
        props.setPage(page - 1)
    }

    return(
        <div className="columns is-centered mt-5 m-3">
            <div className="column">
                <nav className="pagination" role="navigation" aria-label="pagination">
                    <a className="pagination-previous button" onClick={prevPage}>Previous Page</a>
                    <a className="pagination-next button" onClick={nextPage}>Next Page</a>
                </nav>
            </div>
        </div>
    )
}

export default PrevNext;