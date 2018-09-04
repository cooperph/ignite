import React from 'react';

function NavBar(props) {
    return(
        <div className='flexRow'>
            <div className='flexChild floatLeft fontOrange' id='back' onClick={props.handleClick}><i className="fas fa-undo"></i>back</div>
            <div className='flexChild floatRight fontBlue' id='next' onClick={props.handleClick}>next<i className="fas fa-arrow-circle-right"></i></div>
        </div>
    )
}

export default NavBar;