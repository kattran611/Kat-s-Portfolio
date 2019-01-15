import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu tabular>
        <Menu.Item name='Katrina Tran' active={activeItem === 'KatrinaTran'} onClick={this.handleItemClick} />
        <Menu.Item name='Projects' active={activeItem === 'projects'} onClick={this.handleItemClick} />
		  <Menu.Item name='Contact' active={activeItem === 'contact'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}
