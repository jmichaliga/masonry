import styled from 'styled-components'
import { color, space, textAlign, width } from 'styled-system'

import theme from './theme'

const Box = styled.div`
  ${color} ${space} ${textAlign} ${width}
`

Box.defaultProps = {
  theme: theme
}

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...color.propTypes,
  ...textAlign.propTypes
}

Box.displayName = 'Box'

export default Box
