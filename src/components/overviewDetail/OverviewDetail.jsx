import React, { Component, Fragment } from 'react';
import { Card, List, Icon } from "semantic-ui-react"

class OverviewDetail extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <Card.Group itemsPerRow={2}>
                  <Card style={{ width: "385px" }} padded>
                    <Card.Content>
                      <Card.Header>
                        {" "}
                        <a href="">repo title</a>
                      </Card.Header>
                      <Card.Description style={{ padding: "5px 0 18px" }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Culpa, quisquam rem distinctio veniam
                        necessitatibus.
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
                  <Card style={{ width: "385px" }} padded>
                    <Card.Content>
                      <Card.Header>
                        {" "}
                        <a href="">repo title</a>
                      </Card.Header>
                      <Card.Description style={{ padding: "5px 0 18px" }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Culpa, quisquam rem distinctio veniam
                        necessitatibus.
                      </Card.Description>
                      <Card.Meta>
                        <List horizontal>
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
            </Fragment>
         );
    }
}
 
export default OverviewDetail;