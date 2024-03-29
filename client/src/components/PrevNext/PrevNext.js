import React, {useContext, useState} from "react";
import SearchContext from "../../utils/SearchContext";
import './PrevNext.css';

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
            {page !== 1 ? <a className="pagination-previous paginationBtn button" onClick={prevPage} href="#">Previous Page</a> : <div></div>}
            {page == 1 ? <div style={{"minWidth" : "220px"}}> </div> : <div></div>}
            {page !== Math.ceil(rows/8) ? <a className="pagination-next paginationBtn button" onClick={nextPage} href="#">Next Page</a> : <div></div>}
            <ul className="pagination-list">
                {page > 2 ? <li><a className="pagination-link paginationBtn button" onClick={() => goToPage(1)} href="#" aria-label="Goto page 1">1</a></li> : <div></div>}
                {page > 3 ? <li><span className="pagination-ellipsis" href="#">&hellip;</span></li> : <div></div>}
                {page > 1 ? <li><a className="pagination-link paginationBtn button" href="#" onClick={prevPage}>{page - 1}</a></li> : <div></div>}
                <li><a className="pagination-link is-current paginationBtn button" href="#" aria-current="page">{page}</a></li>
                {page < Math.ceil(rows/8) ? <li><a className="pagination-link paginationBtn button" href="#" onClick={nextPage}>{page + 1}</a></li> : <div></div>}
                {page === 1 ? <li><a className="pagination-link paginationBtn button" href="#" onClick={() => goToPage(3)}>3</a></li> : <div></div>}
                {page < Math.ceil(rows/8) - 1 ? <li><span className="pagination-ellipsis">&hellip;</span></li> : <div></div>}
                {page < Math.ceil(rows/8) - 1 ? <li><a className="pagination-link paginationBtn button" onClick={() => goToPage(Math.ceil(rows/8))} href="#">{Math.ceil(rows/8)}</a></li> : <div></div>}
            </ul>
        </nav>
    )
}

export default PrevNext;