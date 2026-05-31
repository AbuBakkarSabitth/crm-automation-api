export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-6 bg-black text-white">

      <h1 className="text-xl font-bold">
        Sabith.dev
      </h1>

      <div className="space-x-6">
        <a href="#projects" className="hover:text-purple-400">
          Projects
        </a>
        <a href="#contact" className="hover:text-purple-400">
          Contact
        </a>
      </div>

    </div>
  );
}