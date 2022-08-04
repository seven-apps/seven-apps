export type FlexProps = {
  flex?: number
  flexDirection?: 'row' | 'column' | 'column-reverse' | 'row-reverse'
  flexGrow?: number
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  theme?: any
}
