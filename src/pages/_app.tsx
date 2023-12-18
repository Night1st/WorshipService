import "@/styles/globals.css";
import "@/styles/business-color.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LayoutWebsite from "@/shared/components/layout/LayoutWebsite";
import Head from "next/head";
import { Inter } from 'next/font/google'

import { ThemeProvider as NextThemesProvider } from 'next-themes';
//import useRouterChange from "../shared/hooks/useRouterChange";
// import { store } from 'src/shared/stores';
import { useAppSelector } from "../shared/hooks/useRedux";

const interText = Inter({ subsets: ["vietnamese"], display: 'swap', weight: ['500', '600', '700', '800', '900'] })

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => React.ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: 1 },
  },
});
const ConfigLayout = ({
  children,
  getLayout,
}: {
  children: React.ReactElement;
  getLayout: (page: ReactElement) => React.ReactNode;
}) => {
  //const isRouteLoading = useAppSelector(state => state.appSlice.isRouteLoading);
  //useRouterChange();
  return (
  <main className={interText.className}>
    {/* {isRouteLoading && (
      <div className='bg-foreground/20 bg-opacity-70 absolute z-[9999] w-screen h-screen flex justify-center flex-col gap-2 items-center'>
        <l-jelly
          size="40"
          speed="0.9" 
          color="black" 
        ></l-jelly>
      </div>
    )} */}
    <NextThemesProvider attribute='class' defaultTheme='light' enableSystem>
      {getLayout(children)}
    </NextThemesProvider>
  </main>
  );
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <LayoutWebsite>{page}</LayoutWebsite>);
  return (
    <main className={interText.className}>
      <Head>
        <title>Đồ thờ cúng gia đình</title>
        <meta name="description" content="Website NGS" />
        <meta name="keywords" content="Công nghệ thông tin, Giải pháp số" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href=""
        />
        <link
          rel="apple-touch-icon"
          href=""
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ConfigLayout getLayout={getLayout}>
          <Component {...pageProps} />
        </ConfigLayout>
      </QueryClientProvider>
    </main>
  );
}
