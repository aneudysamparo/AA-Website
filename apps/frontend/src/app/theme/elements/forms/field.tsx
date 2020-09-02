import * as React from "react";
import { IErrors } from "./form";

/* The available editors for the field */
type Editor = "textbox" | "multilinetextbox" | "dropdown";

export interface IFieldProps {
  /* The unique field name */
  id: string;

  /* The label text for the field */
  label?: string;

  /* The editor for the field */
  editor?: Editor;

  /* The drop down items for the field */
  options?: string[];

  /* The field value */
  value?: any;

  /* The placeholder field */
  placeHolder?: string;

  type?: string;
}

export const Field: React.SFC<IFieldProps> = ({
  id,
  label,
  placeHolder,
  editor,
  options,
  type,
  value
}) => {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}

      {editor!.toLowerCase() === "textbox" && (
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeHolder}
          onChange={
            (e: React.FormEvent<HTMLInputElement>) =>
              console.log(e) /* TODO: push change to form values */
          }
          onBlur={
            (e: React.FormEvent<HTMLInputElement>) =>
              console.log(e) /* TODO: validate field value */
          }
        />
      )}

      {editor!.toLowerCase() === "multilinetextbox" && (
        <textarea
          id={id}
          value={value}
          placeholder={placeHolder}
          onChange={
            (e: React.FormEvent<HTMLTextAreaElement>) =>
              console.log(e) /* TODO: push change to form values */
          }
          onBlur={
            (e: React.FormEvent<HTMLTextAreaElement>) =>
              console.log(e) /* TODO: validate field value */
          }
        />
      )}

      {editor!.toLowerCase() === "dropdown" && (
        <select
          id={id}
          name={id}
          value={value}
          placeholder={placeHolder}
          onChange={
            (e: React.FormEvent<HTMLSelectElement>) =>
              console.log(e) /* TODO: push change to form values */
          }
          onBlur={
            (e: React.FormEvent<HTMLSelectElement>) =>
              console.log(e) /* TODO: validate field value */
          }
        >
          <option value="" selected>----Select One----</option>
          {options &&
            options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
        </select>
      )}

      {/* TODO - display validation error */}
    </div>
  );
};
Field.defaultProps = {
  editor: "textbox"
};
