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
    },
    welcomeback:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '2%',
      },
    logintocontinue:
    {
        fontSize: 14,
        color: 'grey',
        marginBottom: '5%',
    },
    donthaveaccount:
    {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:'5%'
      },
    wrapperInput: {
      borderWidth: 0.5,
      borderRadius:8,
      borderColor: 'grey',
      marginTop: '5%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      padding:'2%',
      width: '100%',
    },
    wrapperIcon: {
      position: 'absolute',
      right: 0,
      padding: 10,
    },
    icon: {
      width: 30,
      height: 24,
    },
    button: {
      padding: '5%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'green',
      borderRadius: '20%',
      marginTop: '10%',
    },
    buttonDisable: { 
      padding: '5%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'grey',
      borderRadius: 5,
      marginTop: '10%'
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
    },
    textFailed: {
      alignSelf: 'flex-end',
      color: 'red',
    },
    signup:
    {
      color: 'green',
     fontWeight: 'bold'}
  });
export default styles;