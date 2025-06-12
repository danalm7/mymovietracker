import Menu from './Menu';

export default function Header() {
  return (
    <>
      <header className="flex gap-4 px-16 py-4 items-center">
        <h1 className="text-4xl font-montserrat font-extrabold">
          The
          <br />
          Movie
          <br />
          Tracker
        </h1>
        <Menu />
      </header>
    </>
  );
}
