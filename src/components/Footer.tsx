// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>

        <nav className="mt-4 md:mt-0">
          <ul className="flex gap-6">
            <li className="cursor-default">Home</li>
            <li className="cursor-default">About</li>
            <li className="cursor-default">Contact</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
