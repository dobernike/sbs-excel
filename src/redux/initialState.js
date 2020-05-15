import {storage} from '@core/utils';
import {defaultStyles} from '@/contstants';

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyles,
}

export const initialState = storage('excel-state')
  ? storage('excel-state')
  : defaultState
