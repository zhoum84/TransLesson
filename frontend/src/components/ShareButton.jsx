import {Alert, Share, View, Button, TouchableOpacity} from 'react-native';

const ShareExample = () => {
  const onShare = async (date, text) => {
    try {
      const result = await Share.share({
        message:
          `These are some notes from ${date}! \n ${text}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={{marginTop: 5}}>
      <Button onPress={onShare} title="Share" />
    </View>
  );
};

export default ShareExample;