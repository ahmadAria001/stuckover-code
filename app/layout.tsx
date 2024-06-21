import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Nav } from "./components/Nav";

import "./styles/globals.css";
import styles from "./styles/layout.module.css";
import { twMerge } from "tailwind-merge";

interface Props {
  readonly children: ReactNode;
}

export const runtime = 'edge';
export default function RootLayout({ children }: Props) {  
  return (
    <StoreProvider>
      <html lang="en" className="dark">
	<head>
	  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
	</head>
        <body className="dark:bg-slate-950">
          <section className={styles.container}>
            <main className={styles.main}>
	      {children}
	    </main>
            <footer className={twMerge(styles.footer,"dark:text-slate-400")}>
              <span>Learn </span>
              <a
                className={styles.link}
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
              <span>, </span>
              <a
                className={styles.link}
                href="https://redux.js.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux
              </a>
              <span>, </span>
              <a
                className={styles.link}
                href="https://redux-toolkit.js.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux Toolkit
              </a>
              <span>, </span>
              <a
                className={styles.link}
                href="https://react-redux.js.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Redux
              </a>
              ,<span> and </span>
              <a
                className={styles.link}
                href="https://reselect.js.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reselect
              </a>
            </footer>
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
