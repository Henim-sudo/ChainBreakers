import axios from "axios";

const BASE_URL = "https://mainnet-public.mirrornode.hedera.com/api/v1";

// Fetch all transactions
export const fetchTransactions = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/transactions`);
    return response.data.transactions;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return [];
  }
};

// Get transaction by ID
export const getTransactionById = async (transactionId) => {
  try {
    const response = await axios.get(`${BASE_URL}/transactions/${transactionId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching transaction:", error);
    return null;
  }
};

// Get account transactions
export const getAccountTransactions = async (accountId) => {
  try {
    const response = await axios.get(`${BASE_URL}/transactions?account.id=${accountId}`);
    return response.data.transactions;
  } catch (error) {
    console.error("Error fetching account transactions:", error);
    return [];
  }
};

// Get transaction details
export const getTransactionDetails = async (transactionId) => {
  try {
    const response = await axios.get(`${BASE_URL}/transactions/${transactionId}/details`);
    return response.data;
  } catch (error) {
    console.error("Error fetching transaction details:", error);
    return null;
  }
};
