import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isAdminRoute = createRouteMatcher(['/admin(.*)'])

const isPublicRoute = createRouteMatcher(['/', '/properties(.*)'])

export default clerkMiddleware((auth, req) => {

  console.log(auth().userId)

  const isAdminUser = auth().userId === process.env.ADMIN_USER_ID

  if (isAdminRoute(req) && !isAdminUser) {
    return NextResponse.redirect(new URL('/', req.url))

  }

  if (!isPublicRoute(req)) auth().protect()
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}