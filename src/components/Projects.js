import React from 'react'
import { Item } from 'semantic-ui-react'
import {ProjectImage} from './Background'
import DPLHome from '../IMG/DPLHome.png'
import cabo from '../IMG/cabo.png'
import rockps from '../IMG/rockps.png'


const ItemProject = () => (
  <Item.Group>
    <Item>
      <ProjectImage size='medium' src={DPLHome} />
      <Item.Content verticalAlign='middle'>
        <Item.Header as='a' href="https://dpl-website.herokuapp.com/demo" target="_blank">DevPoint Labs webpage</Item.Header>
		  	<p>Worked in a small team at DevPoint Labs creating the school's new website using React for the front-end and Rails for the back-end</p>
      </Item.Content>
    </Item>

    <Item>
      <ProjectImage size='medium' src={rockps} />
      <Item.Content verticalAlign='middle'>
        <Item.Header as='a' content='Rock, Paper, Scissors' />
      </Item.Content>
    </Item>

    <Item>
      <ProjectImage size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' />
      <Item.Content header='Tic Tac Toe' verticalAlign='middle' />
    </Item>
  </Item.Group>
)

export default ItemProject;
