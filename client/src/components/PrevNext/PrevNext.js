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

    function goToPage(pageClicked) {
        props.setPage(pageClicked)
    }

    return(
                <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                    <a className="pagination-previous button" onClick={prevPage} href="#">Previous Page</a>
                    <a className="pagination-next button" onClick={nextPage} href="#">Next Page</a>
                    <ul className="pagination-list">
                    {page > 2 ? <li><a className="pagination-link button" onClick={() => goToPage(1)} href="#" aria-label="Goto page 1">1</a></li> : <div></div>}
                    {page > 3 ? <li><span className="pagination-ellipsis" href="#">&hellip;</span></li> : <div></div>}
                    {page > 1 ? <li><a className="pagination-link button" href="#" onClick={prevPage}>{page - 1}</a></li> : <div></div>}
                    <li><a className="pagination-link is-current button" href="#" aria-current="page">{page}</a></li>
                    {page < Math.ceil(rows/8) ? <li><a className="pagination-link button" href="#" onClick={nextPage}>{page + 1}</a></li> : <div></div>}
                    {page === 1 ? <li><a className="pagination-link button" href="#" onClick={() => goToPage(3)}>3</a></li> : <div></div>}
                    {page < Math.ceil(rows/8) - 1 ? <li><span className="pagination-ellipsis">&hellip;</span></li> : <div></div>}
                    {page < Math.ceil(rows/8) - 1 ? <li><a className="pagination-link button" onClick={() => goToPage(Math.ceil(rows/8))} href="#">{Math.ceil(rows/8)}</a></li> : <div></div>}
                </ul>
                </nav>
    )
}

export default PrevNext;