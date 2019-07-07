import React from 'react'
import { Link } from 'react-router-dom';
import { PATHS } from '../../utils/variables';
const ulStyle = {
    display: 'flex',
    listStyle: 'none',
};
const liStyle = {padding: '4px'};

const MainNav = () => (
    <nav>
        <ul style={ulStyle}>
            {
                Object.keys(PATHS).map((item) => (
                    
                    <li key={PATHS[item].PATH} style={liStyle}>
                        <Link to={PATHS[item].PATH}>{PATHS[item].LABEL}</Link>
                    </li>
                ))
            }
        </ul>
    </nav>
);

export default MainNav;