import styled from 'styled-components'

const CharacterContainer = styled.div`
  width: 100%;
  & .character-image {
    border: 11px solid;
    & img {
      width: 100%;
    }
  }
`

export default CharacterContainer
