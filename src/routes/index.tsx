import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

import { HeroCTA } from '../components/herocta.comp'

function Home() {
  return (
    <>
      <HeroCTA />
    </>
  )
}
