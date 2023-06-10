import styled from 'styled-components';

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    padding: 20px;
    margin-bottom: 20px;
`;

export const TitleInput = styled.label`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 20px;
    font-size: 24px;
    text-align: center;
    font-weight: 700;
`;

export const InputField = styled.input`
    padding: 5px;
    font-size: 24px;
    text-align: center;
    font-weight: 500;
    border-radius: 5px;
    outline: none;
`;

export const ButtonAdd = styled.button`
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
    border-radius: 10px;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
    outline: none;
    &:hover {
        background-color: #879cb7;
        color: #edf3fb;
    }
`;