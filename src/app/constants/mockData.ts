import { IBreach } from '../../types/breaches';

export const mockBreaches: IBreach[] = [
  {
    name: 'Dropbox',
    title: 'Dropbox',
    domain: 'dropbox.com',
    pwnCount: 68648009,
    logoPath:
      'https://haveibeenpwned.com/Content/Images/PwnedLogos/Dropbox.png',
    dataClasses: ['Email addresses', 'Passwords'],
    description:
      'In mid-2012, Dropbox suffered a data breach which exposed the stored credentials of tens of millions of their customers. In August 2016, <a href="https://motherboard.vice.com/read/dropbox-forces-password-resets-after-user-credentials-exposed" target="_blank" rel="noopener">they forced password resets for customers they believed may be at risk</a>. A large volume of data totalling over 68 million records <a href="https://motherboard.vice.com/read/hackers-stole-over-60-million-dropbox-accounts" target="_blank" rel="noopener">was subsequently traded online</a> and included email addresses and salted hashes of passwords (half of them SHA1, half of them bcrypt).',
    addedDate: '2016-08-31T00:19:19Z',
    breachDate: '2012-07-01',
    modifiedDate: '2016-08-31T00:19:19Z',
    isRetired: false,
    isSpamList: false,
    isVerified: true,
    isSensitive: false,
    isFabricated: false,
  },
  {
    name: 'Edmodo',
    title: 'Edmodo',
    domain: 'edmodo.com',
    pwnCount: 43423561,
    logoPath: 'https://haveibeenpwned.com/Content/Images/PwnedLogos/Edmodo.png',
    dataClasses: ['Email addresses', 'Passwords', 'Usernames'],
    description:
      'In May 2017, the education platform <a href="https://motherboard.vice.com/en_us/article/hacker-steals-millions-of-user-account-details-from-education-platform-edmodo" target="_blank" rel="noopener">Edmodo was hacked</a> resulting in the exposure of 77 million records comprised of over 43 million unique customer email addresses. The data was consequently published to a popular hacking forum and made freely available. The records in the breach included usernames, email addresses and bcrypt hashes of passwords.',
    addedDate: '2017-06-01T05:59:24Z',
    breachDate: '2017-05-11',
    modifiedDate: '2017-06-01T05:59:24Z',
    isRetired: false,
    isSpamList: false,
    isVerified: true,
    isSensitive: false,
    isFabricated: false,
  },
  {
    name: 'Nitro',
    title: 'Nitro',
    domain: 'gonitro.com',
    pwnCount: 77159696,
    logoPath: 'https://haveibeenpwned.com/Content/Images/PwnedLogos/Nitro.png',
    dataClasses: ['Email addresses', 'Names', 'Passwords'],
    description:
      'In September 2020, <a href="https://www.bleepingcomputer.com/news/security/massive-nitro-data-breach-impacts-microsoft-google-apple-more/" target="_blank" rel="noopener">the Nitro PDF service suffered a massive data breach which exposed over 70 million unique email addresses</a>. The breach also exposed names, bcrypt password hashes and the titles of converted documents. The data was provided to HIBP by <a href="https://dehashed.com/" target="_blank" rel="noopener">dehashed.com</a>.',
    addedDate: '2021-01-19T10:45:32Z',
    breachDate: '2020-09-28',
    modifiedDate: '2021-01-19T10:45:32Z',
    isRetired: false,
    isSpamList: false,
    isVerified: true,
    isSensitive: false,
    isFabricated: false,
  },
];
