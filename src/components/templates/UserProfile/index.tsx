'use client'

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
const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

import { getUserById } from '@/actions/getUserById';
import Loading from '@/app/loading';
import Button from '@/components/atoms/Button';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

interface User {
    _id: string;
    name: string;
    cargo: string;
}

export default function UserProfilePage() {

    const router = useRouter();
    const { _id } = useParams() as { _id: string };

    const { data, isLoading, error } = useQuery<User>({
        queryFn: async () => await getUserById(_id),
        queryKey: ["/User", _id]
    })

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <p>Erro ao carregar o usuário</p>
    }

    function routerBack() {
        router.back()
    }

    return (
        <div className='relative w-full h-full bg-zinc-900 text-zinc-50 flex flex-col items-center justify-center'>
            <Button className='absolute left-0 top-0' onClick={() => routerBack()}>Voltar</Button>
            <h1>Usuário</h1>
            <h2>{data?.name}</h2>
            <h2>{data?._id}</h2>
            <h2>{data?.cargo}</h2>
            <Card>
                <CardHeader>
                    <CardTitle>Area Chart - Stacked</CardTitle>
                    <CardDescription>
                        Showing total visitors for the last 6 months
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig}>
                        <AreaChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                left: 12,
                                right: 12,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent indicator="dot" />}
                            />
                            <Area
                                dataKey="mobile"
                                type="natural"
                                fill="var(--color-mobile)"
                                fillOpacity={0.4}
                                stroke="var(--color-mobile)"
                                stackId="a"
                            />
                            <Area
                                dataKey="desktop"
                                type="natural"
                                fill="var(--color-desktop)"
                                fillOpacity={0.4}
                                stroke="var(--color-desktop)"
                                stackId="a"
                            />
                        </AreaChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter>
                    <div className="flex w-full items-start gap-2 text-sm">
                        <div className="grid gap-2">
                            <div className="flex items-center gap-2 font-medium leading-none">
                                Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                            </div>
                            <div className="flex items-center gap-2 leading-none text-muted-foreground">
                                January - June 2024
                            </div>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}