import { SignUp } from '@clerk/react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/__public/signup/$')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex justify-center m-5">
      <SignUp
        path="/signup"
        signInUrl="/signin"
        fallbackRedirectUrl={'/dashboard'}
        signInFallbackRedirectUrl={'/dashboard'}
        fallback={'Formular lädt...'}
      />
    </div>
  )
}
