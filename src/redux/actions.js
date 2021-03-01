import { ADD_MESSAGE } from './types';

export const addMessage = text => {
    return {
      type: ADD_MESSAGE,
      payload: text
    }
}