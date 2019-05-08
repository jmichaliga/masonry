/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import { shallowWithTheme } from 'enzyme-theme-utils'
import Map from '../src'

let wrapper
describe('Map', () => {
  test('Does not error with no props', () => {
    wrapper = shallowWithTheme(<Map />).toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
