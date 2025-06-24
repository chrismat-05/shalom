import { ExternalLink } from "lucide-react";
import { Facebook as FacebookIcon, Instagram as InstagramIcon, Youtube as YoutubeIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">IPC Shalom</h3>
            <p className="text-indigo-100">
              A vibrant community of faith in Bahrain, committed to sharing God's love and making disciples.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-indigo-100 hover:text-white transition">Home</a></li>
              <li><a href="/about" className="text-indigo-100 hover:text-white transition">About Us</a></li>
              <li><a href="/ministries" className="text-indigo-100 hover:text-white transition">Ministries</a></li>
              <li><a href="/gallery" className="text-indigo-100 hover:text-white transition">Gallery</a></li>
              <li><a href="#contact" className="text-indigo-100 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Service Times</h3>
            <ul className="space-y-2 text-indigo-100">
              <li>Sunday Worship: 7:30 PM</li>
              <li>Bible Study: Friday 11:00 AM</li>
              <li>Tamil Service: Friday 5:00 PM</li>
              <li>Prayer Meeting: Wednesday 7:30 PM</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a href="https://www.facebook.com/ipcshalombh/" className="bg-indigo-700/50 p-3 rounded-full hover:bg-indigo-700 transition">
                <FacebookIcon size={20} className="text-white" />
              </a>
              <a href="https://www.instagram.com/ipcshalombh/" className="bg-indigo-700/50 p-3 rounded-full hover:bg-indigo-700 transition">
                <InstagramIcon size={20} className="text-white" />
              </a>
              <a href="https://www.youtube.com/@ipcshalombh" className="bg-indigo-700/50 p-3 rounded-full hover:bg-indigo-700 transition">
                <YoutubeIcon size={20} className="text-white" />
              </a>
            </div>
            <p className="text-indigo-100">
              IPC Shalom Church Villa<br />
              Zinj, Bahrain
            </p>
          </div>
        </div>
        
        <div className="pt-6 border-t border-indigo-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-indigo-200 text-sm">
            © {new Date().getFullYear()} IPC Shalom. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-indigo-200">
            Built by
            <a
              href="https://thecma.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline flex items-center gap-1"
            >
              CMA <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}