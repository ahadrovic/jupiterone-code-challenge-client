import { IBreach } from '../../types/breaches';
import { IAPIResonse, Error } from '../../types/services';

type GetBreachesRes = IAPIResonse<IBreach>;

/** account is an email address */
export const getBreaches = async (account: string): Promise<GetBreachesRes> => {
  try {
    const url = `https://jupiterone-code-challenge-api.herokuapp.com/breahces?account=${encodeURIComponent(
      account,
    )}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return {
      error: { message: (error as Error).message },
      result: null,
    };
  }
};
