import React, { useState, useRef } from "react";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

import "../css/contacto.scss";
import { BsWhatsapp, BsPeople } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import Recaptcha from "react-google-recaptcha";
import axios from "axios";
import Swal from "sweetalert2";
import { Card, TextArea, Button, ContactInfo, Form, TextInput } from "./Card";

// validate empty name input and message input
function validateNameMessage(res) {
  // we are going to store errors for all fields
  // in a signle array
  const errors = [];

  if (res.value.length === 0) {
    errors.push(res.name + " can't be empty");
  }

  if (res.value.length < 3) {
    console.log(res.name);
    if (res.name === "message") {
      errors.push(
        "Please enter a valid " + res.name + " at lease 20 characters"
      );
    }

    if (res.name === "name") {
      errors.push(
        "Please enter a valid " + res.name + " between 3 to 32 characters."
      );
    }
  }

  return errors;
}

// validate email
function validateEmail(res) {
  const email = res.value;
  const errors = [];

  if (
    email.length < 5 ||
    email.split("").filter((x) => x === "@").length !== 1 ||
    email.indexOf(".") === -1
  ) {
    errors.push("Please enter a valide email");
  }

  return errors;
}

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: {
        name: "name",
        label: "Name",
        value: "",
        focus: false,
        errorMessage: "",
      },
      email: {
        name: "email",
        label: "Email",
        value: "",
        focus: false,
        errorMessage: false,
      },
      message: {
        name: "message",
        label: "Message",
        value: "",
        focus: false,
        errorMessage: "",
      },
      esBot: false,
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.recaptchacallback = this.recaptchacallback.bind(this);
    this.botcallback = this.botcallback(this);
  }

  handleFocus(e) {
    const name = e.target.name;
    const state = Object.assign({}, this.state[name]);
    state.focus = true;
    this.setState({ [name]: state });
  }

  handleBlur(e) {
    const name = e.target.name;
    const state = Object.assign({}, this.state[name]);
    state.focus = false;
    this.setState({ [name]: state });
  }

  handleChange(e) {
    const name = e.target.name;
    const state = Object.assign({}, this.state[name]);
    let errorMessage = "";
    state.value = e.target.value;

    if (name === "email") {
      errorMessage = validateEmail(this.state[name]);
    } else {
      errorMessage = validateNameMessage(this.state[name]);
    }

    if (errorMessage) {
      state.errorMessage = errorMessage;
    }

    this.setState({ [name]: state });
  }
  recaptchacallback(response) {
    if (response) {
      this.setState({
        esBot: true,
      });
    }
  }

  botcallback(response) {
    if (response) {
      this.setState({
        esBot: true,
      });
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.esBot) {
      //const apiURL = "http://localhost:5001/luis-portfolio-d518a/us-central1/sendMail"
      const apiURL =
        "https://us-central1-luis-portfolio-d518a.cloudfunctions.net/sendMail";
      console.log("no es bot fam");
      const subject = "Mail From" + this.state.name.value,
        email = this.state.email.value,
        message = this.state.message.value;
      axios
        .post(apiURL, {
          emailRemitent: subject,
          emailBody: message,
          interestedPerson: email,
        })
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Exito!",
            text: "El correo fue enviado correctamente",
          });
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "bip boop boop bip?",
        text: "Primero Verifica que no eres un robot!",
      });
    }
  }

  render() {
    const { name, email, message } = this.state;

    return (
      <div className="contact content all">
        <div className="containerContacto">
          <div className="contactoInfoContainer">
            <ContactInfo>
              <h1>
                Redes Sociales <BsPeople />
              </h1>

              <a href="https://www.instagram.com/pr.nutritionmx/?igshid=YmMyMTA2M2Y=">
                <BsInstagram size={55} color={"red"} className="mailIcon" />
              </a>
              <a href="https://wa.me/525516820762">
                <BsWhatsapp size={55} color={"green"} className="mailIcon" />
              </a>

              {/* <p>Get in touch with me at anytime if you have any question.</p>
                        <p>Ues the form to the righ or my details below and I'll get back to you ASAP.</p> */}
              {/* <a href="mailto:liangli.0311@gmail.com" subject="Ciao Liang">liangli.0311@gmail.com</a>   */}
            </ContactInfo>
          </div>

          <Card>
            <h1>¡Contactanos!</h1>
            <Form onSubmit={this.handleSubmit}>
              {/* <TextInput
                {...name}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
              /> */}
              <TextInput
                {...email}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
              />
              <TextArea
                {...message}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
              />
              <div className="enviar">
                <Button>Enviar</Button>

                <Recaptcha
                  sitekey="6Lc9hngeAAAAALwbAJ-IRkBfsY-BoxqIGgxEwX0B"
                  onChange={this.recaptchacallback}
                />
              </div>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}

export default Contact;
