import styled from 'styled-components'
//This is just an example of how to write styled components. Please
// Update and delete this comment

const fontSize = (chipsandsalsa) => {
  switch(chipsandsalsa) {
    case 'huge':
      return '6rem'
    case 'large':
      return '3rem'
    case 'medium':
      return '2rem'
    case 'small':
      return '1rem'
    case 'h1':
      return '6rem'
    case 'h2':
      return '3rem'
    case 'h3':
      return '2rem'
    case 'h4':
      return '1.5rem'
    case 'h5':
      return '1rem'
    case 'h6':
      return '.5rem'
    default:
      return '1.5rem'
  }
}

const color = (color) => {
  switch(color){
    case 'white':
      return '#fff !important'
    case 'orange':
     return '#ff5722'
    default:
      return '#fff'
  }
}

const subHeader = (sub=false) => {
  if(sub){
    return "0px 0px 15px 0px"
  } else {
    return "15px 0px 5px 0px"
  }  
}

const align = (adjust) => {
  switch(adjust){
    case 'left':
      return 'left'
    case 'right':
      return 'right'
    case 'center':
      return 'center'
    default:
      return 'left'
  }
}


export default styled.h1`
  margin: ${props => subHeader(props.sub)};
  text-align: ${props => align(props.align)};
  font-size: ${props => fontSize(props.chipsandsalsa)};
  font-family: 'Roboto Mono', monospace;
  color: ${props => color(props.bColor)};
`
