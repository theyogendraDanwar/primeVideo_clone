
export default ListItem = (props) => {
    const textColor = props.selected ? 'red' : 'black';
    _onPress = () => {
        props.onPressItem(props.id);
    };
    return (
        <TouchableOpacity onPress={_onPress}>
            <View>
                <Text style={{ color: textColor }}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}