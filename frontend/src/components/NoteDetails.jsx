import {Text, StyleSheet, View} from 'react-native';

export default Note = ({item}) =>{
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{item}</Text>
            <Text style={styles.text}>{item}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 15,
        height: '30%',
        width: '90%',
        borderWidth: 1
    },
    name:{
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: '1%',
        marginLeft: '5%'
    },
    text: {
        marginLeft: '5%'
    }
});


