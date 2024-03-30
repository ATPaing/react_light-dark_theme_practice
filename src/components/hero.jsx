import '../styles/hero.css';
import styled from 'styled-components';

const Main = styled.main`
    background-color: ${props => props.$isLightTheme ? '#FFFFFF' : '#282D35'} ;
    display: flex;
    min-height: calc(100vh - 70.4px);
    flex-direction: column;
    flex-grow: 1;
    padding: 4em 2.5em;
    transition: all 360ms linear;
    margin-top: 4px;
    transition: all 360ms linear;
`

const H1 = styled.h1`
    font-size: 3rem;
    color: ${props => props.$isLightTheme ? '#2B283A' : '#FFFFFF'} ;
    transition: all 360ms linear;
`
const Ul = styled.ul`
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    font-size: 1.2rem;
    transition: all 360ms linear;
`
const Li = styled.li`
    margin-left: 3em;
    font-size: 1.25rem;
    color: ${props => props.$isLightTheme ? '#2B283A' : '#FFFFFF'};
    &::marker {
        color: #00ABCA;
        font-size: 1.75rem;
    }
    transition: all 360ms linear;
`

function Hero(props) {

    return (
        <Main $isLightTheme={props.isLightTheme}>
            <H1 $isLightTheme={props.isLightTheme}>Fun facts about React</H1>
            <Ul $isLightTheme={props.isLightTheme}>
                <Li $isLightTheme={props.isLightTheme}>Was first released in 2013</Li>
                <Li $isLightTheme={props.isLightTheme}>Was originally created by Jordan Walke</Li>
                <Li $isLightTheme={props.isLightTheme}>Has well over 100K stars on GitHub</Li>
                <Li $isLightTheme={props.isLightTheme}>Is maintained by Facebook</Li>
                <Li $isLightTheme={props.isLightTheme}>Powers thousand of enterprise apps, including mobile apps</Li>
            </Ul>
        </Main>
    )
}

export default Hero;