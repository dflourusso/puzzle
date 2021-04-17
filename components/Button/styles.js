import styled from 'styled-components/native'
import styles from '../../constants/styles'

export const Container = styled.TouchableOpacity`
  justify-content: center;
  border-width: 1px;
  border-color: ${styles.textColor};
  border-radius: 5px;
  background-color: ${styles.primaryLightColor};
  height: 40px;
  opacity: ${({ disabled }) => disabled ? .3 : 1}
`;

export const Text = styled.Text`
  color: ${styles.textColor};
  text-align: center;
`;
