import NavMenu from "./header/appBar/NavMenu";

export default function MainLayout({ children }) {
  return (
    <div>
      <header>
        <NavMenu />
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}
