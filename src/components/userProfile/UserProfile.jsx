import React, { Component, Fragment } from "react";
import { Card, List, Button, Divider, Header, Image } from "semantic-ui-react";

class UserProfile extends Component {
  state = {};
  render() {
    const { avatar, name, username, location, bio } = this.props;
    return (
      <Fragment>
        <Card>
          <Image src={avatar} />
        </Card>
        <Header as="h1">
          {name}
          <Header.Subheader>{username}</Header.Subheader>
        </Header>
        <Button fluid>Follow</Button>
        <List>
          <List.Item>
            <a href="https://twitter.com/boasbabs">Block or report user</a>
          </List.Item>
        </List>
        <Divider hidden />
        <Divider />
        <Divider hidden />
        <List>
          <List.Item>
            <List.Icon name="users" />
            <List.Content>{bio || "not provided"}</List.Content>
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
              <a href="https://twitter.com/boasbabs">Blog details here</a>
            </List.Content>
          </List.Item>
        </List>
      </Fragment>
    );
  }
}

export default UserProfile;
