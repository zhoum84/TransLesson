import {Text, StyleSheet, View} from 'react-native';

export default Note = ({result}) =>{
    
    if (result){    
        const {date, key, name, text} = result;
        return (
            <View style={styles.container}>
                <Text style={styles.name}>{name} {date}</Text>
                <Text style={styles.text}>{text}</Text>
            </View>
        )
    }
    else return null;
}

const styles = StyleSheet.create({
    container:{
        borderRadius: 5,
        maxWidth: 3000,
        height: '50%',
        alignSelf:"stretch",
        width: '100%',
        borderWidth: 1,
        flex: 1,
        flexWrap: "wrap",
    },
    name:{
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: '1%',
        marginLeft: '5%'
    },
    text: {
        marginLeft: '5%'
    }
});


