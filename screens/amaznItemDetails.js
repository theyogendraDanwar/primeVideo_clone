import React, { Component } from 'react';
import ModalDropdown from '../components/component/ModalDropdown';
import IconButton from '../components/component/IconButton';
import Tabs from '../components/component/Tabs'
import {
	StyleSheet,
	ScrollView,
	Text,
	Dimensions,
	Image,
	View,
	TouchableOpacity
} from 'react-native'

import { CartTileWrapper } from '../components/Wrapper/CardTileWrapper'
import CircleButton from '../components/component/CircleButton'
import CardImage from '../components/component/CardImage'
import { useStateContext } from '../reduxhooks/state';

const carddata = [
	{ alttext: 'image1', link: 'https://www.boostlabs.com/wp-content/uploads/2017/10/Steep-Mountain@4x-150x150.png' },
	{ alttext: 'image1', link: 'https://www.boostlabs.com/wp-content/uploads/2017/10/Steep-Mountain@4x-150x150.png' },
	{ alttext: 'image1', link: 'https://www.boostlabs.com/wp-content/uploads/2017/10/Steep-Mountain@4x-150x150.png' },
	{ alttext: 'image1', link: 'https://www.boostlabs.com/wp-content/uploads/2017/10/Steep-Mountain@4x-150x150.png' },
	{ alttext: 'image1', link: 'https://www.boostlabs.com/wp-content/uploads/2017/10/Steep-Mountain@4x-150x150.png' },
	{ alttext: 'image1', link: 'https://www.boostlabs.com/wp-content/uploads/2017/10/Steep-Mountain@4x-150x150.png' }, { alttext: 'image1', link: 'https://www.boostlabs.com/wp-content/uploads/2017/10/Steep-Mountain@4x-150x150.png' },
	{ alttext: 'image1', link: 'https://www.boostlabs.com/wp-content/uploads/2017/10/Steep-Mountain@4x-150x150.png' },
	{ alttext: 'image1', link: 'https://www.boostlabs.com/wp-content/uploads/2017/10/Steep-Mountain@4x-150x150.png' },
]

const tabListData = [
	{ title: 'episode 1', subText: 'text1', linkto: '' },
	{ title: 'episode 2', subText: 'text2', linkto: '' },
	{ title: 'episode 3', subText: 'text3', linkto: '' },
	{ title: 'episode 4', subText: 'text4', linkto: '' },
	{ title: 'episode 5', subText: 'text5', linkto: '' },
]

