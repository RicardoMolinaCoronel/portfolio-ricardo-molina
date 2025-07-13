import { useState } from "react";

import NavLink from "./NavLinkReact";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl w-full lg:py-1 lg:flex lg:flex-row lg:items-center lg:justify-between lg:px-32 ">
      <div className="flex items-center py-3 px-4">
  <div className="w-6 h-6 lg:hidden" />

  <div className="flex flex-1 justify-center lg:flex-none">
    <span className="text-2xl font-extrabold">Ricardo Molina</span>
  </div>

  <button
    className="lg:hidden"
    onClick={() => setIsOpen(!isOpen)}
    aria-label="Abrir menú"
  >
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>
</div>



      {/* Navegación desktop */}
      <nav className="hidden lg:flex flex-row justify-center gap-x-6 opacity-90 text-sm">
        <NavLink href="#">Inicio</NavLink>
        <NavLink href="#experience">Experiencia</NavLink>
        <NavLink href="#projects">Proyectos</NavLink>
        <NavLink href="#education">Educación</NavLink>
        <NavLink href="#technologies">Tecnologías</NavLink>
        <NavLink href="#achievements">Logros</NavLink>
        <NavLink href="#contact">Contacto</NavLink>
      </nav>

      {/* Sidebar móvil */}
      <div className={`fixed inset-y-0 z-50 transition-transform duration-300 ease-in-out transform lg:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="w-72 h-screen bg-white/95 dark:bg-gray-800 shadow-2xl p-6">
      {/* Cerrar */}
        <button className="absolute top-4 right-4 text-gray-600 dark:text-white" onClick={() => setIsOpen(false)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Encabezado Sidebar */}
        <div className="mb-6 mt-2 flex items-center gap-2 ">
          <img src="/logo_circular.webp" className="w-12 h-17"/>
          <span className="text-lg font-semibold">Menú</span>
        </div>

        <hr className="border-gray-300 dark:border-gray-700 pb-6" />

        {/* Menú */}
        <ul className="flex flex-col gap-4 text-base font-medium text-gray-800 dark:text-white">
          {[
            ["#", "Inicio", <HomeIcon />],
            ["#experience", "Experiencia", <DeskIcon />],
            ["#projects", "Proyectos", <CodeIcon />],
            ["#education", "Educación", <PenIcon />],
            ["#technologies", "Tecnologías", <PCIcon />],
            ["#achievements", "Logros", <RosetteIcon />],
            ["#contact", "Contacto", <MailIcon />]
          ].map(([href, label, icon]) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setIsOpen(false)}
                className="block px-2 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="flex items-center gap-2">
                {icon}
                {label}
                </span>
              </a>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;


const HomeIcon = () => {
    return (
<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-home"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
    );
};

const DeskIcon = () => {
    return (
<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-desk"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 6h18" /><path d="M4 6v13" /><path d="M20 19v-13" /><path d="M4 10h16" /><path d="M15 6v8a2 2 0 0 0 2 2h3" /></svg>    );
};

const CodeIcon = () => {
    return (
<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-codesandbox"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 7.5v9l-4 2.25l-4 2.25l-4 -2.25l-4 -2.25v-9l4 -2.25l4 -2.25l4 2.25z" /><path d="M12 12l4 -2.25l4 -2.25" /><path d="M12 12l0 9" /><path d="M12 12l-4 -2.25l-4 -2.25" /><path d="M20 12l-4 2v4.75" /><path d="M4 12l4 2l0 4.75" /><path d="M8 5.25l4 2.25l4 -2.25" /></svg>);
};

const PenIcon = () => {
    return (
<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-ballpen"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6l7 7l-4 4" /><path d="M5.828 18.172a2.828 2.828 0 0 0 4 0l10.586 -10.586a2 2 0 0 0 0 -2.829l-1.171 -1.171a2 2 0 0 0 -2.829 0l-10.586 10.586a2.828 2.828 0 0 0 0 4z" /><path d="M4 20l1.768 -1.768" /></svg>);
};

const PCIcon = () => {
    return (
<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24" fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-device-imac"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 4a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-12z" /><path d="M3 13h18" /><path d="M8 21h8" /><path d="M10 17l-.5 4" /><path d="M14 17l.5 4" /></svg>);
};

const RosetteIcon = () => {
    return (
<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24" fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-rosette"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" /></svg>);
};

const MailIcon = () => {
    return (
<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>);
};