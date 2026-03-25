import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({
  navigation,
  settings,
  withHeaderDivider,
  withProfile,
  profileSize,
  children,
}) {
  return (
    <div className="text-zinc-700 dark:text-zinc-200">
      <Header
        withProfile={withProfile}
        profileSize={profileSize}
        withDivider={withHeaderDivider}
        navigation={navigation}
        settings={settings}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
