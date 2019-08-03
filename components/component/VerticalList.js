import React from 'react';
import {
  FlatList
} from 'react-native';
import ListItem from './ListItem'

export default VerticalList = (props) => {
  _renderItem = ({item}) => (
    <ListItem
      id={item.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      title={item.title}
    />
  );
  return (
    <FlatList
        data={this.props.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
  );
}