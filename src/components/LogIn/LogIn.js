import React, { Component } from "react"
import { motion } from "framer-motion"
import padlockIcon from "../../img/padlock.png"
import { Link } from "react-router-dom"
import {
  PlaceholderSpan,
  EmailInput,
  PasswordInput,
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

class LogIn extends Component {
  render() {
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
            <PageName>Sign In</PageName>
            <div className="input-box">
              <TextLabel>
                <EmailInput
                  autoComplete="email"
                  required
                  type="email"
                  name="email"
                  id="email"
                />
                <PlaceholderSpan>Email Address*</PlaceholderSpan>
              </TextLabel>
              <TextLabel>
                <PasswordInput required type="password" />
                <PlaceholderSpan>Password*</PlaceholderSpan>
              </TextLabel>
              <CheckBoxLabel htmlfor="remember me">
                <input type="checkbox" id="remember me" />
                <CheckBoxLabelText>Remember me</CheckBoxLabelText>
              </CheckBoxLabel>
              <SubmitButton>SIGN IN</SubmitButton>
            </div>
            <div className="links-box">
              <PageLink>Forgot password?</PageLink>
              <Link to="/signup">
                <PageLink>Don't have an account? Sign Up</PageLink>
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

export default LogIn
