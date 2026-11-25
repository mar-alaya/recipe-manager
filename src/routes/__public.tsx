import { createFileRoute, Outlet } from '@tanstack/react-router'
import { NavBar } from '#/components/navbar.comp'

export const Route = createFileRoute('/__public')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}
