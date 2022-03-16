import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import React from 'react';
import 'styles/root/_layout.scss';

interface Props {
  children?: ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className={`layout`}>
      <Header />
      <div className="placeholder" />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
