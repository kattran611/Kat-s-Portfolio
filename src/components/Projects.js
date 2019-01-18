import React from 'react'
import { Item } from 'semantic-ui-react'
import {ProjectImage} from './Background'
import DPLHome from '../IMG/DPLHome.png'
import cabo from '../IMG/cabo.png'
import rockps from '../IMG/rockps.png'
// import ItemGroup from './Projects'


const ItemProject = () => (
  <Item.Group style={{padding: "30px", backgroundColor: "#94A6AB"}}>
    <Item>
      <ProjectImage size='medium' src={DPLHome} />
      <Item.Content verticalAlign='middle'>
        <Item.Header as='a' href="https://dpl-website.herokuapp.com/demo" target="_blank">DevPoint Labs webpage re-design</Item.Header>
		  	<p>Worked with a small team at DevPoint Labs creating the school's website using React, Rails, Redux, and Stripe.</p>
      </Item.Content>
	 </Item>

    <Item>
      <ProjectImage size='medium' src={rockps} />
      <Item.Content verticalAlign='middle'>
        <Item.Header as='a' href="https://github.com/kattran611/rock_paper_scissors"
		  	target="_blank"
			content='Rock, Paper, Scissors' />
			<p>We all remember playing Rock, Paper, Scissors as kids, right? Well, I created a Rock, Paper, Scissors game using plain JavaScript that will keep score. </p>
      </Item.Content>
	 </Item>
 </Item.Group>
)

export default ItemProject;
