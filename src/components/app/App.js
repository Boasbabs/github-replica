// Library import
import React, { Component } from "react";
import { Menu, Container, Grid, Label } from "semantic-ui-react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";

// Components import
import Navbar from "../navbar";
import Footer from "../footer";
import OverviewTab from "../overviewTab";
import StarsTab from "../starsTab";
import ProjectsTab from "../projectsTab";
import FollowersTab from "../followersTab";
import FollowingTab from "../followingTab";
import RepositoriesTab from "../repositoriesTab";
import UserProfile from "../userProfile";
import FourOhFour from "../fourOhfour";

// Utils import
import Routes from "../../routes";
import { DEFAULT_QUERY } from "../../utils/constants";
import { userAPICall } from "../../utils/api";

/**
 * App Component is the main component that other apps are composed in.
 * Component such as Footer, Navbar, OverviewTab etc
 */

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
    notFound: "",
    activeItem: "Overview"
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
      <Router>
        <div className="App">
          <Navbar
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            username={username}
          />
          <Container>
            <Grid columns={2} padded>
              <Grid.Column width={4}>
                {/* The UserProfile component */}
                <UserProfile
                  username={username}
                  avatar={avatar}
                  location={location}
                  name={name}
                />
              </Grid.Column>
              <Grid.Column width={12}>
                {/* The Menu tab here */}
                <Menu pointing secondary widths={6}>
                  <Menu.Item
                    name="Overview"
                    active={activeItem === "Overview"}
                    onClick={this.handleItemClick}
                    as={Link}
                    to="/"
                  >
                    Overview
                  </Menu.Item>
                  <Menu.Item
                    name="Repositories"
                    active={activeItem === "Repositories"}
                    onClick={this.handleItemClick}
                    as={Link}
                    to="/repos"
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
                    as={Link}
                    to="/projects"
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
                    as={Link}
                    to="/stars"
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
                    as={Link}
                    to="/followers"
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
                    as={Link}
                    to="/following"
                  >
                    Following
                    <Label circular size="mini">
                      {following || 0}
                    </Label>
                  </Menu.Item>
                </Menu>

                <Switch>
                  <Route
                    exact
                    path={Routes.root().root}
                    render={props => (
                      <OverviewTab {...props} username={username} />
                    )}
                  />
                  <Route
                    path={Routes.root().followers}
                    component={FollowersTab}
                  />
                  <Route
                    path={Routes.root().projects}
                    component={ProjectsTab}
                  />
                  <Route
                    path={Routes.root().following}
                    component={FollowingTab}
                  />
                  <Route
                    path={Routes.root().repositories}
                    component={RepositoriesTab}
                  />
                  <Route path={Routes.root().stars} component={StarsTab} />
                  <Route component={FourOhFour} />
                </Switch>
              </Grid.Column>
            </Grid>
            <Footer />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
