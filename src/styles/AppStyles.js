import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  main: {
    flex: 1
  },
  row: {
    flexDirection: 'row'
  },
  header: {
    padding: 40,
    fontSize: 30,
    textAlign: 'center',
    color: '#0066CC',
    fontWeight: '300'
  },
  androidHeader: {
    padding: 20,
    paddingTop: 30,
    fontSize: 26,
    textAlign: 'center',
    color: '#0066CC'
  },
  name: {
    color: 'black',
    fontSize: 20
  },
  adressText: {
    color: 'grey'
  },
  nameAdress: {
    flexDirection: 'column',
    flex: 8
  },
  info: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  egds: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    minWidth: 50,
    borderRadius: 50
  },
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#000',
    borderBottomWidth: 4,
    borderColor: '#ddd',
    backgroundColor: '#f5f5f5'
  },
  button: {
    borderWidth: 1,
    borderColor: '#0066CC',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#fff'
  },
  buttonText: {
    color: '#0066CC',
    fontSize: 12
  },
  info: {
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4
  }
})
