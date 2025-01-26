import { TitleColorful } from '~/components/title-colorful'

export const Navbar = () => {
  return (
    <header className="bg-tsu-base px-6 flex items-center justify-between right-1/2 translate-x-1/2 w-fit h-16 fixed top-6 backdrop-blur-md border rounded-full border-tsu-hhigh">
      <div />

      <TitleColorful title="Korii" />

      <div />
    </header>
  )
}
