import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet
} from 'react-native';
import VerticalList from './VerticalList'
export default Tabs = (props) => {
    const { tabs } = props;
    console.log(tabs);
    return (
        <View >
            <View style={styles.tabContainer}>
            {tabs.map((item, index) => {
                return (<TouchableOpacity style={styles.tabsStyles} key={index}>
                    <Text style={{color: 'white',fontSize:20}}>{item.title}</Text>
                </TouchableOpacity>)
            })
            }</View>
            <View>
                <VerticalList link="https://assets.dryicons.com/uploads/icon/svg/12631/d3fab4d2-3a88-4439-9a83-3bea496ed86b.svg"
							title="Wishlist3"/>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    tabContainer: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center'
    }
    ,tabsStyles: {
        color: 'white',
        padding: 10,
        backgroundColor: 'blue',
        alignItems: 'center',
        flex:1
    }
})