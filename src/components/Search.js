import React from 'react';
import "../Styles/Search.css";
import {Link} from "react-router-dom";

const Search = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className='main'>
            <div className='bar-div'>
                <i class="fas fa-bars"></i>
                <div className='icon-div'>
                    <i class="fab fa-youtube"></i><span>YouTube</span>
                </div>
            </div>
            <div className='search-div'>
                <input type="text" placeholder="search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                <i class="fas fa-search"></i>
                {/* <i class="fas fa-microphone"></i> */}
            </div>
            <div className='icons-div'>
                <Link to="/create"><i class="fas fa-video"></i></Link>
                <Link to="/youtubeapps"><i class="fas fa-th"></i></Link>
                <Link to="/notification"><i class="fas fa-bell"></i></Link>
                <Link to="/profile"><i class="fas fa-user"></i></Link>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Search
