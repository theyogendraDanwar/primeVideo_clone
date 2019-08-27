import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';

import ListItem from './ListItem'
import { useStateContext } from '../../reduxhooks/state'

export default Tabs = React.forwardRef(({tabs, tabListData, ...props}, ref) => {
    const [state, dispatch] = useStateContext();
    _renderItem = ({ item }) => (
        <ListItem
            title={item.title}
            _onPress={'aItemPlay'}
        />
    );

    return (
        <View onLayout={({ nativeEvent }) => {
            dispatch({
                type: 'UPDATE_TAB_POSITION',
                payload: nativeEvent.layout
            }) 
        }}>
            <View style={styles.tabContainer} >
                {tabs.map((item, index) => {
                    return (
                        <TouchableOpacity style={styles.tabsStyles} key={index} onPress={() => {
                            dispatch({
                                type: 'CHANGE_TAB',
                                payload: index
                            })
                        }}>
                            <Text style={{ color: '#d0d8df', fontSize: 18, flex: 1, alignItems: 'center' }}>
                                {item.title} {index ? '' : `(${tabListData.length})`}
                            </Text>
                        </TouchableOpacity>
                    )
                })
                }</View>
            {!state.aItem.activeTab ? <View style={styles.container}>
                <View style={styles.container}>
                    <FlatList
                        style={{ flex: 1 }}
                        data={tabListData}
                        renderItem={_renderItem}
                        keyExtractor={(item) => item.title}
                    />
                </View>
            </View> :
                <View style={styles.container} >
                    <Text style={{ color: 'white', padding: 20 }}>InfoSection</Text>
                </View>
            }
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#0b1620',
        color: 'white'
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