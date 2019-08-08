import React from 'react';
import {
    TouchableOpacity,
    Image,
    View,
    Text,
    StyleSheet
} from 'react-native';
import play_icon from '../../images/play-flat.png';

export default ListItem = (props) => {
    _onPress = () => {
        props._onPress ? props._onPress : ''
    };
    return (
        <TouchableOpacity onPress={_onPress} style={styles.container}>
            <View style={styles.play_icon_container}>
                <Image
                    source={play_icon}
                    style={styles.ImageIconStyle}
                />
            </View>
            <View>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight:10,
    },
    play_icon_container: {
        flexDirection: 'column'
    },
    ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 10,
        width: 10,
        resizeMode: 'stretch',
    },
})