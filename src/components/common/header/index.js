import Container from '../container'
import Icon from '../../common/icon'
import theme from '../../../theme'

function HeaderWrapper() {
  return (
    <Container
      tag='header'
      display='flex'
      alignItems='center'
      height='60px'
      boxShadow='0 0 30px -20px black'
      backgroundColor={theme.color.support.white}
    >
      <Icon type='bars' />
    </Container>
  )
}

export default HeaderWrapper