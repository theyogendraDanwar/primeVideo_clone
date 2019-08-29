import React, { useEffect, useState } from 'react';
import {
	StyleSheet,
	ScrollView,
	Text,
	Image,
	View,
	TouchableOpacity,
	RefreshControl
} from 'react-native'

import ModalDropdown from '../components/component/ModalDropdown';
import IconButton from '../components/component/IconButton';
import Tabs from '../components/component/Tabs'
import { CartTileWrapper } from '../components/Wrapper/CardTileWrapper'
import CircleButton from '../components/component/CircleButton'
import CardImage from '../components/component/CardImage'
import * as CONSTANTS from '../utils/Constants'
import { dimen } from '../utils/Dimensions'
import { useStateContext } from '../reduxhooks/state'
import * as hooks from '../reduxhooks/useHttp'

export default amaznItemDetails = (props) => {
	const width = dimen('window').width;
	const height = dimen('window').height;
	const [state, dispatch] = useStateContext();
	const [refreshCount, updateRefreshCount] = useState(0);
	const url = props.navigation.state.params ? props.navigation.state.params.imdbID : '';
	const [isLoading, fetchedData] = hooks.useHttp(`${CONSTANTS.CONFIG.API_URL}/${CONSTANTS.CONFIG.MOVIE_CALL}/${url}?${CONSTANTS.CONFIG.APIKEY}&language=en-US
	`, refreshCount)
	const imageUri = fetchedData ? fetchedData.backdrop_path ? fetchedData.backdrop_path : CONSTANTS.sampleImage : CONSTANTS.sampleImage;

	useEffect(() => {
		if (isLoading) {
			dispatch({ type: 'SET_REFRESH_TRUE' })
		} else if (!isLoading) {
			setTimeout(() => {
				dispatch({ type: 'SET_REFRESH_FALSE' })
			}, 1000);
		}
	}, [isLoading])

	useEffect(() => {
		if (props.navigation.state.params) {
			updateRefreshCount((refreshCount) => refreshCount + 1)
		}
		dispatch({
			type: 'MAKE_TAB_NORMAL',
			payload: 0
		})
	}, []);

	__handleRefresh = () => {
		updateRefreshCount((refreshCount) => refreshCount + 1)
	}
	_changeFrame = () => {
		return ({
			width: width,
			height: height,
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			opacity: 0.9,
			backgroundColor: 'black'
		})
	}

	_startPlaying = () => {
		props.navigation.navigate('aItemPlay');
	}

	_getPosition = (event) => {
		event.nativeEvent.contentOffset.y > state.aItem.tabPosition.y ? dispatch({
			type: "MAKE_TAB_STICKY",
			payload: 1
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
				refreshControl={
					<RefreshControl
						refreshing={state.aItem.loading}
						onRefresh={__handleRefresh}
					/>
				}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				onScroll={event => _getPosition(event)}
			>
				<View>
					<Image source={{ uri: `https://image.tmdb.org/t/p/w500/${imageUri}` }} resizeMode="contain" style={[{ width: width }, styles.itemImage]} />
				</View>
				<View style={{ flex: 1, padding: 15 }}>
					<View style={{
						flex: 1,
						paddingBottom: 20,
					}}>
						<Text style={styles.titleText}>{
							fetchedData ? fetchedData.title ? fetchedData.title : 'Text' : 'Text'}</Text>
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
								width: width,
								color: 'white'
							}}
							dropdownStyle={{
								position: 'absolute',
								width: width,
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
						titleText={"Play"}
						subText={"Video will be played on the youtube"}
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
					<Text style={{ color: 'white', marginBottom: 15, marginTop: 15 }}> {fetchedData ? fetchedData.overview ? fetchedData.overview : CONSTANTS.sampleDescription : CONSTANTS.sampleDescription}</Text>
				</View>
				<Tabs
					tabs={CONSTANTS.tabs}
					tabListData={CONSTANTS.tabListData}
					sticky={state.aItem.stickyTab}
				/>
				<View style={{ flex: 1 }}>
					<View style={{ flex: 1 }}>
						<CartTileWrapper data={CONSTANTS.data}
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
								data={CONSTANTS.carddata}
							/>
						</View>
					</View>
				</View>
			</ScrollView>
			{state.aItem.stickyTab ?
				<View style={styles.tabContainer}>
					{CONSTANTS.tabs.map((item, index) => {
						return (
							<TouchableOpacity style={styles.tabsStyles} key={index} onPress={
								() => dispatch({
									type: 'CHANGE_TAB',
									payload: index
								})
							}>
								<Text style={{ color: '#d0d8df', fontSize: 18, flex: 1, alignItems: 'center' }}>
									{item.title} {index ? '' : `(${CONSTANTS.tabListData.length})`}
								</Text>
							</TouchableOpacity>
						)
					})
					}</View> : <></>
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
		color: '#d0d8df',
		padding: 10,
		backgroundColor: '#171f2a',
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