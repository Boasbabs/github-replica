import React from "react";
import { Button, Header, Icon, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
const fourOhFour = () => {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name="broken chain" />
        No page found
      </Header>
      <Link to="/">
        <Button> Return to overview page</Button>
      </Link>
    </Segment>
  );
};

export default fourOhFour;
