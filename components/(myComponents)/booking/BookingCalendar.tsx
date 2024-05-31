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
import { describe } from 'node:test';
import { Description } from '@radix-ui/react-toast';

const BookingCalendar = () => {
  const {toast} = useToast();

  const currentDate = new Date();

  console.log('currentDate', currentDate)
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  const bookings = useProperty((state) => state.bookings);

  const blockePeriods = generateBlockedPeriods({
    bookings,
    today: currentDate,
  });

  const unavailableDates = generateDisabledDates(blockePeriods);

  console.log('ubavailableDates', unavailableDates)



  useEffect(() => {
    const selectedRange = generateDateRange(range);
    
    const isDisabledDateIncluded = selectedRange.some((date) => {
      if (unavailableDates[date]) {
        setRange(defaultSelected);
        toast({
          description: 'Some dates are booked. Please select again.',
          variant: "destructive",
        });
        return true;
      }
      return false;
    });
    useProperty.setState({ range });
  }, [range]);

  return (
    <Calendar mode='range'
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
      className='mb-4'
      disabled={blockePeriods}
    />
  )
}
export default BookingCalendar