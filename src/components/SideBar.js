import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Sidebar.css";

const SideBar = () => {
    return (
        <div className='sidebar-main'>
            <div className='first-icons-section'>
                <ul>
                    <Link to="/"><li><i class="fas fa-home"></i>Home</li></Link>
                    <Link to="/trending"><li><i class="fas fa-fire"></i>Trending</li></Link>
                    <Link to="/subscription"><li><i class="fas fa-tv"></i>Subscription</li></Link>
                </ul>
            </div>
            <hr />
            <div className='second-icons-section'>
                <ul>
                    <Link to="/library"><li><i class="fas fa-book-open"></i>Library</li></Link>
                    <Link to="/history"><li><i class="fas fa-history"></i>History</li></Link>
                    <Link to="/movies"><li><i class="fas fa-film"></i>Your Movies</li></Link>
                    <Link to="/watchlater"><li><i class="fas fa-clock"></i>Watch Later</li></Link>
                </ul>
            </div>
            <hr />
            <div className='third-icons-section'>
                <ul>
                    <Link to="/premium"><li><i class="fab fa-youtube"></i>Youtube Premium</li></Link>
                    <Link to="/live"><li><i class="fas fa-wifi"></i>Youtube Live</li></Link>
                    <Link to="/gaming"><li><i class="fas fa-headset"></i>Gaming</li></Link>
                    <Link to="/learning"><li><i class="far fa-lightbulb"></i>Learning</li></Link>
                    <Link to="/fashion"><li><i class="fas fa-vest-patches"></i>Fashion &amp; Beauty</li></Link>
                </ul>
            </div>
            <hr />
            <div className='fourth-icons-section'>
                <ul>
                    <Link to="/setting"><li><i class="fas fa-cog"></i>Settings</li></Link>
                    <Link to="/report-spam"><li><i class="fab fa-font-awesome-flag"></i>Report &amp; Spam</li></Link>
                    <Link to="/help"><li><i class="far fa-question-circle"></i>Help</li></Link>
                    <Link to="/send-feedback"><li><i class="far fa-comment-dots"></i>Send Feedback</li></Link>
                </ul>
            </div>
            <hr />
            <div className='footer-section'>
               <p>terms &amp; services </p>
               <p>privacy policy</p>
                <p>© 2021 Google LLC</p>
            </div>
            <hr />
        </div>
    )
}

export default SideBar
