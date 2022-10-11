import styled from "@emotion/styled";

export const Card = styled.div`
    width: 100%;
    background-color: #25273c;
    border-radius: 5px 5px 0 0;
    padding: 10px;
`;

export const Row = styled.div`
    padding: 10px;
    text-decoration: ${props => props?.cross ? 'line-through' : 'none'};
    cursor: pointer;
`

export const HR = styled.hr`
    width: 100%;
    color: 
`