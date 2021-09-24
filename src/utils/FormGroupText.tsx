import { ErrorMessage, Field } from "formik";
import ShowWErrorField from "./ShowErrorField";

export default function FormGroupText(props: formGroupsTextProps) {
  return (
    <div className="form-group">
      {props.label ? <label htmlFor={props.field}>{props.label}</label>: null}
      <Field name={props.field} className="form-control" 
      placeholder={props.placeholder}/>
      <ErrorMessage name={props.field}>
        {(message) => <ShowWErrorField message={message}/>}
      </ErrorMessage>
    </div>
  );
}

interface formGroupsTextProps {
  field: string;
  label?: string;
  placeholder?: string;
}
