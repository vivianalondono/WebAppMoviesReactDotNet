import { ErrorMessage, Field } from "formik";
import ShowErrorField from "./ShowErrorField";

export default function FormGroupText(props: formGroupsTextProps) {
  return (
    <div className="form-group">
      {props.label ? <label htmlFor={props.field}>{props.label}</label>: null}
      <Field name={props.field} className="form-control" 
      placeholder={props.placeholder}/>
      <ErrorMessage name={props.field}>
        {(message) => <ShowErrorField message={message}/>}
      </ErrorMessage>
    </div>
  );
}

interface formGroupsTextProps {
  field: string;
  label?: string;
  placeholder?: string;
}
