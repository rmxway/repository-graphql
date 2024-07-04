import styled from "styled-components";

export const RepositoryCardWrapper = styled.div`
    position: relative;
    background-color: #fff;
    padding: 10px;
    border-radius: 8px;
    
    display: grid;
    grid-auto-flow: row;
    justify-content: start;
    gap: 4px;

    & > span {
        font-size: 1.25rem;
    }

    div {
        display: flex;
        flex-direction: column;
    }
`;