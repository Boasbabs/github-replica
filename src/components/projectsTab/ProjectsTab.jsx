import React from "react";
import { Header, Icon, Segment } from "semantic-ui-react";
const ProjectsTab = () => {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name="broken chain" />
        No project found
      </Header>
    </Segment>
  );
};

export default ProjectsTab;
