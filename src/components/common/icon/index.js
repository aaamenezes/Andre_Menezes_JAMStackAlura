function IconWrapper(props) {
  switch(props.type) {
    case 'bars':
      return <i class="fas fa-bars"></i>
    case 'github':
      return <i class="fab fa-github"></i>
    case 'twitter':
      return <i class="fab fa-twitter"></i>
    case 'medium':
      return <i class="fab fa-medium"></i>
  }
}

export default IconWrapper