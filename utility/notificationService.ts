/* eslint-disable prettier/prettier */
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  if (enabled) {
    console.log('Authorization status:', authStatus);
    const token = await setupCloudMessaging();
  }
}

const setupCloudMessaging = async () => {
  try {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log('stored Token:', fcmToken);
    if (!fcmToken) {
      fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log('Token:', fcmToken);
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
    return fcmToken;
  } catch (err) {
    console.log(err.response.data, err);
    return;
  }
};

export const notificationListener = async () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    JSON.stringify(remoteMessage);
    console.log(JSON.stringify(remoteMessage.notification), '56');
    Alert.alert(JSON.stringify(remoteMessage.notification));
  });
  // If App is in foreground mode
  messaging().onMessage(remoteMessage => {
    console.log(JSON.stringify(remoteMessage.notification), '58');
    Alert.alert(JSON.stringify(remoteMessage));
  });

  // It will trigger when app was in quit mode
  messaging().getInitialNotification((remoteMessage) => {
    JSON.stringify(remoteMessage);
    console.log(JSON.stringify(remoteMessage), '57');
    Alert.alert(JSON.stringify(remoteMessage));
    // Alert.alert(JSON.stringify(remoteMessage));
  });
};
