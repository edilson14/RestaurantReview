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
    name: {
        color: 'black',
        fontSize: 20
    },
    adressText: {
        color: 'grey',
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
    }
})