'use client'

import { Input } from "../../ui/input"
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import { useState, useEffect } from 'react'


const NavSearch = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const [search, setsearch] = useState(searchParams.get('search')?.toString() || '')



  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams)


    if (value) {
      params.set('search', value)
    } else {
      params.delete('search')
    }
    replace(`${pathname}?${params.toString()}`)
  }
    , 600)


  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!searchParams.get('search')) {
      setsearch('')
    }

  }, [searchParams])


  return (
    <Input
      type="text"
      placeholder="find a property"
      className="w-full max-w-xs dark:bg-muted"
      value={search}
      onChange={(e) => {
        setsearch(e.target.value)
        handleSearch(e.target.value)
      }}



    />
  )
}
export default NavSearch