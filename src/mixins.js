import { css } from 'styled-components'
import is from 'styled-is'
import prop from './styled-prop'

export const backgroundMixin = css`
  ${is('bg')`
    background: ${props => props.bg};
  `};
`

export const borderMixin = css`
  ${is('b')`
    border: ${props => props.b};
  `};

  ${is('bx')`
    border-left: ${props => props.bx};
    border-right: ${props => props.bx};
  `};

  ${is('by')`
    border-top: ${props => props.by};
    border-bottom: ${props => props.by};
  `};

  ${is('bt')`
    border-top: ${props => props.bt};
  `};

  ${is('br')`
    border-right: ${props => props.br};
  `};

  ${is('bb')`
    border-bottom: ${props => props.bb};
  `};

  ${is('bl')`
    border-left: ${props => props.bl};
  `};
`

export const dimensionsMixin = css`
  ${is('width')`
    ${prop('width').is('remaining')`
      flex: 1;
    `};

    ${prop('width').isNot('remaining')`
      /* Hack to get width to behave similar to display: block behaviour */
      width: ${props => props.width} !important;
    `};
  `};

  ${is('height')`
    ${prop('height').is('remaining')`
      flex: 1;
    `};

    ${prop('height').isNot('remaining')`
      height: ${props => props.height};
    `};
  `};

  ${is('maxWidth')`
    max-width: ${props => props.maxWidth};
  `};
`

export const paddingMixin = css`
  ${is('p')`
    padding: ${props => props.p};
  `};

  ${is('px')`
    padding-left: ${props => props.px};
    padding-right: ${props => props.px};
  `};

  ${is('py')`
    padding-top: ${props => props.py};
    padding-bottom: ${props => props.py};
  `};

  ${is('pt')`
    padding-top: ${props => props.pt};
  `};

  ${is('pr')`
    padding-right: ${props => props.pr};
  `};

  ${is('pb')`
    padding-bottom: ${props => props.pb};
  `};

  ${is('pl')`
    padding-left: ${props => props.pl};
  `};
`
