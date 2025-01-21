'use client'

import {
  type Locale,
  addDays,
  addMonths,
  addYears,
  eachDayOfInterval,
  format,
  getDay,
  getDaysInMonth,
  getTime,
  isEqual,
  setDate,
  startOfMinute,
  startOfWeek,
  subMonths,
  subYears
} from 'date-fns'
import { enUS } from 'date-fns/locale'
import type { HTMLMotionProps } from 'framer-motion'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { createContext, useContext } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import type { AppChildren } from '~/types'

/**
 * Type for a day in the calendar, which includes the date and the corresponding month.
 */
type CalendarDay = {
  date: Date
  month: 'current' | 'next' | 'previous'
}

/**
 * Context type defining the state and functions shared across the calendar.
 */
type CalendarContextType = {
  /**
   * Number of days to display in the calendar.
   * Defaults to 42, representing a full 6-week view (7 columns x 6 rows).
   */
  numberOfDays?: number

  /**
   * The current day, typically set to the present date.
   * Used to highlight today's date in the calendar.
   */
  currentDay?: Date

  /**
   * The currently selected date.
   * Represents the day that is selected or active in the calendar.
   */
  selectedDate?: Date

  /**
   * The base date used to calculate the visible month in the calendar.
   * Typically set to the first day of the month being viewed.
   */
  baseDate?: Date

  /**
   * Callback function triggered when a new date is selected.
   * The selected date is passed as an argument.
   */
  onDateChange?: (date: Date) => void

  /**
   * Locale settings used for formatting the date and localizing month/day names.
   * Allows customization of the calendar's language and date formatting.
   */
  locale?: Pick<Locale, 'localize' | 'formatLong' | 'options'>
}

/**
 * Props for the Calendar component, extending from CalendarContextType and AppChildren.
 */
type CalendarProps = CalendarContextType & AppChildren

const CalendarContext = createContext<CalendarContextType>({
  locale: enUS
})

/**
 * Calendar component that provides context and renders the basic structure.
 */
export const Calendar = ({ children, onDateChange, locale, selectedDate, numberOfDays }: CalendarProps) => {
  const currentDay = startOfMinute(new Date())
  const baseDate = (selectedDate && startOfMinute(selectedDate)) || currentDay

  return (
    <CalendarContext.Provider
      value={{
        onDateChange,
        numberOfDays,
        currentDay,
        selectedDate,
        baseDate,
        locale
      }}
    >
      <div className="relative h-fit border border-tsu-hlow w-full max-w-[340px] min-w-[340px] flex-shrink-0 overflow-hidden rounded-lg bg-tsu-base p-2">{children}</div>
    </CalendarContext.Provider>
  )
}

/**
 * Props for each day in the calendar grid.
 */
type DayComponentProps = {
  isActive: boolean
  isCurrentDay: boolean
  isInactive: boolean
} & HTMLMotionProps<'div'>

/**
 * Day component represents an individual day in the calendar.
 */
const Day = ({ isActive, isCurrentDay, isInactive, className, ...props }: DayComponentProps) => {
  const dayStyles = tv({
    base: 'grid h-10 w-full cursor-pointer place-items-center rounded-md text-tsu-surface-foreground text-center text-base',
    variants: {
      isCurrentDay: {
        true: 'text-tsu-text'
      },
      isActive: {
        true: 'bg-tsu-pine font-bold'
      },
      isInactive: {
        true: 'opacity-65 bg-tsu-surface'
      }
    },
    compoundVariants: [
      {
        isCurrentDay: true,
        isActive: false,
        className: 'font-bold text-tsu-love'
      },
      {
        isCurrentDay: false,
        isActive: false,
        isInactive: false,
        className: 'bg-tsu-surface'
      },
      {
        isCurrentDay: true,
        isActive: true,
        className: 'text-tsu-text bg-tsu-pine'
      }
    ]
  })

  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{
        background: isActive ? 'hsl(var(--pine) / 0.8)' : 'hsl(var(--surface))'
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      whileTap={{ scale: 0.9 }}
      {...props}
      className={dayStyles({ isCurrentDay, isInactive, isActive, className })}
    />
  )
}

/**
 * Button component used for navigation actions like changing months or years.
 */
