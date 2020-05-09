import styled from 'styled-components'

const Nav = styled.nav`
  text-align: right;
  & .MuiListItem-root {
    display: inline-block;
    width: auto;
  }
  & .MuiButton-text {
    color: #fff;
    font-size: 1em;
    &: hover {
      color: #fff;
      background: rgba(200, 200, 200, 0.2);
    }
  }
`

export default Nav
