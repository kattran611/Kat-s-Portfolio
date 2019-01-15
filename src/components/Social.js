import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const SocialButton = () => (
  <span>
	 {/* <Icon name='mail'/> kat.c.tran@gmail.com
    <Button color='facebook' target='_blank' href='https://www.facebook.com/kat.c.tran'>
      <Icon name='facebook' /> Facebook
    </Button>
    <Button color='linkedin' target='_blank' href='https://www.linkedin.com/in/katrinactran/'>

	 <Icon name='linkedin' /> LinkedIn
    </Button>
    <Button color='instagram' target='_blank' href='https://www.instagram.com/_kattran/?hl=en'>

	<Icon name='instagram' /> Instagram
	 </Button> */}
	 {/* <Button color='GitHub' target='_blank' href='https://github.com/kattran611'> */}

	<Icon name = "github"
		onClick = "http://github.com/kattran611"
		size = 'huge'
	/>

 </span>
)
export default SocialButton;
