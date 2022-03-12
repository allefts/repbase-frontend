import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";

const ContactPopup = ({ trigger, togglePopup }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    fullName: "",
    email: "",
    subject: "Information",
    message: "",
  });

  //   console.log(errors);

  return trigger ? (
    <StyledContactPopup>
      <Inside>
        <IoMdClose className="closeBtn" onClick={togglePopup} />
        <Title>To: John Doe | Sales Director @ H-E-B</Title>
        <ContactForm
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <NameInput>
            <span className="firstNameError error">
              {errors.fullName?.message}
            </span>
            <input
              {...register("fullName", {
                required: "Please enter your full name",
              })}
              type="text"
              placeholder="Full Name"
              autoFocus
            />
          </NameInput>
          <EmailInput>
            <span className="error">{errors.email?.message}</span>
            <input
              {...register("email", {
                required: "Please enter your Email",
                //   pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
              })}
              type="email"
              placeholder="Email"
            />
          </EmailInput>
          <SubjectInput>
            <p>Subject: </p>
            <select>
              <option value="information">Information</option>
              <option value="support">Support</option>
            </select>
          </SubjectInput>
          <MessageInput>
            <span className="error">{errors.message?.message}</span>
            <textarea
              {...register("message", {
                required: "Please enter your message",
              })}
              type="textarea"
              rows="5"
              cols="50"
              placeholder="Message..."
              maxLength={2000}
            />
          </MessageInput>
          <input type="submit" value="Submit" className="submitBtn" />
        </ContactForm>
      </Inside>
    </StyledContactPopup>
  ) : (
    ""
  );
};

export default ContactPopup;

const StyledContactPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inside = styled.div`
  position: relative;
  padding: 3rem;
  width: 100%;
  max-width: 700px;
  background-color: #fff;
  border-radius: 0.5rem;

  .closeBtn {
    color: #29323d;
    font-size: 1.5rem;
    cursor: pointer;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  .submitBtn {
    border-radius: 10rem;
    background: rgb(41, 50, 61);
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    font-family: Raleway, sans-serif;

    &:focus {
      border: none;
    }
  }
`;

const Title = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
  color: #29323d;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    width: 100%;
    font-size: 1.25rem;
    margin: 0 auto;
    padding: 0.5rem 0.75rem;
    border: 1px solid #29323d;
    border-radius: 10rem;
    outline: none;

    &:focus {
      border: 2px solid #29323d;
    }
  }

  .error {
    color: red;
    font-size: 12px;
  }

  & > * {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    margin: 1rem 0;
  }
`;

const NameInput = styled.div``;
const EmailInput = styled.div``;
const SubjectInput = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: start;
  align-self: center;
  font-size: 1.25rem;
  color: #29232d;

  select {
    font-size: 1.25rem;
    padding: 0.5rem 0.75rem;
    background: white;
    border: 1px solid #29232d;
    border-radius: 10rem;
    outline: none;
    cursor: pointer;
  }

  p {
    padding: 0 0.75rem;
    font-weight: 600;
  }
`;
const MessageInput = styled.div`
  width: 100%;

  textarea {
    width: 100%;
    height: 300px;
    border: 1px solid #29323d;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    outline: none;
    resize: none;

    &:focus {
      border: 2px solid #29323d;
    }
  }
  input {
    border-radius: 0;
  }
`;
