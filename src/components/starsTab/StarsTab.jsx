import React, { Component, Fragment } from "react";
import {
  Grid,
  List,
  Dropdown,
  Divider,
  Input,
  Header,
  Button,
  Icon
} from "semantic-ui-react";

class StarsTab extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Grid padded="vertically">
          <Grid.Column>
            <List>
              <List.Item>
                <List.Content floated="left">
                  <Header.Subheader textAlign="left">
                    REPOSITORIES
                  </Header.Subheader>
                </List.Content>
                <List.Content floated="right">
                  <a href="">
                  <Dropdown text={`Filter`}>
                    <Dropdown.Menu>
                      <Dropdown.Item text="All" />
                      <Dropdown.Item text="Sources" />
                      <Dropdown.Item text="Forked" />
                      <Dropdown.Item text="Archives" />
                      <Dropdown.Item text="Mirror" />
                    </Dropdown.Menu>
                  </Dropdown>
                  </a>
                </List.Content>
              </List.Item>
            </List>
            <Divider />
            <List divided verticalAlign="middle" relaxed size="medium">
              <List.Item fluid>
                <List.Content floated="right">
                  <Button icon>
                    <Icon name="star" /> &nbsp; Star
                  </Button>
                </List.Content>

                <List.Content style={{ marginBottom: "10px" }}>
                  <Header as="h3" color="grey">
                    <a href="">Repo Title</a>
                  </Header>
                  <List.Description style={{ marginTop: "10px" }}>
                    Laravel 5 Package to Detect Users Browsers, Devices,
                    Languages and Operating Systems
                  </List.Description>
                </List.Content>
                <List.Content>
                  <List horizontal relaxed>
                    <List.Item>
                      <Icon name="star" />
                      &nbsp;22
                    </List.Item>
                    <List.Item>
                      <Icon name="fork" />
                      &nbsp;22
                    </List.Item>
                    <List.Item>
                      <Icon name="llaw" />
                      &nbsp;MIT License
                    </List.Item>
                    <List.Item>Updated 23 minutes ago</List.Item>
                  </List>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </Fragment>
    );
  }
}

export default StarsTab;
