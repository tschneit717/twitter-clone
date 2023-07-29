import { FormProps } from "./Form.interface"
"use client"
const Form = ({ children, onSubmit }: FormProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>
    ) => {
    event.preventDefault()
    onSubmit(event.currentTarget.elements)
    event.currentTarget.reset()
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      {children}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
        type="submit"
      >
        Submit
      </button>
    </form>
  )
}

export default Form