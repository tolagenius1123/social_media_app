import React from 'react'
import { FaCameraRetro, FaHome, FaCommentAlt, FaHeart, FaMoon, FaSun, FaSearch } from "react-icons/fa";
import '../../App.css'
import { Link } from 'react-router-dom';

const Nav = ({darkMode, toggleMode}) => {




    return (
    <nav>
        <div className='logo'>
            <FaCameraRetro style={{fontSize: '30px', marginRight: '10px',}}/>
            <p>P!xarGram</p>
        </div>
        <input type="text" placeholder="Search..." />
        <div className='nav-links'>
            <FaHome style={{fontSize: '20px', marginRight:'30px'}} />
            <FaCommentAlt style={{fontSize: '20px', marginRight:'30px'}} />
            <FaHeart style={{fontSize: '20px', }}/>
        </div>
        {/* <FaMoon style={{fontSize: '20px', margin: '5px', cursor: 'pointer'}} onClick={changeMode} />  */}
        {
            toggleMode? 
            <FaMoon style={{fontSize: '20px', margin: '5px', cursor: 'pointer'}} onClick={darkMode} /> 
            : 
            <FaSun style={{fontSize: '20px', margin: '5px', cursor: 'pointer'}} onClick={darkMode} />
        }
        <Link to={"/login"}>
            <p>Log Out</p>
        </Link>
    </nav>
    )
}

export default Nav