import React, {useRef} from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';

import ListItem from './ListItem'

export default Tabs = (props) => {
    const { tabs, tabListData, sticky } = props;
    _renderItem = ({item}) => (
        <ListItem
          title={item.title}
        />
      );
      _getinfo =(event) => {
        const layout = event.nativeEvent.layout;
      }
    return (
        <React.Fragment>
            <View style={styles.tabContainer}>
            {tabs.map((item, index) => {
                return (
                <TouchableOpacity style={styles.tabsStyles} key={index}>
                    <Text style={{color: 'white',fontSize:20, flex:1,alignItems:'center'}}>
                        {item.title} { index ? '' : `(${tabListData.length})`}
                    </Text>
                </TouchableOpacity>
                )})
            }</View>
        <View style={styles.container} onLayout={event => _getinfo(event)}>  
            <View style={styles.container}>
                <FlatList
                    style={{flex:1}}
                    data={tabListData} 
                    renderItem={_renderItem}
                    keyExtractor={(item, index) => item.title}
                />
                </View>
        </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        marginBottom:10,
      },
    tabContainer: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center'
    }
    ,makeSticky: {
        position: 'absolute',
        top:0,
        left: 0,
        right: 0,
        flex: 1,
        width: '100%',
        zIndex:1,
        alignSelf: 'stretch',
    }
    ,tabsStyles: {
        color: 'white',
        padding: 10,
        backgroundColor: 'blue',
        alignItems: 'center',
        flex:1
    }
})