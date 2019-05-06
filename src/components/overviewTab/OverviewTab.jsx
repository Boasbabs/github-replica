import React, { Component, Fragment } from "react";
import { Card, List, Icon, Header, Grid } from "semantic-ui-react";

// Utils import
import { API_PATH_BASE, DEFAULT_QUERY } from "../../utils/constants";
import { userAPICall } from "../../utils/api";

class OverviewDetail extends Component {
  state = {
    repoListData: []
  };

  componentDidMount() {

  }
  /**
   * Method to make API calls when username is entered
   * @param {string} username 
   */
  fetchUserRepos(username) {
    userAPICall
      .getRepos(username)
      .then(result => {
        console.log("results===", result)
        // this.setState({
        //   repoListData: []
        // });
      })
      .catch(error => {
        // handle error
        console.log(error);
        alert("An Error occurred or Username does not exist");
      });
  }

  render() {
    const {username} = this.props;
    return (
      <Fragment>
        <Header>Popular repositories </Header>
        <Grid padded="vertically">
          <Card.Group itemsPerRow={2}>
            <Card style={{ width: "385px" }}>
              <Card.Content>
                <Card.Header>
                  {" "}
                  <a href="">{this.props.username}</a>
                </Card.Header>
                <Card.Description style={{ padding: "5px 0 18px" }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Culpa, quisquam rem distinctio veniam necessitatibus.
                </Card.Description>
                <Card.Meta>
                  <List horizontal>
                    <List.Item>
                      <Icon name="star" color="grey" />
                      &nbsp;22
                    </List.Item>
                    <List.Item>
                      <Icon name="fork" />
                      &nbsp;22
                    </List.Item>
                  </List>
                </Card.Meta>
              </Card.Content>
            </Card>
            <Card style={{ width: "385px" }}>
              <Card.Content>
                <Card.Header>
                  {" "}
                  <a href="">repo title</a>
                </Card.Header>
                <Card.Description style={{ padding: "5px 0 18px" }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Culpa, quisquam rem distinctio veniam necessitatibus.
                </Card.Description>
                <Card.Meta>
                  <List horizontal relaxed>
                    <List.Item>
                      <Icon name="star" />
                      &nbsp;22
                    </List.Item>
                    <List.Item>
                      <Icon name="fork" />
                      &nbsp;22
                    </List.Item>
                  </List>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid>
      </Fragment>
    );
  }
}

export default OverviewDetail;
