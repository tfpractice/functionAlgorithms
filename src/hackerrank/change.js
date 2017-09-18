// You have types of coins available in infinite quantities where the
// value of each coin is given in the array . Can  you determine the number
// of ways of making change for units using the given types of coins?
// For example, if , and , we can make change for units in three ways:
// , , and .

// Given n,m , and c, print the number of ways to make change
// for units using any number of coins having the values given in C.

export const maxCount = total => val => parseInt(total / val);
export const subMax = total => val => total - maxCount(total)(val) * val;
export const makeChange = (total, num, coins) => 0;
