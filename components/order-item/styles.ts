import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgray',
    marginHorizontal: 10,
    gap: 35,
  },
  logo: {
    color: '#000',
  },
  details: {
    flex: 1,
    gap: 5,
    paddingRight: 10,
  },
  topDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  symbol: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  exchange: {
    fontWeight: '700',
    color: 'gray',
    fontSize: 12,
  },
  title: {
    color: '#999999',
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
    fontWeight: '600',
    color: 'black',
  },
  ticker: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  percentage: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
