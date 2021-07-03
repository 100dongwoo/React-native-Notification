# React-native-Notification
React-native Notification

### 1. Install 
##### Using npm
npm install --save @react-native-firebase/app

##### Using Yarn
yarn add @react-native-firebase/app

2. 
- react-native link @react-native-firebase/app


3. 
- cd android && gradlew signingReport   (windows)
- cd android && ./gradlew signingReport (mac)
  
debugAndroidTest  SHA1

4.
-  classpath 'com.google.gms:google-services:4.3.8' (/android/build.gradle)

- apply plugin: 'com.google.gms.google-services' // <- Add this line
  (/android/app/build.gradle)
  
5. 
- npm i @react-native-firebase/messaging

6. 
- react-native link @react-native-firebase/messaging
