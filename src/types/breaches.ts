export interface IBreach {
  name: string;
  title: string;
  domain: string;
  breachDate: string; // date
  addedDate: string; // datetinme
  modifiedDate: string; // datetime
  pwnCount: number;
  description: string;
  dataClasses: string[];
  isVerified: boolean;
  isFabricated: boolean;
  isSensitive: boolean;
  isRetired: boolean;
  isSpamList: boolean;
  logoPath: string;
}
