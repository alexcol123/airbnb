import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Prisma } from "@prisma/client"

type PriceInputProps = {
  defaultValue?: number
}

// const name = Prisma.PropertyScalarFieldEnum.price

function PriceInput({ defaultValue }: PriceInputProps) {



  const name = 'price'
  return (
    <div className='mb-2'>
      <Label htmlFor='price' className='capitalize'>
        Price ($)
      </Label>
      <Input
        className="mt-1 "
        id={name}
        type='number'
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  )
}
export default PriceInput