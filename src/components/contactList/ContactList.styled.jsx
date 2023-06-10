import styled from 'styled-components';

export const ListOfContact = styled.ul`
    padding: 20px;
    background-color: #fff;
    overflow: hidden;
`;

export const ContactItem = styled.li`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 16px;
    button {
        width: fit-content;
        border-radius: 5px;
        text-align: center;
        font-size: 12px;
        cursor: pointer;
        outline: none;
        &:hover {
            background-color: #879cb7;
            color: #edf3fb;
        }
    }
`;