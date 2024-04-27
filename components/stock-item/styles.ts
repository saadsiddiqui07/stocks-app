import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgray',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  openView: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgray',
    paddingVertical: 15,
    paddingHorizontal: 10,

    backgroundColor: 'lightgray',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 35,
    marginHorizontal: 10,
  },
  logoContainer: {
    backgroundColor: '#090909',
    borderRadius: 10,
    padding: 20,
  },
  logo: {
    color: '#fff',
    fontWeight: '700',
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
  textView: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  subText: {
    fontWeight: '500',
  },
});

export default styles;
