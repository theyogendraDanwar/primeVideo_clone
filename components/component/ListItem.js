import React from 'react';
import {
    TouchableOpacity,
    Image,
    View,
    Text,
    StyleSheet
} from 'react-native';
import {withNavigation} from 'react-navigation'
import play_icon from '../../images/play-flat.png';

const ListItem = (props) => {
    _onPress = () => {
        props.navigation.navigate(props._onPress)
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
                <Text style={{color: '#afb7c2'}}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default withNavigation(ListItem);

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom:10,
        marginBottom:5,
        paddingRight:10,
        backgroundColor: '#1b252f'
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