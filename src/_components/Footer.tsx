'use client';
  
import { footerBg } from '@/imports/images.imports';
import { FaFacebookF, FaInstagram, FaGoogle } from 'react-icons/fa';

const Footer = () => {
  return (
    <section
      className="text-white pt-16 pb-8"
      style={{
        backgroundImage: `url(${footerBg.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">AM Advocates and Legal Consultations</h3>
          <p className="text-sm leading-relaxed">
            In our office, we are committed to supporting justice and protecting our clients&apos;
            rights. With a deep understanding of the legal system.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a href="#" className="p-2 border rounded text-white hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 border rounded text-white hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 border rounded text-white hover:text-gray-300">
              <FaGoogle />
            </a>
          </div>
        </div>

        {/* Quick Links (Arabic) */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>من نحن</li>
            <li>مجالات الممارسة</li>
            <li>دراسات الحالة</li>
            <li>مدونتنا</li>
            <li>المنتجات</li>
            <li>اتصل بنا</li>
          </ul>
        </div>

        {/* Practice Areas */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Practice Areas</h3>
          <ul className="space-y-2 text-sm">
            <li>Business Law</li>
            <li>Criminal Law</li>
            <li>Corporate Legal Affairs</li>
            <li>Commercial Law</li>
            <li>Drug Crimes</li>
            <li>Real Estate Law</li>
          </ul>
        </div>

        {/* Recent Cases */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Cases</h3>
          <ul className="space-y-4">
            {[
              { title: 'Criminal Law' },
              { title: 'Business Law' },
              { title: 'Education Law' },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="bg-white w-[60px] h-[60px] text-black text-xs flex items-center justify-center">
                  100 × 100
                </div>
                <div>
                  <p className="text-sm">Facing</p>
                  <p className="font-bold text-sm">{item.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-gray-300">
        All rights reserved © Legal M Law Office and Legal Consultations. Designed by Aicubes
      </div>
    </section>
  );
};

export default Footer;
