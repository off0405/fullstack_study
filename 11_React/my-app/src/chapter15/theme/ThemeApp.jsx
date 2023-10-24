import React from 'react';
import { ThemeProvider } from 'styled-components';
import Blocks from './Blocks';

const theme = {
  white: '#fff',
  black: '#000',
  bodyBg: '#f4f5f6',
  grayBg: '#dfdfdf',
  disabled: '#f7f7f7',
  gray100: '#f1f1f1',
  gray200: '#eee',
  gray300: '#ccc',
  gray400: '#aaa',
  gray500: '#999',
  gray600: '#777',
  gray700: '#555',
  gray800: '#333',
  gray900: '#111',
  blue: '#41a1ea',
  indigo: '#727cf5',
  purple: '#6b5eae',
  pink: '#ff679b',
  red: '#f05b5b',
  orange: '#fd7e14',
  yellow: '#ffbc00',
  green: '#0acf97',
  teal: '#02a8b5',
  cyan: '#39afd1',
  button: {
    primary: {
      // 색 정의
    },
    cancel: {
      // 색 정의
    },
  },
};



function ThemeApp(props) {
  return (
    <ThemeProvider theme={theme}>
      <Blocks/>
    </ThemeProvider>
  );
}

export default ThemeApp;