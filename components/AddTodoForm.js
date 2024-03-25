import { useState } from "react"
import { TextInput, View, StyleSheet, Button } from "react-native"

export default function AddTodoForm({ submitHandler }) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder="New todo..."
                onChangeText={changeHandler}
             />
             <Button
              onPress={() => submitHandler(text)}
              title="Add todo" 
              color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})