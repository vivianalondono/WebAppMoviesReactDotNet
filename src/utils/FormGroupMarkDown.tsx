import { Field, useFormikContext } from "formik";
import ReactMarkdown from "react-markdown";
import './FormGroupMarkDown.css';

export default function FormGroupMarkDown(props: formGroupMarkDownProps){
    const {values} = useFormikContext<any>();
    return(
        <div className="form-group form-markdown">
            <div>
                <label>{props.label}</label>
                <div>
                    <Field name={props.field} as="textarea" className="form-textarea" />
                </div>
            </div>
            <div>
                <label>{props.label} (previw):</label>
                <div className="markdown-container">
                    <ReactMarkdown>{values[props.field]}</ReactMarkdown>
                </div>
            </div>
        </div>
        
    )
}

interface formGroupMarkDownProps{
    field: string;
    label: string;
}