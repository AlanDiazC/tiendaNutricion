/** Components */
const Card = (props) => <div className="card col-sm-7">{props.children}</div>;

const Form = (props) => (
  <form className="form" onSubmit={props.onSubmit}>
    {props.children}
  </form>
);

const TextInput = (props) => (
  <div className="text-input">
    <label
      className={props.focus || props.value !== "" ? "label-focus" : ""}
      htmlFor={props.name}
    >
      {props.label}
    </label>
    <input
      className={props.focus || props.value !== "" ? "input-focus" : ""}
      type="text"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onInput={props.onInput}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  </div>
);

const TextArea = (props) => (
  <div className="text-area">
    <label
      className={props.focus || props.value !== "" ? "label-focus" : ""}
      htmlFor={props.name}
    >
      {props.label}
    </label>
    <textarea
      className={props.focus || props.value !== "" ? "input-focus" : ""}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onInput={props.onInput}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  </div>
);

const Button = (props) => (
  <input type="submit" className="btncito draw-border" value="Enviar" />
);

const ContactInfo = (props) => <div className="col-sm-5">{props.children}</div>;

export { Card, TextArea, Button, ContactInfo, Form, TextInput };
