import styled from 'styled-components'
import { Card } from '@material-ui/core'
import color from '../../utils/Theme/colors'

const DataCard = styled(Card)`
  & .MuiCardMedia-root {
    height: 200px;
  }
  & .MuiButtonBase-root {
    padding: 1.2em;
    width: 100%;
    background: ${color.graphite};
    &:hover {
      background: ${color.black};
    }
  }
`
export default DataCard
