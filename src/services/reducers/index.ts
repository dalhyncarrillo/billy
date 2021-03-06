import { combineReducers, Reducer } from 'redux';
import authReducer, { IAuthState } from './auth.reducer';
import customersReducer, { ICustomersState } from './customers.reducer';
import invoicesReducer, { IInvoicesState } from './invoices.reducer';
import taxesReducer, { ITaxesState } from './taxes.reducer';
import userReducer, { IUserState } from './user.reducer';

export interface IState {
  readonly auth: IAuthState;
  readonly user: IUserState;
  readonly customers: ICustomersState;
  readonly invoices: IInvoicesState;
  readonly taxes: ITaxesState;
};

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  customers: customersReducer,
  invoices: invoicesReducer,
  taxes: taxesReducer,
}) as Reducer<IState>;

/**
 * Selectors
 */

export function userId(state: IState): string {
  return state.auth.uid;
}

export function isAuthenticated(state: IState): boolean {
  return state.auth.isAuthenticated;
}

export function getUser(state: IState) {
  return state.user;
}

export function getCustomers(state: IState) {
  return state.customers;
}

export function getNewInvoiceId(state: IState) {
  return state.invoices.newId;
}

export function getInvoices(state: IState) {
 return state.invoices.list;
}

export function getTaxes(state: IState) {
 return state.taxes;
}
