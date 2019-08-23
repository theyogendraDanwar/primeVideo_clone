import React, { useState } from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';

import ListItem from './ListItem'

export default Tabs = (props) => {
    const { tabs, tabListData } = props;
    const [activeTab, changeTab] = useState(0)
    _renderItem = ({ item }) => (
        <ListItem
            title={item.title}
            _onPress={'aItemPlay'}
        />
    );
    return (
        <React.Fragment>
            <View style={styles.tabContainer}>
                {tabs.map((item, index) => {
                    return (
                        <TouchableOpacity style={styles.tabsStyles} key={index} onPress={() => { changeTab(index) }}>
                            <Text style={{ color: '#d0d8df', fontSize: 20, flex: 1, alignItems: 'center' }}>
                                {item.title} {index ? '' : `(${tabListData.length})`}
                            </Text>
                        </TouchableOpacity>
                    )
                })
                }</View>
            {!activeTab ? <View style={styles.container}>
                <View style={styles.container}>
                    <FlatList
                        style={{ flex: 1 }}
                        data={tabListData}
                        renderItem={_renderItem}
                        keyExtractor={(item, index) => item.title}
                    />
                </View>
            </View> :
                <View style={styles.container} >
                    <Text>InfoSection</Text>
                </View>
            }
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#0b1620',
    },
    tabContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
    , makeSticky: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flex: 1,
        width: '100%',
        zIndex: 1,
        alignSelf: 'stretch',
    }
    , tabsStyles: {
        color: '#d0d8df',
        padding: 10,
        backgroundColor: '#171f2a',
        alignItems: 'center',
        flex: 1
    }
})