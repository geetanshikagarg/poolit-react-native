import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logocontainer:{
        alignItems: 'center',
        justifyContent:'center'
    },
    logo : {
        height:'35%',
        width:'50%'
    },
    poolittext:{
        fontSize: 28,
        fontWeight: 'bold',
        color: 'green',
        margin:'2%'
    },
    wrapperInput: {
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: 'grey',
        marginTop: '5%',
        flexDirection: 'row',
        alignItems: 'center',
      },
      input: {
        padding: '3%',
        width: '100%',
      },
    viewverifiedorg:
    {
        fontSize: 12,
        color: 'green',
        marginBottom: '5%',
        aligContent:'center'
    },
    alreadyhaveanaccount:
    {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: '5%',
      },
    login:
    {
        color: 'green',
        fontWeight: 'bold'
}
});
export default styles;