/** Central place for outbound links so they only need updating once. */
export const SITE = {
  name: 'FlowCart',
  version: '2.4',
  /** Direct download of the installable WordPress plugin zip. */
  pluginDownloadUrl:
    'https://github.com/DevWithEasy/flowcart/releases/download/flowcart/flowcart.zip',
  pluginFileName: 'flowcart.zip',
  repoUrl: 'https://github.com/DevWithEasy/flowcart',
  releasesUrl: 'https://github.com/DevWithEasy/flowcart/releases'
} as const;
