import React, { Component, Fragment } from "react";
import { Grid, List, Header, Button, Icon, Image } from "semantic-ui-react";

class FollowingTab extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Grid padded="vertically">
          <Grid.Column>
            <List divided verticalAlign="middle" relaxed size="medium">
              <List.Item>
                <Image
                  rounded
                  size="tiny"
                  verticalAlign="middle"
                  src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
                />
                <List.Content>
                  <Header as="h3" color="grey">
                    <a href="https://twitter.com/boasbabs">User Following Title</a>
                  </Header>
                  <List.Description
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                  >
                    Description of Laravel 5 Package to Detect Users Browsers, Devices,
                    Languages
                  </List.Description>
                  <List horizontal relaxed>
                    <List.Item>
                      <Icon name="users" />
                      &nbsp;Some Organizations
                    </List.Item>
                    <List.Item>
                      <Icon name="map marker alternate" />
                      &nbsp;Lagos
                    </List.Item>
                  </List>
                </List.Content>
                <List.Content floated="right">
                  <Button>Follow</Button>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </Fragment>
    );
  }
}

export default FollowingTab;
