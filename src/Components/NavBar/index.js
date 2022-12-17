import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar bg-light fixed-top" style={{
                boxShadow: "4px 3px 5px 0px rgba(0,0,0,0.75)",
                webkitBoxShadow: "4px 3px 5px 0px rgba(0,0,0,0.75)",
                mozBoxShadow: "4px 3px 5px 0px rgba(0,0,0,0.75)"
            }} >
                <div className="container-fluid">
                    <svg style={{ width: "50px", height: "50px", cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-info" type="submit" style={{ width: '100px' }}>Search</button>
                    </form>
                </div>
            </nav >
        )
    }
}

export default NavBar;