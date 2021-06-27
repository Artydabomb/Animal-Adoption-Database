import React, {useContext, useState} from "react";
import SearchContext from "../../utils/SearchContext";

function PrevNext(props) {
    const { page, rows } = useContext(SearchContext);

    function nextPage() {
        props.setPage(page + 1)
    }

    function prevPage() {
        if (page > 1) {
            props.setPage(page - 1)
        }
    }

    function goToPage(page) {
        props.setPage(page)
    }

    return(
                <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                    <a className="pagination-previous button" onClick={prevPage} href="#">Previous Page</a>
                    <a className="pagination-next button" onClick={nextPage} href="#">Next Page</a>
                    <ul className="pagination-list">
                    {page > 2 ? <li><a className="pagination-link button" onClick={prevPage} href="#" aria-label="Goto page 1">1</a></li> : <div></div>}
                    {page > 3 ? <li><span className="pagination-ellipsis">&hellip;</span></li> : <div></div>}
                    {page > 1 ? <li><a className="pagination-link">{page - 1}</a></li> : <div></div>}
                    <li><a className="pagination-link is-current button" aria-current="page">{page}</a></li>
                    <li><a className="pagination-link">{page + 1}</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link" aria-label="Goto page 86">86</a></li>
                </ul>
                </nav>
    )
}

export default PrevNext;