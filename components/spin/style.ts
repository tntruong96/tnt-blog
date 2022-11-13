import styled from "styled-components";

export const SpinContainer =  styled.div`
    position: fixed;
    top: 0;
    /* left: 50%; */
    z-index: 20;
    background-color: rgba(0,0,0, 0.5);
    width: 100%;
    height: 100vh;

    .spin {
        position: fixed;
        top: 50%;
        left: 50%;
    }
`