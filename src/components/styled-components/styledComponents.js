import styled, { css } from "styled-components"

export const PageDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    flex: 0 1 28%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .input-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
  }

  .name-box {
    display: flex;
    column-gap: 1rem;
  }

  .links-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;

    a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export const TextLabel = styled.label`
  font-size: 14px;
  position: relative;
  padding-top: 20px;
`

const borderCorrect = css`
  border-color: green;
`

const borderIncorrect = css`
  border-color: red;
`

const Input = styled.input`
  background: none;
  border: 3.5px solid #ddd;
  transition: border-color 0.3s ease;
  appearance: none;
  padding: 12px;
  width: 35rem;
  border-radius: 3px;
  outline: none;
  font-size: 1.8rem;
  color: #ddd;

  &:valid + span,
  &:focus + span {
    top: 10px;
    font-size: 12px;
    color: #ddd;
  }
`

export const EmailInput = styled(Input)`
  &: focus {
    ${({ variant }) => (variant === true ? borderCorrect : borderIncorrect)};
  }
`
export const PasswordInput = styled(Input)`
  &: focus {
    ${({ variant }) => (variant === true ? borderCorrect : borderIncorrect)};
  }
`
export const FirstNameInput = styled(Input)`
  width: 17rem;
  &:focus {
    ${({ variant }) => (variant === true ? borderCorrect : borderIncorrect)}
  }
`
export const LastNameInput = styled(Input)`
  width: 17rem;
  &:focus {
    ${({ variant }) => (variant === true ? borderCorrect : borderIncorrect)}
  }
`

export const PlaceholderSpan = styled.span`
  position: absolute;
  left: 12px;
  top: calc(50% + 10px);
  transform: translateY(-50%);
  color: #aaa;
  transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease;
`

export const CheckBoxLabel = styled.label`
  margin: 2rem 0 2rem 0;
  align-self: flex-start;
  display: flex;
  column-gap: 0.5rem;
`

export const CheckBoxLabelText = styled.span`
  color: #ddd;
  font-size: 1.5rem;
`
export const SubmitButton = styled.button`
  border: none;
  width: 35rem;
  padding: 0.5rem 0;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.9);
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
`
export const PageLink = styled.p`
  text-decoration: none;
  color: rgba(255, 255, 255, 1);
  font-size: 1.4rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
export const CopyrightText = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 1);
`
export const PageName = styled.h1`
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 1);
`

export const IconDiv = styled.div`
  margin-bottom: 1rem;
  width: 5rem;
  height: 5rem;

  .icon-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
