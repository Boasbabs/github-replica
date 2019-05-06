import React, { Component, Fragment } from "react";
import { Link} from "react-router-dom";
import { Menu, Input, Icon, Dropdown, Image, Form } from "semantic-ui-react";
import Logo from "../images/githubmarklight32.png";

class Navbar extends Component {
  state = { activeItem: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { handleSubmit, handleChange, username } = this.props;

    const { activeItem } = this.state;

    return (
      <Fragment>
        <Menu inverted borderless size="large">
          <Menu.Item>
            <Link to="/">
            <img alt="site logo" src={Logo} />
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Form onSubmit={handleSubmit}>
              <Input
              style={{ width: "300px" }}
                icon="search"
                placeholder="Search or jump to"
                onChange={handleChange}
                value={username}
                name="username"
              />
            </Form>
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
      </Fragment>
    );
  }
}
export default Navbar;
