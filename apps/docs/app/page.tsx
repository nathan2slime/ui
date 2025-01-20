'use client'

import { ptBR } from 'date-fns/locale'
import { Home } from 'lucide-react'
import { useState } from 'react'

import { Button } from '~/components/ui/button'
import { Calendar } from '~/components/ui/calendar'

const Index = () => {
  const [value, setValue] = useState(new Date())

  return (
    <div className="w-screen flex gap-3 p-4 h-screen bg-tsu-surface">
      <div className="border bg-tsu-base h-fit p-2 flex gap-2 rounded-lg border-tsu-muted/50">
        <Button variant="default">Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>

        <Button variant="default" size="icon">
          <Home className="w-4 h-4" />
        </Button>
      </div>

      <Calendar selectedDate={value} onDateChange={setValue} locale={ptBR}>
        <Calendar.Toolbar />
        <Calendar.Week />
        <Calendar.Content />
      </Calendar>
    </div>
  )
}

export default Index
