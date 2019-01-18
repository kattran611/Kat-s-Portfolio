import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'


export default class NavBar extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu fixed={"top"} style={{backgroundColor: "#e4e4e4"}} tabular>
        <Menu.Item name='Katrina Tran' href = "katrinatran" active={activeItem === 'KatrinaTran'} onClick={this.handleItemClick} />
        <Menu.Item name='Projects' href = "#projects" active={activeItem === 'projects'} onClick={this.handleItemClick} />
		  <Menu.Item name='Contact' href = "#contact" active={activeItem === 'contact'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}
