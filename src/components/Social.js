import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const SocialButton = () => (
  <div>
    <Button color='facebook'>
      <Icon name='facebook' /> Facebook
    </Button>
    <Button color='linkedin'>
      <Icon name='linkedin' /> LinkedIn
    </Button>
    <Button color='instagram'>
      <Icon name='instagram' /> Instagram
    </Button>
  </div>
)

export default SocialButton
