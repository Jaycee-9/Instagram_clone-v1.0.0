import NavigationBar from "./NavigationBar";

export default function Layout({ children }) {
  return (
    <div className="app">
      <div className="app-nav">
        <NavigationBar />
      </div>
      <main>{children}</main>
    </div>
  );
}
