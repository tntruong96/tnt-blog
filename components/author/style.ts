import styled from "styled-components";

export const AuthorContainer = styled.div`
    border: 1px solid white;
    border-radius: 0.375rem;
    margin: 5rem 1rem;
    position: relative;
`

export const AuthorAvatar = styled.div`
    /* position: relative; */
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: center;
    position: absolute;
    top: -5rem;
`

export const AuthorDetail = styled.div`
    padding: 5rem 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 600;
`