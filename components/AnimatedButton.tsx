import { Button, ButtonInsideBlock, ButtonInsideText } from "../styles/AnButton.module";

interface TButton {
  text: string
  initialColor: string
  hoverColor: string
  textColor: string
  textHover: string
  width: string
  height: string
  textSize: string
}

export const AnimatedButton = (
  {
    text, 
    initialColor, 
    hoverColor, 
    textColor, 
    textHover,
    width,
    height,
    textSize,
  }: TButton
) => {
  return (
    <Button width={width} height={height} iColor={initialColor}>
      <ButtonInsideText 
        iColor={textColor} hColor={textHover} size={textSize} 
      >{text}
      </ButtonInsideText>
      <ButtonInsideBlock hColor={hoverColor} />
    </Button>
  )
}