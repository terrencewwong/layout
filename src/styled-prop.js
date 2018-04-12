import { css } from 'styled-components'

export default propName => ({
  is: value => (...args) => props => props[propName] === value && css(...args),
  isNot: value => (...args) => props =>
    props[propName] !== value && css(...args)
})
