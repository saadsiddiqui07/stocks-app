import { StyleSheet } from 'react-native';
import { WIDTH } from '../../constants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 18,
    alignItems: 'center',
  },
  profile: {
    alignItems: 'center',
  },
  backBtn: {
    alignSelf: 'flex-start',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 999,
  },
  email: {
    fontWeight: '700',
  },
  btn: {
    width: WIDTH * 0.8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: 'red',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 30,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
