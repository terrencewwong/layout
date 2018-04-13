import styled from 'styled-components'
import is from 'styled-is'
import styledMap from 'styled-map'
import prop from './styled-prop'
import {
  backgroundMixin,
  borderMixin,
  dimensionsMixin,
  paddingMixin
} from './mixins'

const yAlign = styledMap('yAlign', {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
  default: 'flex-start'
})
const xAlign = styledMap('xAlign', {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
  default: 'flex-start'
})

const Layout = styled.div.attrs({
  className: '__layout__'
})`
  ${backgroundMixin};
  ${borderMixin};
  ${dimensionsMixin};
  ${paddingMixin};

  box-sizing: border-box;
  display: flex;

  /* Is this a good idea...?
   * Maybe this is okay, because the idea is that
   * ALL layout should be done with this component
   */
  position: relative;

  /* Is this a good idea...?
   * Adding this property to get width/height
   * behaviour more like display: block
   */
  flex-shrink: 0;

  ${prop('flow').is('left-right')`
    flex-direction: row;
    align-items: ${yAlign};
    justify-content: ${xAlign};

    ${is('spaceBetweenChildren')`
      & > *:not(:last-child) {
        ${prop('spaceBetweenChildren').isNot('remaining')`
          margin-right: ${props => props.spaceBetweenChildren};
        `};
      }
    `};
  `};

  ${prop('flow').is('top-bottom')`
    flex-direction: column;
    align-items: ${xAlign};
    justify-content: ${yAlign};

    ${is('spaceBetweenChildren')`
      & > *:not(:last-child) {
        ${prop('spaceBetweenChildren').isNot('remaining')`
          margin-bottom: ${props => props.spaceBetweenChildren};
        `};
      }
    `};

    & > .__layout__ {
      width: 100%;
    }
  `};

  ${prop('spaceBetweenChildren').is('remaining')`
    justify-content: space-between;
  `};
`
Layout.defaultProps = {
  flow: 'top-bottom'
}

export default Layout
