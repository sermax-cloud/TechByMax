import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="h-2 w-full bg-gradient-to-r from-primary to-emerald-600" />

      <div className="container mx-auto px-6 py-24">
        <SectionHeader title="Start Your Project" subtitle="Contact Us" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Info Side */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a href="tel:+233242943446" className="flex items-start gap-4 text-gray-600 hover:text-primary transition-colors">
                  <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-secondary">Phone</p>
                    <p>+233 242943446</p>
                    <p className="text-sm text-gray-400">Mon-Fri, 9am - 5pm</p>
                  </div>
                </a>

                <a href="mailto:info@techbymax.com" className="flex items-start gap-4 text-gray-600 hover:text-primary transition-colors">
                  <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-secondary">Email</p>
                    <p>info@techbymax.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 text-gray-600">
                  <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-secondary">Office</p>
                    <p>12 Independence Avenue,<br />Airport City, Accra, Ghana</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <a
                  href="https://wa.me/233550000000"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#25D366] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors shadow-lg shadow-green-200"
                >
                  <MessageCircle size={20} /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Simple Map Embed Placeholder */}
            <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                Map Loading... (Accra, Ghana)
              </div>
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?q=Airport+City+Accra&t=&z=13&ie=UTF8&iwloc=&output=embed"
                title="Map"
                className="opacity-80 hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-2">Tell us about your vision</h3>
              <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="john@company.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Service Interest</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white text-gray-600">
                    <option>Web Development</option>
                    <option>Mobile Application</option>
                    <option>Enterprise Software / ERP</option>
                    <option>AI Automation</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Project Budget (GHS)</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white text-gray-600">
                    <option>GHS 5,000 - 15,000</option>
                    <option>GHS 15,000 - 50,000</option>
                    <option>GHS 50,000 - 100,000</option>
                    <option>GHS 100,000+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Tell us more about your project goals..."></textarea>
                </div>

                <Button className="w-full md:w-auto mt-4" icon>Send Message</Button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {[
              { q: 'How long does it take to build a website?', a: 'A standard corporate website typically takes 2-4 weeks, while complex web applications may take 8-12 weeks depending on requirements.' },
              { q: 'Do you offer post-launch support?', a: 'Yes, we provide 3 months of free maintenance with every project, and optional ongoing support packages thereafter.' },
              { q: 'Can you integrate local payment gateways?', a: 'Absolutely. We have extensive experience integrating Paystack, Hubtel, and other local Ghanaian payment processors.' },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-secondary mb-2">{faq.q}</h4>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;