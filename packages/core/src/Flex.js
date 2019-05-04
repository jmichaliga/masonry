import styled from 'styled-components'
import {
  alignItems,
  color,
  flexWrap,
  flexDirection,
  justifyContent,
  space,
  width
} from 'styled-system'
import theme from './theme'

const Flex = styled.div`
  display: flex;
  ${alignItems}
  ${color}
  ${flexDirection}
  ${flexWrap}
  ${justifyContent}
  ${space}
  ${width}
`

Flex.defaultProps = {
  theme
}

Flex.propTypes = {
  ...alignItems.propTypes,
  ...color.propTypes,
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...justifyContent.propTypes,
  ...space.propTypes,
  ...width.propTypes
}

Flex.displayName = 'Flex'

export default Flex
