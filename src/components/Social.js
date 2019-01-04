import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const SocialButton = () => (
  <div>
    <Button color='facebook' href='https://www.facebook.com/kat.c.tran'>
      <Icon name='facebook' /> Facebook
    </Button>
    <Button color='linkedin' href='https://www.linkedin.com/in/katrinactran/'>
      <Icon name='linkedin' /> LinkedIn
    </Button>
    <Button color='instagram' href='https://www.instagram.com/_kattran/?hl=en'>
      <Icon name='instagram' /> Instagram
    </Button>
  </div>
)

export default SocialButton
