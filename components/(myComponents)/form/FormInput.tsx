
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export type FormInputProps = {
  type?: string
  name: string
  id?: string
  label?: string
  default?: string
  placeholder?: string
  defaultValue?: string
}

const FormInput = (props: FormInputProps) => {
  const { name, id, type = 'text', label, defaultValue, placeholder } = props

  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">{label || name}</Label>
      <Input
        className="mt-1  "
        type={type}
        name={name}
        id={name}
        defaultValue={defaultValue}
        placeholder={placeholder}

      />
    </div>
  )
}
export default FormInput