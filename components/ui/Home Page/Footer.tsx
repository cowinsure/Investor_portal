import { MessageCircle, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 bg-green-950 py-14 text-gray-600 border-t border-gray-200">
      <div className="max-w-[80%] mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Branding */}
          <div>
            <h2 className="text-3xl font-bold text-green-600">
              Insure<span className="text-green-600">Cow</span>
            </h2>
            {/* <p className="text-gray-300 mt-1">
              Revolutionizing Livestock Investment • Secure • Transparent •
              Profitable
            </p> */}
            <div className="mt-4 space-y-2">
              <div className="flex items-start gap-2 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">Bangladesh Office:</p>
                  <p>House 117, Road 5, Block B, Niketon, Dhaka, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">Singapore Office:</p>
                  <p>192 Waterloo St. #05-03 Skyline, Singapore 187966</p>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Button */}
          <Link
            href="https://wa.me/8801999467873"
            target="_blank"
            className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-green-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5" />
            Contact on WhatsApp
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-10 pt-6">
          {/* Bottom Text */}
          <p className="text-center text-gray-200 text-sm">
            © {new Date().getFullYear()} InsureCow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
