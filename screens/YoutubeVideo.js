import React, {useState} from 'react'
import { View } from 'react-native'
import Youtube from 'react-native-youtube'

export default YoutubeVideo = (props) => {
  const [readyState, changeState] = useState(false)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Youtube
        videoId="KVZ-P-ZI6W4"
        apiKey={'AIzaSyBJ3ntReiv0l19H2RoYW62LpRdIuyPhIpw'}   // The YouTube video ID
        play={true}             // control playback of video with true/false
        fullscreen={true}
        showFullscreenButton={true}       // control whether the video should play in fullscreen or inline
        loop={true}             // control whether the video should loop when end
        onReady={() => changeState((true))}
        style={{ alignSelf: 'stretch', height: 300 }}
      />
    </View>
  )
}