type ActionButtonProps = HTMLMotionProps<'button'>
const ActionButton = (props: ActionButtonProps) => {
  return (
    <motion.button
      type="button"
      {...props}
      whileHover={{ opacity: 0.9 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="grid h-full w-[30px] flex-shrink-0 cursor-pointer place-items-center rounded-md bg-tsu-overlay text-tsu-overlay-foreground transition-colors duration-150 hover:text-tsu-foam"
    />
  )
}

const Content = () => {
  const { baseDate, selectedDate, numberOfDays = 42, locale, onDateChange, currentDay } = useContext(CalendarContext)

  const previousMonth = subMonths(baseDate!, 1)
  const nextMonth = addMonths(baseDate!, 1)
  const previousMonthDays = getDaysInMonth(previousMonth)
  const daysInCurrentMonth = getDaysInMonth(baseDate!)

  const firstDayOfMonth = new Date(baseDate!.getFullYear(), baseDate!.getMonth(), 1)
  const firstDayWeekIndex = getDay(firstDayOfMonth)

  const calendarDays = new Array(numberOfDays > 42 ? 42 : numberOfDays).fill(0).map((_, index) => {
    if (index + 1 - firstDayWeekIndex > daysInCurrentMonth) {
      const day = index + 1 - firstDayWeekIndex - daysInCurrentMonth
      return { date: startOfMinute(setDate(nextMonth, day)), month: 'next' }
    }

    if (index >= firstDayWeekIndex) {
      const day = index + 1 - firstDayWeekIndex
      return {
        date: startOfMinute(setDate(baseDate!, day)),
        month: 'current'
      }
    }

    const day = previousMonthDays - firstDayWeekIndex + index + 1
    return {
      date: startOfMinute(setDate(previousMonth, day)),
      month: 'previous'
    }
  }) satisfies CalendarDay[]

  return (
    <div className="mt-1 grid w-full grid-cols-7 gap-1 p-1">
      {calendarDays.map(({ date, month }) => (
        <Day
          key={getTime(date)}
          isInactive={month === 'previous' || month === 'next'}
          isCurrentDay={isEqual(date, currentDay!)}
          onClick={() => onDateChange && onDateChange(date)}
          onKeyDown={e => {
            if (e.key === 'Enter' && onDateChange) onDateChange(date)
          }}
          isActive={isEqual(startOfMinute(selectedDate!), date)}
        >
          {format(date, 'dd', { locale })}
        </Day>
      ))}
    </div>
  )
}

const Toolbar = () => {
  const { baseDate, locale, onDateChange } = useContext(CalendarContext)

  const handleNextMonth = () => {
    onDateChange && onDateChange(setDate(addMonths(baseDate!, 1), 1))
  }

  const handlePrevMonth = () => {
    onDateChange && onDateChange(setDate(subMonths(baseDate!, 1), 1))
  }

  const handleNextYear = () => {
    onDateChange && onDateChange(setDate(addYears(baseDate!, 1), 1))
  }

  const handlePrevYear = () => {
    onDateChange && onDateChange(setDate(subYears(baseDate!, 1), 1))
  }

  return (
    <div className="z-10 mb-2 flex h-12 w-full items-center justify-between rounded-md bg-tsu-surface p-2">
      <div className="flex h-full flex-shrink-0 items-center gap-1">
        <ActionButton onClick={handlePrevYear}>
          <ChevronsLeft strokeWidth={1} width={24} height={24} />
        </ActionButton>
        <ActionButton onClick={handlePrevMonth}>
          <ChevronLeft strokeWidth={1} width={24} height={24} />
        </ActionButton>
      </div>

      <span className="text-base font-semibold text-center capitalize tracking-wide text-tsu-base-foreground">{format(baseDate!, 'LLLL yyyy', { locale })}</span>

      <div className="flex h-full flex-shrink-0 items-center gap-1">
        <ActionButton onClick={handleNextMonth}>
          <ChevronRight strokeWidth={1} width={24} height={24} />
        </ActionButton>
        <ActionButton onClick={handleNextYear}>
          <ChevronsRight strokeWidth={1} width={24} height={24} />
        </ActionButton>
      </div>
    </div>
  )
}

const Week = () => {
  const { locale = enUS } = useContext(CalendarContext)

  // Get the start of the week and format each day.
  const weekStart = startOfWeek(new Date(), { weekStartsOn: 0 })
  const weekDays = eachDayOfInterval({
    start: weekStart,
    end: addDays(weekStart, 6)
  }).map(day => format(day, 'EEEEEE', { locale }))

  const today = format(new Date(), 'EEEEEE', { locale })

  return (
    <div className="flex h-8 w-full items-center justify-center gap-1 p-1">
      {weekDays.map(weekDay => (
        <div
          key={weekDay}
          className={twMerge(
            'grid h-full w-full cursor-default place-items-center rounded-md bg-tsu-surface text-center text-sm',
            today === weekDay ? 'font-semibold bg-tsu-pine/40 text-tsu-text' : 'text-tsu-text'
          )}
        >
          {weekDay}
        </div>
      ))}
    </div>
  )
}

/**
 * Week component renders the days of the week.
 */
Calendar.Week = Week
/**
 * Toolbar component for navigating between months and years.
 */
Calendar.Toolbar = Toolbar
/**
 * Content component renders the days of the month in a grid.
 */
Calendar.Content = Content
