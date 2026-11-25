import { createFileRoute } from '@tanstack/react-router'
import { HeroCTA } from '../../components/herocta.comp'

export const Route = createFileRoute('/__public/')({ component: Home })

function Home() {
  return (
    <>
      <HeroCTA />
    </>
  )
}
