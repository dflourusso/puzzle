import styled from 'styled-components/native';
import styles from '../../constants/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${styles.primaryColor};
  justify-content: space-around;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${styles.textColor};
  text-align: center;
`;

export const Rounds = styled.Text`
  font-size: 100px;
  font-weight: 600;
  color: ${styles.textColor};
  text-align: center;
`;

export const RoundsLabel = styled.Text`
  font-size: 20px;
  color: ${styles.textColor};
  text-align: center;
`;