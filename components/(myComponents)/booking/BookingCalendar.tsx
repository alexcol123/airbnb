'use client';

import { Calendar } from '@/components/ui/calendar';
import { useEffect, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { DateRange } from 'react-day-picker';
import { useProperty } from '@/utils/store';

import {
  generateDisabledDates,
  generateDateRange,
  defaultSelected,
  generateBlockedPeriods,
} from '@/utils/calendar';

const BookingCalendar = () => {

  const currentData = new Date();
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);


  useEffect(() => {
    useProperty.setState({ range })

  }, [range])


  return (
    <Calendar mode='range' defaultMonth={currentData} selected={range}
      onSelect={setRange} className='mb-4' />
  )
}
export default BookingCalendar