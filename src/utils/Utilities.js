import axios from 'axios';

import banks from './banks';
import states from './states';

export const calculateMonthlyAmount = (loanAmount, dueDate, startDate) => {
  const DisplayTo = new Date(dueDate);
  const DisplayFrom = new Date(startDate);
  const months =
    DisplayTo.getMonth() -
    DisplayFrom.getMonth() +
    12 * (DisplayTo.getFullYear() - DisplayFrom.getFullYear());
  const loansPerMonth = loanAmount / months;
  return {
    loansPerMonth,
    months
  };
};

export const getBanks = () => {
  const modifiedBanks = banks.map(bank => ({name: bank.name, value: bank.slug}));
  return modifiedBanks;
};


export const getStates = () => {
  const modifiedStates = states.map(state => ({name: state.name, value: state.name}));
  return modifiedStates;
}