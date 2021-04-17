import styled from 'styled-components/native'
import styles from '../../constants/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const EmptyIcon = styled(MaterialCommunityIcons).attrs(() => ({
  name: 'gamepad-variant',
  size: Dimensions.get('window').width / 1.5,
  color: styles.primaryLighterColor,
}))`
`;

export const EmptyText = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${styles.textColor};
  opacity: 0.6
`;
