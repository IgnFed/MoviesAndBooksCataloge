export default interface IStyle{
  backgroundColor?: string,
  border?: string,
  borderTop?: string,
  borderBottom?: string,
  borderLeft?: string,
  borderRight?: string,
  borderColor?: string,
  borderStyle?: 'dashed' | 'dotted' | 'double' | 'groove' | 'hidden',
  borderRadius?: string,
  textAlign?: 'center' | 'start' | 'end' | 'justify' | 'left' | 'right' | 'start',
  color?: string,
  outline?:string,
  outlineColor?:string 
}
