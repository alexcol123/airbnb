import { Card, CardHeader } from "@/components/ui/card"

type StatsCardProps = { 
  title: string
  value: number

}

const StatsCard = ({title, value}: StatsCardProps ) => {
  return (
    <Card className="bg-muted">
      <CardHeader className="flex flex-row items-center justify-between">
        <h3 className="capitalize text-3xl font-bold">{title}</h3>
        <span className="text-primary text-5xl font-semibold ">{value}</span>
      </CardHeader>

    </Card>
  )
}
export default StatsCard