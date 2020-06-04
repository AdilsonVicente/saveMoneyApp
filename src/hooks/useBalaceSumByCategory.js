/* eslint-disable prettier/prettier */
import {useEffect, useState} from 'react';

import {getBalanceSumByCategory} from '../services/Balance';

const useBalanceSumByCategory = (days = 7) => {
  const [balanceSum, setBalanceSum] = useState([]);

  useEffect(() => {
    async function loadBalanceSumCategory() {
      const data = await getBalanceSumByCategory(days);
      setBalanceSum([...data]);
    }

    loadBalanceSumCategory();
  }, [days]);

  return [balanceSum];
};

export default useBalanceSumByCategory;
