import { StyleSheet } from 'react-native';
import { WIDTH } from '../../constants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  detailsView: {
    paddingBottom: 100,
  },
  container: {
    padding: 18,
  },
  details: {
    marginVertical: 10,
  },
  headerText: {
    marginTop: 15,
    fontSize: 24,
    color: '#090909',
    fontWeight: '600',
  },
  subText: {
    fontSize: 14,
    color: '#090909',
    fontWeight: '500',
  },
  backBtn: {
    backgroundColor: '#e2e8f0',
    padding: 10,
    borderRadius: 999,
    alignSelf: 'flex-start',
  },
  symbol: {
    fontSize: 24,
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
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    marginTop: 10,
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
  btn: {
    backgroundColor: '#ECD996',
    paddingVertical: 15,
    paddingHorizontal: 12,
    marginTop: 'auto',
    width: WIDTH * 0.9,
    alignSelf: 'center',
    marginBottom: 20,
  },
  btnText: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#090909',
  },
});

export default styles;
