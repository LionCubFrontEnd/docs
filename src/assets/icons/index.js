import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';

import { Android, Apple } from '@styled-icons/boxicons-logos';

const AndroidIcon = ({ className, ...props }) => {
  return <Android className={clsx('text-[#3ddb85]', className)} {...props} />;
};

const AppleIcon = ({ className, ...props }) => {
  return <Apple className={clsx('text-text', className)} {...props} />;
};

AppleIcon.propTypes = AndroidIcon.propTypes = {
  className: PropTypes.string,
};

export { GitpodIcon } from './GitpodIcon';
export { InstagramIcon } from './InstagramIcon';

export { AlgoliaIcon } from './AlgoliaIcon';

export { InstatusIcon } from './InstatusIcon';
export { CleavrIcon } from './CleavrIcon';
export { JSIcon } from './JSIcon';
export { DiscordIcon } from './DiscordIcon';

export { AndroidIcon, AppleIcon };

export { ReactRevolveIcon } from './ReactRevolveIcon';
export { VercelIcon } from './VercelIcon';
export { KoyebIcon } from './KoyebIcon';
export { CannyIcon } from './CannyIcon';
