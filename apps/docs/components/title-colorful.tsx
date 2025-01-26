import { onGetRandomPalette } from '~/actions/utils.action'

type Props = {
  title: string
}

export const TitleColorful = async ({ title }: Props) => {
  const palette = await onGetRandomPalette(title.length)

  return (
    <h1 className="font-extrabold text-5xl uppercase tracking-wider font-cuteFont">
      {title.split('').map((char, index) => (
        <span key={index} className="" style={{ color: palette[index] }}>
          {char}
        </span>
      ))}
    </h1>
  )
}
