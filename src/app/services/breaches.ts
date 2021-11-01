import axios from 'axios';
import { IBreach } from '../../types/breaches';
import { IAPIResonse, Error } from '../../types/services';

type GetBreachesRes = IAPIResonse<IBreach>;

/** account is an email address */
export const getBreaches = async (account: string): Promise<GetBreachesRes> => {
  try {
    const url = `https://jupiterone-code-challenge-api.herokuapp.com/breaches?account=${encodeURIComponent(
      account,
    )}`;
    const { data: resData } = await axios.get<GetBreachesRes>(url);
    if (resData?.error || !resData?.result) {
      return { result: null, error: resData?.error };
    }
    return { result: resData.result, error: null };
  } catch (error) {
    return {
      error: { message: (error as Error).message },
      result: null,
    };
  }
};
