import styled from 'styled-components';

export const FieldListContainer = styled.article`
    width: inherit;
`;

export const FormForEmployeeDetails = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border: 2px dashed white;
    width: 80%;
`;

export const FieldsetForEmployeeDetails = styled.fieldset`
    padding: 4%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
`;

export const TextFieldLabelContainer = styled.div`
    display: inherit;
    width: 25%;
    height: 25px;
    margin-right: 25%;
`;

export const TextFieldLabel = styled.label`
    display: block;
    width: 100%;
    height: inherit;
    font-weight: bold;
    font-size: 100%;
`;

export const TextFieldContainer = styled.div`
    margin: 1%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
`;

export const TextFieldInput = styled.input`
    cursor: pointer;
    display: block;
    padding: 2%;
    width: 100%;
    font-size: 100%

    &:hover, &:focus {
        background-color:rgba(255, 255, 255,0.5);
        transition: box-shadow 0.01s;
        transition-timing-function: ease-in-out;
        box-shadow: 0px 0px 0.5px 0.5px gray;
    }
`;

export const ParentButtonContainer = styled.div`
    border: 2px dotted red;
    width: 80%;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const ChildButtonContainer = styled.div`
    width: 40%;
    border: 2px dotted purple;
    height: 150%;
    border-radius: 10px;
    font-weight: 700;
    background-color: white;
    text-align: center;
`;

export const ButtonAdd = styled.button`
    width: 100%;
    height: 100%;
    background-color: #ff9933;
    font-weight: inherit;
    border-radius: inherit;
`;

export const ButtonUpdate = styled.button`
    width: 100%;
    height: 100%;
    background-color: #CCF8D3;
    font-weight: inherit;
    border-radius: inherit;
`;

export const ButtonDelete = styled.button`
    width: 100%;
    height: 100%;
    background-color: #F9E0E0;
    font-weight: inherit;
    border-radius: inherit;
`;

export const ButtonCancel = styled.button`
    width: 100%;
    height: 100%;
    background-color: #ff5050;
    font-weight: inherit;
    border-radius: 10px;
`;