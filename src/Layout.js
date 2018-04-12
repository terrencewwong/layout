import styled from 'styled-components'
import is from 'styled-is'
import styledMap from 'styled-map'
import prop from './styled-prop'
import { backgroundMixin, dimensionsMixin, paddingMixin } from './mixins'

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
  ${dimensionsMixin};
  ${paddingMixin};

  display: flex;

  ${prop('flow').is('left-right')`
    flex-direction: row;
    align-items: ${yAlign};
    justify-content: ${xAlign};

    ${prop('spaceBetweenChildren').is('remaining')`
      justify-content: space-between;
    `};

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
        margin-bottom: ${props => props.spaceBetweenChildren};
      }
    `};

    & > .__layout__ {
      width: 100%;
    }
  `};
`
Layout.defaultProps = {
  flow: 'top-bottom'
}

export default Layout
