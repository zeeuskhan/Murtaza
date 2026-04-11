import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  const { t } = useLanguage();
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">{t('contact.title')}</h1>
        <p className="text-xl text-slate-500">{t('contact.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-8">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t('contact.addressTitle')}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {t('contact.address')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600">
                <Phone size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t('contact.phoneTitle')}</h3>
                <p className="text-slate-600">+91 63504 89219</p>
                <p className="text-slate-400 text-sm">{t('contact.availableTitle')}: 9:00 AM - 8:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600">
                <Mail size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t('contact.emailTitle')}</h3>
                <p className="text-slate-600">murtazadarvesh@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600">
                <Clock size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t('contact.hoursTitle')}</h3>
                <p className="text-slate-600">{t('contact.hours')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[500px] rounded-3xl overflow-hidden shadow-sm border border-slate-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14467.44754746654!2d74.583333!3d25.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c23637639955%3A0x3f4291069024097!2sPur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1711800000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="e-Mitra Bhilwara Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
