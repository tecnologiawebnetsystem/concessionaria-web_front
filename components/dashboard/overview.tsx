"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 500000) + 100000,
  },
  {
    name: "Fev",
    total: Math.floor(Math.random() * 500000) + 100000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 500000) + 100000,
  },
  {
    name: "Abr",
    total: Math.floor(Math.random() * 500000) + 100000,
  },
  {
    name: "Mai",
    total: Math.floor(Math.random() * 500000) + 100000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 500000) + 100000,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `R$${value / 1000}k`}
        />
        <Bar dataKey="total" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
      </BarChart>
    </ResponsiveContainer>
  )
}

