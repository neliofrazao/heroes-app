import styled from 'styled-components'
import { Card } from '@material-ui/core'
import color from '../../utils/Theme/colors'

const DataCard = styled(Card)`
  & .MuiCardMedia-root {
    height: 310px;
  }
  & .MuiButtonBase-root {
    color: #fff;
    padding: 1.2em 1em;
    width: 100%;
    background: ${color.graphite};
    &:hover {
      background: ${color.black};
    }
  }
`
export default DataCard
