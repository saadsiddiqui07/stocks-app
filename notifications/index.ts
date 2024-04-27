import { StockProps } from '../interfaces/StockProps';
import notifee, {
  AndroidImportance,
  AndroidStyle,
} from '@notifee/react-native';
import { getStockSymbol } from '../utils';
import { Alert } from 'react-native';

export const sendNotifications = async (stockList: StockProps[]) => {
  try {
    const channelId = await notifee.createChannel({
      id: 'stocks',
      name: 'Stock Notifications',
      lights: false,
    });

    const promise = stockList.map(stock => {
      notifee.displayNotification({
        title: 'Stock Purchase Confirmed',
        body: `Your Purchase order for ${getStockSymbol(
          stock.symbol,
        )} at ${`$${stock.price.toFixed(2)}`} is completed.`,
        android: {
          channelId,
          importance: AndroidImportance.HIGH,
          style: {
            type: AndroidStyle.BIGTEXT,
            text: `Your Purchase order for ${getStockSymbol(
              stock.symbol,
            )} at ${`$${stock.price.toFixed(2)}`} is completed.`,
          },
        },
      });
    });
    await Promise.all(promise);
  } catch (error) {
    Alert.alert('Some issues trying to place your order. Please try again!');
    console.error('Error sending notifications:', error);
  }
};
