import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
    display: flex;
    list-style: none;
    flex-flow: row nowrap;
    font-size: 1.3em;
    color: white;

    li{
        padding: 10px 10px;
        cursor:pointer;
    }

    @media (max-width: 768px){
        flex-flow: column nowrap;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 60px;
        right: 0;
        background-color: rgb(85, 125, 199);
        position: fixed;
        height: 100vh;
        width: 300px;
        z-index: 1;
        padding-top:  3.5rem;
        transition: transform 0.35s ease-out;
    }

`;


const Rightnav = (props) => {
    return (
                <Ul open={props.open}>
                    <li>Home</li>
                    <li>Market</li>
                    <li>Cryptocurrency</li>
                    <li>Top picks</li>
                    <li>Expert tweets</li>
                </Ul>
    )
}

export default Rightnav;