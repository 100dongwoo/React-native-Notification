import React, {useEffect, useState} from 'react';
import messaging from '@react-native-firebase/messaging';
import {Text, View, Image} from 'react-native';

const App = () => {
  const [notification, setNotification] = useState({
    title: undefined,
    body: undefined,
    image: undefined,
  });
  const getToken = async () => {
    const token = await messaging().getToken();
    console.log('.........................................', token);
  };
  useEffect(() => {
    getToken();
    messaging().onMessage(async remoteMessage => {
      // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage))
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
      setNotification({
        title: remoteMessage.notification.title,
        body: remoteMessage.notification.body,
        image: remoteMessage.notification.android.imageUrl,
      });
    });
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('onNotification Open APP', JSON.stringify(remoteMessage));
      setNotification({
        title: remoteMessage.notification.title,
        body: remoteMessage.notification.body,
        image: remoteMessage.notification.android.imageUrl,
      });
    });

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            JSON.stringify(remoteMessage),
          );
          setNotification({
            title: remoteMessage.notification.title,
            body: remoteMessage.notification.body,
            image: remoteMessage.notification.android.imageUrl,
          });
        }
      });
  }, []);
  return (
    <View>
      <Text>firebase messagetest</Text>
      <Text>{`title:${notification?.title}`}</Text>
      <Text>{`body:${notification?.body}`}</Text>
      <Image source={{uri: notification?.image}} width={500} height={500} />
    </View>
  );
};

export default App;