export default amaznItemDetails = (props) => {
	const width = Dimensions.get('window').width;
	const height = Dimensions.get('window').height;
	const minutes = 10;
	const [state, dispatch] = useStateContext();
	const tabs = [
		{ title: 'tab1' },
		{ title: 'tab3' }];

	_changeFrame = () => {
		return ({
			width: Dimensions.get('window').width,
			height: Dimensions.get('window').height,
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			opacity: 0.9,
			backgroundColor: 'black'
		})
	}

	_startPlaying = () => {
		console.log('hey clicked');
	}

	_getPosition = (event) => {
		event.nativeEvent.contentOffset.y > 658 ? dispatch({
			type: "MAKE_TAB_STICKY",
			payload: event.nativeEvent.contentOffset.y
		}) : dispatch({
			type: 'MAKE_TAB_NORMAL',
			payload: 0
		})
	}
	return (
		<View style={{ flex: 1, position: 'relative' }}>
			<ScrollView
				vertical={true}
				style={{ flex: 1, backgroundColor: 'black' }}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				onScroll={event => _getPosition(event)}
			>
				<View>
					<Image source={{ uri: 'https://www.remove.bg/images/samples/combined/s1.jpg' }} style={[{ width: width }, styles.itemImage]} />
				</View>
				<View style={{ flex: 1, padding: 15 }}>
					<View style={{
						flex: 1,
						paddingBottom: 20,
					}}>
						<Text style={styles.titleText}>Text</Text>
						<ModalDropdown options={
							[
								'option 1',
								'option 2',
								'option 1',
								'option 2',
								'option 1',
								'option 2',
								'option 1',
								'option 2',
								'option 1',
								'option 2',
								'option 1',
								'option 2',
								'option 1',
								'option 2',
								'option 1',
								'option 2',
							]
						}
							textStyle={{
								width: Dimensions.get('window').width,
								color: 'white'
							}}
							dropdownStyle={{
								position: 'absolute',
								width: Dimensions.get('window').width,
								height: height,
								padding: 15,
								color: 'white'
							}}
							dropdownTextStyle={{
								backgroundColor: 'transparent',
								color: 'white',
							}}
							adjustFrame={_changeFrame}
						/>
					</View>
					<IconButton
						titleText={`Resume in ${minutes}`}
						subText={`-- Remaining`}
						onPress={_startPlaying}
						link="https://cdn.onlinewebfonts.com/svg/img_245298.png"
					/>
					<View style={{
						flex: 1,
						flexDirection: 'row',
						marginTop: 15,
						marginBottom: 15,
						paddingTop: 15,
						paddingBottom: 15,
					}}>
						<CircleButton
							link="https://assets.dryicons.com/uploads/icon/svg/12631/d3fab4d2-3a88-4439-9a83-3bea496ed86b.svg"
							title="Wishlist" />
						<CircleButton
							link="https://assets.dryicons.com/uploads/icon/svg/12631/d3fab4d2-3a88-4439-9a83-3bea496ed86b.svg"
							title="Wishlist2" />
						<CircleButton
							link="https://assets.dryicons.com/uploads/icon/svg/12631/d3fab4d2-3a88-4439-9a83-3bea496ed86b.svg"
							title="Wishlist3" />
					</View>
					<Text style={{ color: 'white', marginBottom: 15, marginTop: 15 }}>Must you with him from him her were more. In eldest be it result should remark vanity square. Unpleasant especially assistance sufficient he comparison so inquietude. Branch one shy edward stairs turned has law wonder horses. Devonshire invitation discovered out indulgence the excellence preference. Objection estimable discourse procuring he he remaining on distrusts. Simplicity affronting inquietude for now sympathize age. She meant new their sex could defer child. An lose at quit to life do dull. </Text>
				</View>
				<Tabs
					tabs={tabs}
					tabListData={tabListData}
					sticky={state.aItem.stickyTab}
				/>
				<View style={{ flex: 1 }}>
					<View style={{ flex: 1 }}>
						<CartTileWrapper data={carddata}
							cardTileStyle={{
								paddingRight: 10,
								marginRight: 10,
								width: 150,
								height: 150,
							}}
							title="customers also watched"
						/>
						<View className="cast-section" style={styles.container}>
							<Text style={[{ textAlign: "left", padding: 10, color: 'white', backgroundColor: 'pink' }, { width: width }]}>Cast and crew</Text>
							<CardImage cardStyle={{
								margin: 10,
								width: 100,
								height: 100,
								borderRadius: 5,
							}}
								data={carddata}
							/>
						</View>
					</View>
				</View>
			</ScrollView>
			{ state.aItem.stickyTab ?
			<View style={styles.tabContainer}>
				{tabs.map((item, index) => {
					return (
						<TouchableOpacity style={styles.tabsStyles} key={index}>
							<Text style={{ color: 'white', fontSize: 20, flex: 1, alignItems: 'center' }}>
								{item.title} {index ? '' : `(${tabListData.length})`}
							</Text>
						</TouchableOpacity>
					)
				})
				}</View> : <View></View>
			}
		</View>
	)
}

const styles = StyleSheet.create({
	itemImage: {
		height: 200
	},
	tabContainer: {
		position: "absolute",
		left: 0,
		right: 0,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	tabsStyles: {
		color: 'white',
		padding: 10,
		backgroundColor: 'blue',
		alignItems: 'center',
		flex: 1
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleText: {
		fontWeight: 'bold',
		paddingBottom: 15,
		fontSize: 21,
		color: 'white'
	}
});