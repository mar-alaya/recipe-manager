import { SignIn } from '@clerk/react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/__public/signin/$')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex justify-center m-5">
      <SignIn
        path="/signin"
        signUpUrl="/signup"
        fallbackRedirectUrl={'/dashboard'}
        signUpFallbackRedirectUrl={'/dashboard'}
        fallback={'Formular lädt...'}
      />
    </div>
  )
}
