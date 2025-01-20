'use client'

import { ptBR } from 'date-fns/locale'
import { useState } from 'react'

import { Button } from '~/components/ui/button'
import { Calendar } from '~/components/ui/calendar'

const Index = () => {
  const [value, setValue] = useState(new Date())

  return (
    <div className="w-screen h-screen bg-tsu-surface">
      <h1 className="font-bold text-lg ">Example</h1>
      <Button>Hello</Button>

      <Calendar selectedDate={value} onDateChange={setValue} locale={ptBR}>
        <Calendar.Toolbar />
        <Calendar.Week />
        <Calendar.Content />
      </Calendar>
    </div>
  )
}

export default Index
