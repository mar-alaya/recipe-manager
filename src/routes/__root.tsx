import { Outlet, createRootRoute } from '@tanstack/react-router'

import '../styles.css'
import { NavBar } from '../components/navbar.comp'

import { ClerkProvider } from '@clerk/react'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <ClerkProvider>
        <NavBar />
        <Outlet />
      </ClerkProvider>
    </>
  )
}
