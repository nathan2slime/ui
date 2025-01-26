'use client'

import { ptBR } from 'date-fns/locale'
import { BellRing, Check, Home } from 'lucide-react'
import { useState } from 'react'
import { Astronaut } from 'react-kawaii'
import { twMerge } from 'tailwind-merge'

import { Button } from '~/components/ui/button'
import { Calendar } from '~/components/ui/calendar'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card'

const notifications = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago'
  },
  {
    title: 'You have a new message!',
    description: '1 hour ago'
  },
  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago'
  }
]

const Index = () => {
  const [value, setValue] = useState(new Date())

  return (
    <div className="w-screen flex gap-3 relative flex-wrap p-4 h-screen bg-tsu-surface">
      <Astronaut className="absolute top-0" />
      <Card className={twMerge('w-[380px] h-fit flex-shrink-0')}>
        <CardHeader>
          <CardTitle className="text-tsu-iris-foreground">Notifications</CardTitle>
          <CardDescription>You have 3 unread messages.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className=" flex items-center text-tsu-text space-x-4 rounded-md border-tsu-muted/50 border p-4">
            <BellRing />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">Push Notifications</p>
              <p className="text-sm text-muted-foreground">Send notifications to device.</p>
            </div>
          </div>
          <div>
            {notifications.map((notification, index) => (
              <div key={index} className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-tsu-love" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">{notification.title}</p>
                  <p className="text-sm text-muted-foreground">{notification.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Check /> Mark all as read
          </Button>
        </CardFooter>
      </Card>

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
