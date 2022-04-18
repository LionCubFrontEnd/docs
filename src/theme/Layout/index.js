/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import SkipToContent from '@theme/SkipToContent';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import LayoutProviders from '@theme/LayoutProviders';
// import ThemeSwitcher from '@site/src/components/ThemeSwitcher';
import LayoutHead from '@theme/LayoutHead';
import useKeyboardNavigation from '@theme/hooks/useKeyboardNavigation';
import { ThemeClassNames } from '@docusaurus/theme-common';
import './styles.css';

function Layout(props) {
  const { children, noFooter, wrapperClassName, pageClassName } = props;
  useKeyboardNavigation();
  return (
    <LayoutProviders>
      <LayoutHead {...props} />
      <SkipToContent />
      <AnnouncementBar />
      <Navbar />
      <div
        className={clsx(
          ThemeClassNames.wrapper.main,
          wrapperClassName,
          pageClassName
        )}
      >
        {children}
      </div>
      {!noFooter && <Footer />}
    </LayoutProviders>
  );
}

export default Layout;