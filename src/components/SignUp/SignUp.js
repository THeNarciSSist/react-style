import React, { Component } from "react"
import padlockIcon from "../../img/padlock.png"
import { Link } from "react-router-dom"
import {
  EmailInput,
  PasswordInput,
  FirstNameInput,
  LastNameInput,
  PlaceholderSpan,
  TextLabel,
  PageDiv,
  CheckBoxLabel,
  CheckBoxLabelText,
  SubmitButton,
  PageLink,
  CopyrightText,
  PageName,
  IconDiv,
} from "../styled-components/styledComponents"
import { motion } from "framer-motion"

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      emailValue: "",
      passwordValue: "",
      firstNameValue: "",
      lastNameValue: "",
      emailBorderCorrect: false,
      passwordBorderCorrect: false,
      firstNameBorderCorrect: false,
      lastNameBorderCorrect: false,
    }
  }

  handleEmailChange = (e) => {
    this.setState({ emailValue: e.target.value })

    if (e.target.value.match(/\S{3,}@\S{2,}\.\w{2,}/gi)) {
      this.setState({ emailBorderCorrect: true })
    } else {
      this.setState({ emailBorderCorrect: false })
    }
  }

  handlePasswordChange = (e) => {
    this.setState({ passwordValue: e.target.value })

    if (e.target.value.match(/\S{8,}/gi)) {
      this.setState({ passwordBorderCorrect: true })
    } else {
      this.setState({ passwordBorderCorrect: false })
    }
  }

  handleFirstNameChange = (e) => {
    this.setState({ firstNameValue: e.target.value })

    if (e.target.value.match(/[а-яa-z]{3,10}/i)) {
      this.setState({ firstNameBorderCorrect: true })
    } else {
      this.setState({ firstNameBorderCorrect: false })
    }
  }

  handleLastNameChange = (e) => {
    this.setState({ lastNameValue: e.target.value })

    if (e.target.value.match(/[А-Яа-я]{3,10}/gi)) {
      this.setState({ lastNameBorderCorrect: true })
    } else {
      this.setState({ lastNameBorderCorrect: false })
    }
  }

  render() {
    const {
      state,
      handleEmailChange,
      handleFirstNameChange,
      handleLastNameChange,
      handlePasswordChange,
    } = this
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <PageDiv>
          <div className="box">
            <IconDiv>
              <img alt="padlock" className="icon-img" src={padlockIcon} />
            </IconDiv>
            <PageName>Sign Up</PageName>
            <div className="input-box">
              <div className="name-box">
                <TextLabel htmlFor="given-name">
                  <FirstNameInput
                    autoComplete="given-name"
                    id="given-name"
                    name="given-name"
                    required
                    type="text"
                    value={state.firstNameValue}
                    onChange={(e) => handleFirstNameChange(e)}
                    variant={state.firstNameBorderCorrect}
                  />
                  <PlaceholderSpan>First Name*</PlaceholderSpan>
                </TextLabel>
                <TextLabel htmlFor="family-name">
                  <LastNameInput
                    autoComplete="family-name"
                    id="family-name"
                    required
                    type="text"
                    name="family-name"
                    value={state.lastNameValue}
                    onChange={(e) => handleLastNameChange(e)}
                    variant={state.lastNameBorderCorrect}
                  />
                  <PlaceholderSpan>Last Name*</PlaceholderSpan>
                </TextLabel>
              </div>
              <TextLabel>
                <EmailInput
                  autoComplete="email"
                  required
                  type="email"
                  name="email"
                  id="email"
                  value={state.emailValue}
                  onChange={(e) => handleEmailChange(e)}
                  variant={state.emailBorderCorrect}
                />
                <PlaceholderSpan>Email Address*</PlaceholderSpan>
              </TextLabel>
              <TextLabel>
                <PasswordInput
                  id="password"
                  required
                  type="password"
                  name="password"
                  value={state.passwordValue}
                  onChange={(e) => handlePasswordChange(e)}
                  variant={state.passwordBorderCorrect}
                />
                <PlaceholderSpan>Password*</PlaceholderSpan>
              </TextLabel>
              <CheckBoxLabel htmlfor="marketing">
                <input type="checkbox" id="marketing" />
                <CheckBoxLabelText>
                  I want to receive inspiration, marketing promotions and
                  updates via email
                </CheckBoxLabelText>
              </CheckBoxLabel>
              <SubmitButton>SIGN UP</SubmitButton>
            </div>
            <div className="links-box">
              <Link to="/">
                <PageLink>Already have an account? Sign In</PageLink>
              </Link>
            </div>
            <CopyrightText>
              Copyright &copy; Authorization Website 2022
            </CopyrightText>
          </div>
        </PageDiv>
      </motion.div>
    )
  }
}

export default SignUp
