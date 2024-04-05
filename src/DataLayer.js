import React, { Children, createContext, useContext, useReducer } from 'react';

export const DataLayerContext = createContext();

export const DataLayer = { initialState, reducer, Children };
