import styled from "styled-components";

export const WidgetContainer = styled.div`
    margin: 1.25rem;
`

export const PostWidgetItems = styled.div`
`

export const PostWidgetItem = styled.div`
    display: flex;
    margin: 1rem 0rem;
    & .post-widget__image {
        flex: 1 1 0%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & .post-widget__detail {
        flex: 2 1 0%;
        padding: 1rem;
    }
`