import styled from 'styled-components'
import bgHeader from '../../assets/images/news_articles.jpg'
import colors from '../../utils/Theme/colors'

const Head = styled.header`
  padding: 3em 0 8em 0;
  background: url(${bgHeader}) no-repeat center center fixed;
  background-size: cover;
  height: 100%;
  overflow: hidden;
  border-bottom: 30px solid ${colors.black};
  border-top: 30px solid ${colors.black};
`
export default Head
