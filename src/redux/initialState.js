import {storage} from '@core/utils';
import {defaultStyles, defaultTitle} from '@/contstants';

const defaultState = {
  title: defaultTitle,
  currentStyles: defaultStyles,
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
}

export const initialState = storage('excel-state')
  ? storage('excel-state')
  : defaultState
