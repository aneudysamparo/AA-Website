import React, { Component } from "react";
import { Form } from '../forms/form';
import { Field } from '../forms/field';


const onFormNameChange = (event) => {

}
const onFormEmailChange = (event) => {

}
const onFormSubjectChange = (event) => {

}
const onFormMessageChange = (event) => {

}

const ContactDefault = ({ title, image }) => {
  const formValue = {
    rnName: '',
    rnEmail: '',
    rnSubject: '',
    rnMessage: '',
  };
  return (
    <div className="contact-form--1">
      <div className="container">
        <div className="row row--35 align-items-start">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="section-title text-left mb--50">
              <h2 className="title">{title}</h2>
              <p className="description">I am available for freelance work. Connect with me via email:
                                    <a href="mailto:hello@aneudysamparo.com"> hello(at)aneudysamparo.com</a> </p>
            </div>
            <div className="form-wrapper">

              <Form
                action="http://localhost:3333/api/contactme"
                render={() => (
                  <React.Fragment>
                    <Field id="name" type="text" placeHolder="Enter Your FullName" />
                    <Field id="email" type="email" placeHolder="Enter Your Email" />

                    <Field id="subject" type="text" placeHolder="Enter Subject: Web Development, Job Offer, General" />
                    <Field id="notes" placeHolder="Tell Me Your Message" editor="multilinetextbox" />
                  </React.Fragment>
                )}
              />
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="thumbnail mb_md--30 mb_sm--30">
              <img src={`${image}`} alt="trydo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactDefault;
