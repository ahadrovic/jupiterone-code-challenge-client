import axios from 'axios';
import { IBreach } from '../../types/breaches';
import { IAPIResonse, Error as APIError, Result } from '../../types/services';

type GetBreachesRes = IAPIResonse<IBreach>;

/** account is an email address */
export const getBreaches = async (account: string): Promise<GetBreachesRes> => {
  try {
    const url = `https://jupiterone-code-challenge-api.herokuapp.com/breaches?account=${encodeURIComponent(
      account,
    )}`;
    const { data: result } = await axios.get<Result<IBreach>>(url);

    if (!result) {
      throw new Error('Could not fetch breaches');
    }

    return { result: result, error: null };
  } catch (error) {
    return {
      error: { message: (error as APIError).message },
      result: null,
    };
  }
};
