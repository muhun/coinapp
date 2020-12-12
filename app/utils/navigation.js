import * as React from 'react';
import { StackActions } from '@react-navigation/native';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  // eslint-disable-next-line no-unused-expressions
  navigationRef.current?.navigate(name, params);
}

export function push(...args) {
  // eslint-disable-next-line no-unused-expressions
  navigationRef.current?.dispatch(StackActions.push(...args));
}
