import { showMessage, MessageType } from 'react-native-flash-message';

export const notify = (message: string, description: string, type?: MessageType) => {
  showMessage({
    duration: 3000,
    message,
    description,
    icon: 'danger',
    hideStatusBar: true,
    type: type ?? 'danger'
  });
};
export const notifySucess = (message: string, description: string) => {
  showMessage({
    duration: 3000,
    message,
    description,
    icon: 'success',
    hideStatusBar: true,
    type: 'success'
  });
};

export const notifyInfo = (message: string, description: string) => {
  showMessage({
    duration: 4000,
    message,
    description,
    icon: 'info',
    hideStatusBar: true,
    type: 'info'
  });
};
