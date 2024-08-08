"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

interface props{
  title: string
  description: string
  totalTasks: number
  tasksCheck: number
  percentCheck: string
}

const chartConfig = {
  quantidade: {
    label: "Qntd: ",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export default function Component({...rest}:props) {

  const numberTotal = rest.totalTasks
  const numberChecked = rest.tasksCheck
  const numberUnchecked = rest.totalTasks - rest.tasksCheck

  const chartData = [
    { tasks: "Total", quantidade: numberTotal },
    { tasks: "Feitas", quantidade: numberChecked },
    { tasks: "Não feitas", quantidade: numberUnchecked },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>{rest.title}</CardTitle>
        <CardDescription>{rest.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="tasks"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="quantidade" fill="var(--color-quantidade)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          As tarefas estão {rest.percentCheck}% concluídas <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Visualize a quantidade de tarefas recentes
        </div>
      </CardFooter>
    </Card>
  )
}
