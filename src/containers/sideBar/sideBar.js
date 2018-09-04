import React from 'react';

function SideBar() {
    return (
        <div className='flexColumn'>
            <div className='flexChild'>
                <img src='./wheel.png' alt='wheel'/>
                {/* <img src="https://cdn.dribbble.com/users/77598/screenshots/3893621/totoro_family.png" className="sideBarLogo"/> */}
            </div>
            <div className='flexChild sideBarText'>
                Keeping you focused on your business and not on banking tasks is what Ubank is here to do.
            </div>
        </div>
    )
}

export default SideBar;