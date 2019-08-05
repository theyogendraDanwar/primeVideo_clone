import React from 'react';
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
    _renderItem = ({item}) => (
        <ListItem
          title={item.title}
        />
      );
    return (
        <View style={styles.container}>  
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
            <View style={styles.container}>
                <FlatList
                    style={{flex:1}}
                    data={tabListData} 
                    renderItem={_renderItem}
                    keyExtractor={(item, index) => item.title}
                />
                </View>
        </View>
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
    ,tabsStyles: {
        color: 'white',
        padding: 10,
        backgroundColor: 'blue',
        alignItems: 'center',
        flex:1
    }
})