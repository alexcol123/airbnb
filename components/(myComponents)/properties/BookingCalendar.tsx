'use client'
import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { DateRange } from 'react-day-picker'



const BookingCalendar = () => {

  const currentDate = new Date()

  const defaultSelected: DateRange = {
    from: undefined,
    to: undefined
  }

  const [range, setrange] = useState<DateRange | undefined>(defaultSelected)

  return (
    <Calendar
      mode='range'
      selected={range}
      onSelect={setrange} />
  )
}
export default BookingCalendar