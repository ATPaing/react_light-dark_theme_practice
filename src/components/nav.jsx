// Nav.jsx
import reactLogo from "../assets/react.svg";
import { useEffect, useState } from "react";
import styled from 'styled-components';
import "../styles/nav.css";

const NavStyled = styled.nav`
    background-color: ${props => props.$isLightTheme ? '#FFFFFF' : '#21222A'};
    display: flex;
    align-items: center;
    padding: 3em 2.5em;
    box-shadow: 0px 2px 2px hsl(0 0% 0% /25%);
    transition: all 360ms linear;
`

const LightThemeTitle = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    user-select: none;
    color: ${props => props.$isLightTheme ? '#2B283A' : '#918E9B'} ;
    transition: all 360ms linear;
`
const DarkThemeTitle = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    user-select: none;
    color: ${props => props.$isLightTheme ? '#D5D4D8' : '#FFFFFF'} ;
    transition: all 360ms linear;
`
const Toggle = styled.div`
    width: 43px;
    height: 25px;
    border-radius: 150px;
    background-color: ${props => props.$isLightTheme ? '#2B283A' : '#F5F5F5'};
    display: flex;
    align-items: center;
    transition: all 360ms linear;
`
const ToggleBtn = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: ${props => props.$isLightTheme ? '#FFFFFF' : '#222222'};
    margin-left: ${props => props.$isLightTheme ? '5%' : '55%'};
    cursor: pointer;
    transition: all 360ms linear;
`

function Nav(props) {
    const [isLightTheme, setIsLightTheme] = useState(props.isLightThemeDefault);

    useEffect(() => {
        setIsLightTheme(props.isLightThemeDefault)
    },[props.isLightThemeDefault])
    
    function toggleTheme() {
        setIsLightTheme(prevTheme => !prevTheme);
        props.updateTheme(!isLightTheme); // Pass the new theme to the parent component
    }

    return (
        <NavStyled $isLightTheme={isLightTheme}>
            <div className="nav_left">
                <img src={reactLogo} alt="react" />
                <p>ReactFacts</p>
            </div>
            <div className="nav_right">
                <LightThemeTitle $isLightTheme={isLightTheme}>Light</LightThemeTitle>
                <Toggle $isLightTheme={isLightTheme}>
                    <ToggleBtn $isLightTheme={isLightTheme} onClick={toggleTheme}></ToggleBtn>
                </Toggle>
                <DarkThemeTitle $isLightTheme={isLightTheme}>Dark</DarkThemeTitle>
            </div>
        </NavStyled>
    )
}

export default Nav;
