import React, { Component, Fragment } from "react";
import { Card, List, Icon, Header, Grid } from "semantic-ui-react";

// Utils import
import { userAPICall } from "../../utils/api";

class OverviewDetail extends Component {
  state = {
    repoListData: [],
    newUser: ""
  };

  componentDidMount() {
    this.fetchUserRepos(this.props.username);
  }

  // fetch latest repos when props change
  componentDidUpdate(prevProps) {
    if (this.props.username !== prevProps.username) {
      // TODO: api call needs to be delayed not immediate
      this.fetchUserRepos(this.state.newUser);
    }
  }
  /**
   * Method to make API calls when username is entered
   * @param {string} username
   */
  fetchUserRepos(query) {
    userAPICall
      .getRepos(query)
      .then(result => {
        this.setState({
          repoListData: result
        });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

  mostPopular(arr) {
    // sort by value
    arr.sort(function(a, b) {
      return a.watchers_count - b.watchers_count;
    });
    return arr.slice(0, 6);
  }

  render() {
    const { username } = this.props;

    console.log("curr user", username);
    const { repoListData } = this.state;
    const sixReposOnly = this.mostPopular(repoListData);

    return (
      <Fragment>
        <div key={username}>
          <Header>Popular repositories </Header>
          <Grid padded="vertically">
            <Card.Group itemsPerRow={2}>
              {sixReposOnly.map(repo => {
                return (
                  <Card style={{ width: "385px" }} key={repo.id}>
                    <Card.Content>
                      <Card.Header>
                        <a href="https://twitter.com/boasbabs">{repo.name}</a>
                      </Card.Header>
                      <Card.Description style={{ padding: "5px 0 18px" }}>
                        {repo.description}
                      </Card.Description>
                      <Card.Meta>
                        <List horizontal>
                          <List.Item>
                            <Icon name="star" color="grey" />
                            &nbsp;{repo.stargazers_count}
                          </List.Item>
                          <List.Item>
                            <Icon name="fork" />
                            &nbsp;{repo.forks_count}
                          </List.Item>
                        </List>
                      </Card.Meta>
                    </Card.Content>
                  </Card>
                );
              })}
            </Card.Group>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default OverviewDetail;
