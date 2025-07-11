import { StyleSheet } from 'react-native';
const AuthStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  base1: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20,
    gap: 52
  },
  base2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 90
  },
  header: {
    fontSize: 36,
    fontWeight: '700',
    fontFamily: 'Montserrat',
    color: '#000',
  },
  inputForm: {
  },
  button: {
    padding: 21,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#F83758',
    color: '#fff',
    fontSize: 17,
  },
  social: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  or: {
    color: '#575757',
    fontSize: 12,
    fontWeight: 500,
    fontFamily: 'Montserrat',
  },
  footer: {
    color: '#575757',
  },
  link: {
    color: '#F83758',
    textDecorationLine: 'underline',
  },
  textToInput: {
    gap: 36
  }
});
export default AuthStyles;