import styled from 'styled-components/native';
import styles from '../../constants/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${styles.primaryColor};
  justify-content: space-around;
  padding: 20px 10px 60px 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
`;

export const Text = styled.Text`
  text-align: center;
  color: ${styles.textColor};
  padding-bottom: 20px;
`;
