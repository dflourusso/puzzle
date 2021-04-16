import styled from 'styled-components/native';
import styles from '../../constants/styles';

export const Container = styled.TouchableOpacity`
  width: 25%;
  height: 20%;  
  padding: 2px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ selected }) => selected ? styles.placeholderTextColor : ' rgba(255, 255, 255, .2)'};;
  border-radius: 3px;
`;

