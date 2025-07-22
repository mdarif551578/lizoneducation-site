import Link from 'next/link';
import { BookOpenCheck, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <BookOpenCheck className="h-7 w-7 text-primary" />
              <span className="text-xl font-bold font-headline">Lizon IELTS Hub</span>
            </Link>
            <p className="text-muted-foreground">
              Your trusted partner in IELTS preparation and success.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link href="/courses" className="text-muted-foreground hover:text-primary">Courses</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2"> {/* Changed items-center to items-start */}
                <MapPin className="h-4 w-4 shrink-0 mt-1" /> {/* Added shrink-0 and mt-1 for better alignment */}
                <div> {/* Wrapped address lines in a div */}
                  <span>51/102 South Basabo, Kazi Office Road (Beside 'Morning Bell' school & Brac Office), Buddha Mandir, Dhaka-1214</span>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+8801611-611139" className="hover:text-primary">01611-611139</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:lizonedu@gmail.com" className="hover:text-primary">lizonedu@gmail.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/lizoneducation" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/lizonedu/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://bd.linkedin.com/company/lizon-education" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">Linkedin</span>
              </a>
              <a href="https://www.youtube.com/@lizoneducation" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">Youtube</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Lizon Education. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
