import { useState } from "react";
import { InputProps } from "./Input.interface";

const InputField = ({ label, name, type, placeholder, value, onChange, error, onBlur, touched, ...props }: InputProps) => {
  const [values, setValues] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues(event.currentTarget.value)
  }

  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="text-sm font-bold text-slate-400">
        {label}
      </label>
      {type === 'textarea' 
      ? <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={values}
        onChange={handleChange}
        onBlur={onBlur}
        rows={4}
        className="border rounded-lg border-slate-400 p-2 color-slate-400 bg-black w-full"
        {...props}
      /> 
      : <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={values}
        onChange={handleChange}
        onBlur={onBlur}
        className="border rounded-lg border-slate-400 p-2 color-slate-400 bg-black"
        {...props}
      />}
      {error && touched && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  )
};

export default InputField;