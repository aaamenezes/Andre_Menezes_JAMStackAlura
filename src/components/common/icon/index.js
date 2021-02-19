import styled from "styled-components"

const Icon = styled.i`
  font-size: ${ ({theme}) => theme.fontSize.superText };
  color: ${ ({theme}) => theme.color.primary.normal };
  transition: ${ ({theme}) => theme.transition.medium };
  cursor: pointer;

  &:hover {
    transform: scale(1.8)
  }
`

function IconWrapper(props) {
  switch(props.type) {
    case 'bars':
      return <Icon className="fas fa-bars" />
    case 'github':
      return <Icon className="fab fa-github" />
    case 'twitter':
      return <Icon className="fab fa-twitter" />
    case 'medium':
      return <Icon className="fab fa-medium" />
  }
}

export default IconWrapper