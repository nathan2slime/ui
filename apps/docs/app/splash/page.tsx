import { Home } from '~/components/home'
import { Navbar } from '~/components/navbar'

const Splash = () => {
  return (
    <div className="w-screen h-screen bg-tsu-surface flex flex-col justify-center p-4 overflow-hidden">
      <Navbar />

      <Home />
    </div>
  )
}

export default Splash
