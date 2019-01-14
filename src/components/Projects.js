import React from 'react'
import { Item } from 'semantic-ui-react'

const ItemProject = () => (
  <Item.Group>
    <Item>
      <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
      <Item.Content verticalAlign='middle'>
        <Item.Header as='a'>DevPoint Labs webpage</Item.Header>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
      <Item.Content verticalAlign='middle'>
        <Item.Header as='a' content='Rock, Paper, Scissors' />
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
      <Item.Content header='Tic Tac Toe' verticalAlign='middle' />
    </Item>
  </Item.Group>
)

export default ItemProject;
