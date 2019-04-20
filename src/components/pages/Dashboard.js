import React, { useState, useEffect } from "react";
import {
  Loader,
  Button,
  Header,
  Container,
  Divider,
  Grid,
} from "semantic-ui-react";
import ModalCreate from "../modals/ModalCreate";
import PathList from '../lists/PathList';
import Auth from "../../auth/Auth";
const auth = new Auth();

const Dashboard = () => {
  const [dashboard, setDashboard] = useState({
    loading: true,
    profile: {}
  });

  //componetdidmount
  useEffect(() => {
    auth.getProfile((profile, error) =>setDashboard({ loading: false, profile: profile }));
  },[]);

  return (
    <div>
      {dashboard.loading ? (
        <Loader active inline="centered" />
      ) : (
        <>
        <Container className="path-page" textAlign="center">
          <Header as="h2" icon>
            Your learning paths
            <Header.Subheader>Let's achieve the next level</Header.Subheader>
          </Header>
          
        </Container>
        <Container className="path-page" textAlign="center">
         <Grid stackable>
           <Grid.Row >
              <Grid.Column width={5}>
              <Divider horizontal>Options</Divider>
              <ModalCreate>
          <Button
            color="teal"
            content="Create Path"
            icon="add"
            labelPosition="left"
          />
          </ModalCreate>
              </Grid.Column>
              <Grid.Column width={11}>
                <Divider horizontal>Your Paths</Divider>
                <PathList/>
              </Grid.Column>
           </Grid.Row>
         </Grid>
        </Container>
        </>
      )}
    </div>
  );
};

export default Dashboard;