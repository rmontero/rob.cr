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
    <div className="text-slate-700">
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
