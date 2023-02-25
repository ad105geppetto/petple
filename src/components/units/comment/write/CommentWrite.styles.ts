import styled from "@emotion/styled";

export const TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding-top: 40px;
  border-top: 1px solid #999;
`;

export const H5 = styled.h5`
  font-size: 17px;
  padding-left: 10px;
`;

export const Label = styled.label`
  font-weight: 600;
  margin-right: 10px;
`;

export const UserInput = styled.input`
  margin-right: 30px;
  margin-bottom: 20px;
  padding: 10px;
  &:focus {
    outline: none;
  }
`;

export const CommentWrapper = styled.div`
  position: relative;
`;

export const CommentInput = styled.input`
  width: 100%;
  height: 100px;
  padding: 0px 21px 50px 21px;
  &:focus {
    outline: none;
  }
`;

export const CommentLimit = styled.div`
  position: absolute;
  bottom: 16px;
  left: 21px;
`;

export const SubmitButton = styled.button`
  position: absolute;
  width: 91px;
  height: 52px;
  bottom: 0px;
  right: 0px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background-color: #88e25d;
    border: 2px solid #88e25d;
  }
`;