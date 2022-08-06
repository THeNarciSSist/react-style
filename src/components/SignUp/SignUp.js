import React, { Component } from "react"
import padlockIcon from "../../img/padlock.png"
import { Link } from "react-router-dom"
import {
  TextInput,
  PasswordInput,
  NameInput,
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
            <PageName>Sign Up</PageName>
            <div className="input-box">
              <div className="name-box">
                <TextLabel>
                  <NameInput required type="text" />
                  <PlaceholderSpan>First Name*</PlaceholderSpan>
                </TextLabel>
                <TextLabel>
                  <NameInput required type="text" />
                  <PlaceholderSpan>Last Name*</PlaceholderSpan>
                </TextLabel>
              </div>
              <TextLabel>
                <TextInput required type="text" />
                <PlaceholderSpan>Email Address*</PlaceholderSpan>
              </TextLabel>
              <TextLabel>
                <PasswordInput required type="password" />
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
