import React from 'react';
import {
    TouchableOpacity,
    Image,
    View,
    Text,
    StyleSheet,
    Switch
} from 'react-native';
import { withNavigation } from 'react-navigation'
import play_icon from '../../images/play_icon.png';

const MenuListItem = (props) => {
    _onPress = () => {
        props._onPress ? props.navigation.navigate(props._onPress) : ''
    };
    return (
        <>
            <TouchableOpacity onPress={_onPress} style={styles.container}>
                {props.showIcon ? <View style={styles.play_icon_container}>
                    <Image
                        source={play_icon}
                        style={styles.ImageIconStyle}
                    />
                </View> : <></>}
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center', 
                    justifyContent: 'space-between'
                }}>
                    <Text style={{ color: '#afb7c2' }}>{props.title}</Text>
                    {props.isSwitch ?
                        <Switch onValueChange={(value) => { props.toggleSwitch(value) }}
                            value={props.toggleValue} /> : <></>}
                </View>
            </TouchableOpacity>
            {!props.last ?
                <View style={{ borderBottomColor: 'white', borderBottomWidth: 1 }} /> : 
                <></>
            }
        </>
    )
}

export default withNavigation(MenuListItem);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 30,
        paddingRight: 10,
        backgroundColor: '#0b1620'
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