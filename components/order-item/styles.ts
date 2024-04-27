import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgray',
    marginHorizontal: 10,
    gap: 20,
  },
  logoContainer: {
    backgroundColor: '#090909',
    borderRadius: 10,
    padding: 20,
  },
  logo: {
    color: '#fff',
  },
  details: {
    gap: 5,
    flex: 0.9,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  btn: {
    marginLeft: 'auto',
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
