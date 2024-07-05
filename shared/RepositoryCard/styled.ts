import styled from "styled-components";

export const RepositoryCardWrapper = styled.div`
    position: relative;
    background-color: #fff;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    padding: 10px;
    border-radius: 8px;
    transition: .2s;

    &:hover {
        top: -1px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }
    
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