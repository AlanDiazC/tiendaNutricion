import React from "react";
import "./Form.css";

const FormField = ({ label, type, name, placeholder, required }) => {
  return (
    <div className="FormFieldContainer">
      <label className="Label" htmlFor={name}>{label}</label>
      <input className="Input" name={name} type={type} placeholder={placeholder} required />
    </div>
  );
};

const BillingDetailsFields = () => {
    return (
      <>
        <FormField
          name="name"
          label="Nombre"
          type="text"
          placeholder="Jane Doe"
          required
        />
        <FormField
          name="email"
          label="Email"
          type="email"
          placeholder="jane.doe@example.com"
          required
        />
        <FormField
          name="address"
          label="Direccion"
          type="text"
          placeholder="185 Berry St. Suite 550"
          required
        />
        <FormField
          name="city"
          label="Ciudad"
          type="text"
          placeholder="San Francisco"
          required
        />
      </>
    );
  };
  
  export default BillingDetailsFields;