import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase'

import { firebaseConfig } from '../config'

import * as styles from '../styles'


export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      quote: '',
      author: ''
    }
  }
  
  componentDidMount() {
    const firebaseApp = firebase.initializeApp(firebaseConfig)
    const firebaseDb = firebaseApp.database().ref()

    firebaseDb.on('value', snap => {
      const quoteObj =  snap.val()[0]
      this.setState({
        quote: quoteObj.quote,
        author: quoteObj.author
      })
    })
  }


  render() {

    return (
      <View style={styles.container}>
        <Text>{this.state.quote}</Text>
        <Text>{this.state.author}</Text>
      </View>
    );
  }
}

/*

firebase-app - The core firebase client (required).
firebase-auth - Firebase Authentication (optional).
firebase-database - The Firebase Realtime Database (optional).
firebase-firestore - Cloud Firestore (optional).
firebase-storage - Cloud Storage (optional).
firebase-messaging - Firebase Cloud Messaging (optional).
firebase-functions - Cloud Functions for Firebase (optional).

*/