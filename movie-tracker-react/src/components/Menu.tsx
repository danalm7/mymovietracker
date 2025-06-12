import MenuLink from './MenuLink';

export default function Menu() {
  return (
    <nav className="ml-auto flex items-center gap-4">
      <MenuLink href="/login">Login</MenuLink>
      <MenuLink href="/register">Registro</MenuLink>
      <MenuLink href="/my-movies">Mis películas</MenuLink>
      <MenuLink href="/profile">Perfil</MenuLink>
    </nav>
  );
}
