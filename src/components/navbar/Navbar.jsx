import React, { Component } from "react";
import Footer from "../footer";
import OverviewTab from "../overviewTab";
import StarsTab from "../starsTab";
import FollowersTab from "../followersTab";
import RepositoriesTab from "../repositoriesTab";
import {
  Menu,
  Input,
  Icon,
  Dropdown,
  Container,
  Image,
  Form,
  Grid,
  Card,
  Header,
  Button,
  List,
  Divider,
  Label
} from "semantic-ui-react";
import Logo from "../images/githubmarklight32.png";
import { API_PATH_BASE, DEFAULT_QUERY } from "../../utils/constants";
import { userAPICall } from "../../utils/api";

class Navbar extends Component {
  state = {
    username: DEFAULT_QUERY,
    name: "",
    avatar: "",
    location: "",
    repos: "",
    followers: "",
    following: "",
    homeUrl: "",
    notFound: ""
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleSubmit = event => {
    event.preventDefault();
    this.fetchGitUser(this.state.username);

    this.setState({
      username: "",
      name: "",
      avatar: "",
      location: "",
      repos: "",
      followers: "",
      following: "",
      homeUrl: "",
      notFound: ""
    });
  };

  handleChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  componentDidMount() {
    this.fetchGitUser(DEFAULT_QUERY);
  }

  fetchGitUser(username) {
    userAPICall
      .getBio(username)
      .then(result => {
        this.setState({
          username: result.login,
          name: result.name,
          avatar: result.avatar_url,
          location: result.location,
          repos: result.public_repos,
          followers: result.followers,
          following: result.following,
          homeUrl: result.html_url,
          notFound: result.message
        });
      })
      .catch(error => {
        // handle error
        console.log(error);
        alert("An Error occurred or Username does not exist");
      });
  }

  render() {
    const {
      activeItem,
      username,
      name,
      avatar,
      location,
      followers,
      following,
      repos
    } = this.state;

    return (
      <div>
        <Menu inverted borderless size="large">
          <Menu.Item>
            <img alt="site logo" src={Logo} />
          </Menu.Item>
          <Menu.Item>
            <Form onSubmit={this.handleSubmit}>
              <Input
                icon="search"
                placeholder="Search or jump to"
                onChange={this.handleChange}
                value={this.state.username}
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

        <Container>
          <Grid columns={2} padded>
            <Grid.Column width={4}>
              <Card>
                <Image src={avatar} />
                {/* <Card.Content extra>
                  <p>Location: {location || "not provided"}</p>
                </Card.Content> */}
              </Card>
              <Header as="h1">
                {name}
                <Header.Subheader>{username}</Header.Subheader>
              </Header>
              <Button fluid>Follow</Button>
              <List>
                <List.Item>
                  <a href="">Block or report user</a>
                </List.Item>
              </List>
              <Divider hidden />
              <Divider />
              <Divider hidden />
              <List>
                <List.Item>
                  <List.Icon name="users" />
                  <List.Content>Bio details here</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon
                    name="map marker alternate"
                    style={{ paddingRight: "7px" }}
                  />
                  <List.Content style={{ paddingRight: "7px" }}>
                    {location || "not provided"}
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="mail" />
                  <List.Content>
                    <a href="mailto:jack@semantic-ui.com">Email details here</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify" />
                  <List.Content>
                    <a href="">Blog details here</a>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={12}>
              <Menu pointing secondary widths={6}>
                <Menu.Item
                  name="Overview"
                  active={activeItem === "Overview"}
                  onClick={this.handleItemClick}
                >
                  Overview
                </Menu.Item>
                <Menu.Item
                  name="Repositories"
                  active={activeItem === "Repositories"}
                  onClick={this.handleItemClick}
                >
                  Repositories
                  <Label circular size="mini">
                    {repos}
                  </Label>
                </Menu.Item>
                <Menu.Item
                  name="Projects"
                  active={activeItem === "Projects"}
                  onClick={this.handleItemClick}
                >
                  Projects
                  <Label circular size="mini">
                    0
                  </Label>
                </Menu.Item>
                <Menu.Item
                  name="Stars"
                  active={activeItem === "Stars"}
                  onClick={this.handleItemClick}
                >
                  Stars
                  <Label circular size="mini">
                    0
                  </Label>
                </Menu.Item>
                <Menu.Item
                  name="Followers"
                  active={activeItem === "Followers"}
                  onClick={this.handleItemClick}
                >
                  Followers
                  <Label circular size="mini">
                    {followers || 0}
                  </Label>
                </Menu.Item>
                <Menu.Item
                  name="Following"
                  active={activeItem === "Following"}
                  onClick={this.handleItemClick}
                >
                  Following
                  <Label circular size="mini">
                    {following || 0}
                  </Label>
                </Menu.Item>
              </Menu>

              {/* <OverviewTab></OverviewTab> */}
              {/* <RepositoriesTab></RepositoriesTab> */}
              {/* <StarsTab></StarsTab> */}
              <FollowersTab></FollowersTab>
              
            </Grid.Column>
          </Grid>
          <Footer />
        </Container>
      </div>
    );
  }
}
export default Navbar;
