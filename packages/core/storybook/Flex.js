import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Flex, Box } from '../src'
import { addDecorator } from '@storybook/react/dist/client/preview'
addDecorator(withInfo)

storiesOf('Flex', module)
  .add('Basic', () => (
    <Flex alignItems="center">
      <Box width={1 / 2} p={3} color="white" bg="blue">
        Flex
      </Box>
      <Box width={1 / 2} p={1} color="white" bg="green">
        Box
      </Box>
    </Flex>
  ))
  .add('Wrap', () => (
    <Flex flexWrap="wrap">
      <Box width={[1, 1 / 2]} p={3} color="white" bg="blue">
        Flex
      </Box>
      <Box width={[1, 1 / 2]} p={1} color="white" bg="green">
        Wrap
      </Box>
    </Flex>
  ))
  .add('Justify', () => (
    <Flex justifyContent="space-around">
      <Box width={1 / 3} p={2} color="white" bg="blue">
        Flex
      </Box>
      <Box width={1 / 3} p={2} color="white" bg="green">
        Justify
      </Box>
    </Flex>
  ))
