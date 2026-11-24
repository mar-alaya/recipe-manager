import { Outlet, createRootRoute } from '@tanstack/react-router'

import '../styles.css'
import { NavBar } from '../components/navbar.comp'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}
