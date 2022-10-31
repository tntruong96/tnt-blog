import styled from "styled-components";


export const FormContainer = styled.div`
    padding: 1rem;
`

export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    padding: 1rem;
    textarea {
        resize: none;
    }
`

export const FormField = styled.div`
    display: inline-block;
    width: 100%;
`