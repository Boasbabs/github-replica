import React, { Component } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import OverviewTab from "../overviewTab";
import StarsTab from "../starsTab";
import FollowersTab from "../followersTab";
import RepositoriesTab from "../repositoriesTab";
import UserProfile from "../userProfile";
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

class App extends Component {
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
      <div className="App">
        <Navbar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          username={username}
        />
        <Container>
          <Grid columns={2} padded>
            <Grid.Column width={4}>
              <UserProfile
                username={username}
                avatar={avatar}
                location={location}
                name={name}
              />
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

              <OverviewTab></OverviewTab>
              {/* <RepositoriesTab></RepositoriesTab> */}
              {/* <StarsTab></StarsTab> */}
              {/* <FollowersTab /> */}
            </Grid.Column>
          </Grid>
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;
