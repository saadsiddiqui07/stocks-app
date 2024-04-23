import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgray',
    marginHorizontal: 10,
    gap: 35,
  },
  details: {
    flex: 1,
    gap: 5,
    paddingRight: 10,
  },
  symbol: {
    fontSize: 20,
    fontWeight: '800',
  },
  title: {
    color: 'gray',
    fontSize: 16,
    fontWeight: '600',
  },
  pricing: {
    flexDirection: 'row',
    // alignItems: 'center',
    gap: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: '800',
  },
  ticker: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  percentage: {
    fontSize: 15,
    color: Colors.profit,
    fontWeight: '600',
  },
});

export default styles;
