import styled from 'styled-components/native'
import styles from '../../constants/styles'

export const Container = styled.View`
  flex: 1;
  background-color: ${styles.primaryColor};
  justify-content: space-around;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: ${styles.textColor};
  text-align: center;
`;

export const PlayerNameInput = styled.TextInput.attrs(() => ({
  placeholder: 'Qual seu nome?',
  placeholderTextColor: styles.placeholderTextColor,
}))`
  font-size: 20px;
  color: ${styles.textColor};
  background-color: ${styles.primaryLightColor};
  height: 40px;
  border-radius: 5px;
  padding-horizontal: 10px;
  margin-bottom: 20px;
`;
