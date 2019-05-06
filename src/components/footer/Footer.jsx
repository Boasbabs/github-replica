import React from 'react';
import { Grid, Menu, Divider } from "semantic-ui-react";

const Footer = () => {
    return ( 
        <Grid padded>
            <Grid.Column>
              <Divider />
              <Menu text>
                <Menu.Item name="2019GitHubInc" disabled>
                  © 2019 GitHub, Inc.
                </Menu.Item>
                <Menu.Item name="Terms">Terms</Menu.Item>
                <Menu.Item name="Privacy">Privacy</Menu.Item>
                <Menu.Item name="Security">Security</Menu.Item>
                <Menu.Item name="Status">Status</Menu.Item>

                <Menu.Menu position="right">
                  <Menu.Item name="API">API</Menu.Item>
                  <Menu.Item name="Training">Training</Menu.Item>
                  <Menu.Item name="Blog">Blog</Menu.Item>
                  <Menu.Item name="About">About</Menu.Item>
                </Menu.Menu>
              </Menu>
            </Grid.Column>
          </Grid>
     );
}
 
export default Footer;