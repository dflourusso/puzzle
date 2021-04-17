import styled from 'styled-components/native'
import styles from '../../constants/styles'

export const Container = styled.View`
  flex: 1;
  padding: 2px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${styles.primaryLighterColor};
  border-radius: 3px;
  padding: 10px;
`;

export const PlayerName = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${styles.textColor};
  padding-bottom: 20px;
`;

export const BestMatch = styled.Text`
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  color: ${styles.textColor};
`;

export const BestMatchLabel = styled.Text`
  font-size: 10px;
  text-align: center;
  color: ${styles.textColor};
`;

export const Position = styled.Text`
  position: absolute;
  right: 10px;
  top: 10px;
  font-weight: 800;
  font-size: 15px;
  text-align: center;
  color: ${styles.textColor};
`;

