import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const SocialButton = () => (
  <span>
    <Button color='facebook' href='https://www.facebook.com/kat.c.tran'>
      <Icon name='facebook' /> Facebook
    </Button>
    <Button color='linkedin' href='https://www.linkedin.com/in/katrinactran/'>
      <Icon name='linkedin' /> LinkedIn
    </Button>
    <Button color='instagram' href='https://www.instagram.com/_kattran/?hl=en'>
      <Icon name='instagram' /> Instagram
    </Button>
	 <Button color='GitHub' href='https://github.com/kattran611'>
		 <Icon name='GitHub' /> GitHub
	 </Button>
 </span>
)

export default SocialButton;
