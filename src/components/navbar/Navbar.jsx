import React, { Component } from "react";
import {
  Menu,
  Input,
  Icon,
  Dropdown,
  Container,
  Image
} from "semantic-ui-react";
import Logo from "../images/githubmarklight32.png";

class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu inverted borderless size="large">
          <Menu.Item>
            <img alt="site logo" src={Logo} />
          </Menu.Item>
          <Menu.Item>
            <Input inverted icon="search" placeholder="Search or jump to" />
          </Menu.Item>
          <Menu.Item
            name="pullRequest"
            active={activeItem === "pullRequest"}
            content="Pull request"
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name="Issues"
            active={activeItem === "Issues"}
            content="Issues"
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name="marketplace"
            active={activeItem === "marketplace"}
            content="Marketplace"
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="explore"
            active={activeItem === "explore"}
            content="Explore"
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Dropdown item trigger={<Icon name="bell" />}>
              <Dropdown.Menu>
                <Dropdown.Item>You have no notification</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item trigger={<Icon name="plus" />}>
              <Dropdown.Menu>
                <Dropdown.Item>New repository</Dropdown.Item>
                <Dropdown.Item>Import repository</Dropdown.Item>
                <Dropdown.Item>New gist</Dropdown.Item>
                <Dropdown.Item>New organization</Dropdown.Item>
                <Dropdown.Item>New project</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown
              item
              trigger={
                <Image
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  avatar
                />
              }
            >
              <Dropdown.Menu>
                <Dropdown.Item>
                  Signed in as <strong>Bob Smith</strong>
                </Dropdown.Item>
                <Dropdown.Item>Your profile</Dropdown.Item>
                <Dropdown.Item>Your repositories</Dropdown.Item>
                <Dropdown.Item>Your projects</Dropdown.Item>
                <Dropdown.Item>Your stars</Dropdown.Item>
                <Dropdown.Item>Your gist</Dropdown.Item>
                <Dropdown.Item>Help</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>

        <Container>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
          ipsam, porro possimus sequi nobis saepe veniam, ex temporibus
          molestias dolor nemo nesciunt magnam velit voluptates itaque explicabo
          non iste nihil.
        </Container>
      </div>
    );
  }
}

export default Navbar;
