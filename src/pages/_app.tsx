import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ItemsProvider } from "~/pages/context/itemContext";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ItemsProvider>
      <Component {...pageProps} />
    </ItemsProvider>
  );
};

export default api.withTRPC(MyApp);
