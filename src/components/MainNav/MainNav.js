import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import uniqid from 'uniqid';

import { PATHS } from '../../utils';
import { colorPallete, rem } from '../../style'


const MainNav = () => (
    <StyledNav className='main-nav'>
        <StyledLogo>
            <Link to={PATHS.HOME.PATH}><h1>MovieFlix</h1></Link>
        </StyledLogo>
        <StyledNavList>
            {
                Object.keys(PATHS).map((item) => (
                    
                    <li key={uniqid()}>
                        <Link to={PATHS[item].PATH} key={uniqid()}>{PATHS[item].LABEL}</Link>
                    </li>
                ))
            }
        </StyledNavList>
    </StyledNav>
);

const StyledNav = styled.nav`
    background: ${ colorPallete.primaryGradient };
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: ${rem(32)};

    @media(min-width: 768px) {
        justify-content: space-between;
        flex-direction: row;
    }
`;

const StyledNavList = styled.ul`
    align-items: center;
    display: flex;
    justify-content: flex-end;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
        a {
            color: ${ colorPallete.white };
            font-size: ${rem(16)};
            font-weight: 200;
            outline: none;
            padding: ${rem(8)} ${rem(10)};
            position: relative;

            &:after {
                background: white;
                bottom: ${rem(-5)};
                content: '';
                position: absolute;
                height: ${rem(2)};
                left: 0;
                transition: width .4s;
                width: 0;

            }

            &:hover, &:focus {
                
                &:after {
                    width: 95%;
                }
            }
        }
    }
`;

const StyledLogo = styled.div`
    font-family: 'Kanit';
    font-size: ${rem(24)};
    font-weight: bold;

    h1 {
        margin: 0;
    }

    a {
        color: ${ colorPallete.white };
        text-decoration: none;
    }
`;

export default MainNav;