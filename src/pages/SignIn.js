import React from 'react';
import firebase from 'firebase/app';
import { Container, Grid, Row, Col, Panel, Icon, Button, ButtonToolbar, Alert} from 'rsuite';
import { auth, database } from '../misc/firebase';


const SignIn = () => {

  const signInWithProvider = async (provider) => {

    try {
      // Exporting the auth object from "misc >> firebase"
        const {additionalUserInfo, user} = await auth.signInWithPopup(provider);
        if(additionalUserInfo.isNewUser){
        // using databse variable from "misc >> firebase and using the ref as path"
        // Interacting with database is going to be a promise.  
             await database.ref(`/profiles/${user.uid}`).set({
              name: user.displayName,
              createdAt : firebase.database.ServerValue.TIMESTAMP
        })
      }
      Alert.success('Signed In', 4000)
      } catch (err) {
        Alert.info(err.message, 4000);
    }
    
    
  };

  const onFacebookSignIn = () => {
    signInWithProvider (new firebase.auth.FacebookAuthProvider())
  } 

  const onGoogleSignIn = () => {
    signInWithProvider (new firebase.auth.GoogleAuthProvider())
}



  return (
    <Container>
      <Grid className='mt-page'>
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className='text-center'>
                <h2>Welcome To SignIn Page</h2>
                <p>Progressivs Chat App </p>
              </div>
              <div className='mt-3'>
                <ButtonToolbar>
                <Button block color="blue" onClick={onFacebookSignIn}>
                <Icon icon='facebook'/>Continue With FaceBook
                </Button>

                <Button block color="red" onClick={onGoogleSignIn}>
                <Icon icon='google'/>Continue With Google
                </Button>               
               </ButtonToolbar>
              </div>
            </Panel>
          
          </Col>
        </Row>
      </Grid>
    </Container>
  )
}

export default SignIn
// ReactDOM.render(instance);