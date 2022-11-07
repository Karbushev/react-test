import Select from 'react-select';
import { ReactElement } from 'react';
import "./My-select.scss"

export function MySelect(props: any): ReactElement {
  return (
    <Select
      {...props.field}
      onChange={(option) => props.form.setFieldValue(props.field.name, option)}
      onBlur={props.onBlur}
      value={props.value}
      isMulti={props.isMulti}
      defaultValue={props.defaultValue}
      name={props.name}
      options={props.options}
      className="my-select"
    />
  );
}
