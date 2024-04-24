import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const ProfileScreen = () => {
  const { email, password } = useSelector((state: any) => state.auth);
  console.log(email, password);

  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
