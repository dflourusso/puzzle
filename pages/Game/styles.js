import styled from 'styled-components/native';
import styles from '../../constants/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${styles.primaryColor};
  justify-content: space-around;
  padding: 20px 10px 60px 10px;
`;

export const RoundsText = styled.Text`
  text-align: center;
  color: ${styles.textColor};
  padding-bottom: 20px;
`;
