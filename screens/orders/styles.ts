import { StyleSheet } from 'react-native';
import { HEIGHT, WIDTH } from '../../constants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    padding: 18,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: '#090909',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 20,
  },
  emptyText: {
    color: 'black',
    textAlign: 'center',
    marginTop: HEIGHT * 0.1,
  },
  stocks: {
    marginVertical: 10,
    // height: HEIGHT * 0.8,
  },
  swipeView: {
    marginTop: 'auto',
    marginBottom: 10,
  },
  swipeText: { fontWeight: '700' },
  swipeContainer: { borderWidth: 0 },
  iconStyles: { paddingVertical: 10 },
  backBtn: {
    backgroundColor: '#e2e8f0',
    padding: 10,
    borderRadius: 999,
    alignSelf: 'flex-start',
  },
  mycontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  btn: {
    backgroundColor: '#ECD996',
    paddingVertical: 15,
    paddingHorizontal: 12,
    marginTop: 'auto',
    width: WIDTH * 0.9,
    alignSelf: 'center',
    marginBottom: 10,
  },
  btnText: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#090909',
  },
});

export default styles;
