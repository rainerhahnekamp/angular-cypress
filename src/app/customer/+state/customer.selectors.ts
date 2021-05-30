import {createFeatureSelector, createSelector} from "@ngrx/store";
import {customerFeatureKey, State} from "./customer.reducer";

const selectCustomerState = createFeatureSelector<State>(customerFeatureKey);

const selectAll = createSelector(selectCustomerState, (state) => state.customers);

const selectById = (id: number) => createSelector(selectAll, customers =>
  customers.find(customer => customer.id === id)
);

const selectCurrentPage = createSelector(selectCustomerState, (state) => state.currentPage);

const selectPageCount = createSelector(selectCustomerState, (state) => state.pageCount);

const selectCustomersAndPage = createSelector(
  selectAll,
  selectCurrentPage,
  selectPageCount,
  (customers, currentPage, pageCount) => ({
    customers,
    currentPage,
    pageCount
  })
);

export const fromCustomer = {
  selectAll,
  selectById,
  selectCurrentPage,
  selectCustomersAndPage
};
