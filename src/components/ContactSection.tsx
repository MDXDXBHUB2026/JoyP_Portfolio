import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  MapPin, 
  Languages, 
  Mail, 
  Copy, 
  Check, 
  FileText, 
  Sparkles,
  Building,
  User,
  MessageSquare
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.organization.trim()) errors.organization = 'Please provide your school or organization.';
    if (!formData.message.trim()) errors.message = 'Please enter your message or inquiry.';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitted(true);

    // Provide direct mailto link trigger as seamless native fallback
    const subject = encodeURIComponent(`Professional Inquiry from ${formData.name} (${formData.organization})`);
    const body = encodeURIComponent(`Name: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    
    // Allow user to open default email client if they wish
    window.location.href = mailtoUrl;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono-code text-blue-400 uppercase tracking-wider block mb-2 font-bold">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            “Let’s create meaningful learning experiences.”
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 font-light leading-relaxed">
            For professional opportunities, education-sector collaboration, and Special Education roles, please get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Quick Tools */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Details Card */}
            <div className="p-7 sm:p-8 rounded-3xl glass border border-white/10 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Professional Inquiries</span>
              </h3>

              {/* Email item with 1-click copy */}
              <div className="space-y-2">
                <span className="text-xs font-mono-code text-slate-400 uppercase tracking-wider">
                  Direct Email
                </span>
                <div className="flex items-center justify-between p-3.5 rounded-2xl glass border border-white/10">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="text-xs sm:text-sm text-white font-mono-code truncate">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl text-slate-300 hover:text-white glass glass-hover border border-white/10 transition-colors shrink-0 ml-2 cursor-pointer"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {isCopied ? <Check className="w-4 h-4 text-blue-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {isCopied && (
                  <span className="text-[11px] text-blue-300 font-mono-code block">
                    ✓ Email address copied to clipboard
                  </span>
                )}
              </div>

              {/* Location */}
              <div className="space-y-1 pt-2 border-t border-white/10">
                <span className="text-xs font-mono-code text-slate-400 uppercase tracking-wider">
                  Location
                </span>
                <div className="flex items-center gap-2 text-sm text-white font-medium">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Dubai, United Arab Emirates</span>
                </div>
              </div>

              {/* Languages */}
              <div className="space-y-1 pt-2 border-t border-white/10">
                <span className="text-xs font-mono-code text-slate-400 uppercase tracking-wider">
                  Languages
                </span>
                <div className="flex items-center gap-2 text-sm text-white font-medium">
                  <Languages className="w-4 h-4 text-purple-400" />
                  <span>English (Professional) & Tagalog (Native)</span>
                </div>
              </div>

              {/* Résumé Quick Action */}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl glass glass-hover border border-white/15 text-white hover:text-white text-xs font-semibold transition-all shadow-sm cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-purple-400" />
                  <span>View Printable Executive Résumé</span>
                </button>
              </div>

            </div>

            {/* Note on Professional Collaboration */}
            <div className="p-6 rounded-3xl glass border border-blue-500/20 text-xs text-slate-300 font-light leading-relaxed">
              <span className="font-semibold text-blue-300 block mb-1">
                Recruitment & Partnership Note:
              </span>
              Joy actively responds to professional inquiries from educational institutions, inclusive schools, specialized learning centers, and multidisciplinary clinics.
            </div>

          </div>

          {/* Right Column: Validated Professional Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass border border-white/10 relative">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Professional Message
              </h3>
              <p className="text-xs text-slate-400 font-light mb-6">
                Please provide your contact details and message to initiate communication.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-7 rounded-2xl glass border border-blue-500/40 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center mx-auto border border-white/20">
                    <Check className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Message Prepared & Ready
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-light max-w-md mx-auto">
                    Your inquiry has been compiled. If your email application did not open automatically, you can also send directly to <strong className="text-blue-300">{PERSONAL_INFO.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', organization: '', message: '' });
                    }}
                    className="mt-2 px-5 py-2.5 rounded-2xl glass glass-hover text-slate-200 hover:text-white border border-white/10 text-xs font-semibold cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono-code text-slate-300 mb-1.5 font-medium">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <input
                          id="contact-name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Dr. Sarah Jenkins"
                          className={`w-full px-4 py-3 rounded-2xl glass border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all ${
                            formErrors.name ? 'border-red-400 ring-1 ring-red-400' : 'border-white/10'
                          }`}
                        />
                      </div>
                      {formErrors.name && (
                        <span className="text-[10px] text-red-400 mt-1 block">{formErrors.name}</span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono-code text-slate-300 mb-1.5 font-medium">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="s.jenkins@academy.edu"
                        className={`w-full px-4 py-3 rounded-2xl glass border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all ${
                          formErrors.email ? 'border-red-400 ring-1 ring-red-400' : 'border-white/10'
                        }`}
                      />
                      {formErrors.email && (
                        <span className="text-[10px] text-red-400 mt-1 block">{formErrors.email}</span>
                      )}
                    </div>
                  </div>

                  {/* Organization */}
                  <div>
                    <label htmlFor="contact-org" className="block text-xs font-mono-code text-slate-300 mb-1.5 font-medium">
                      School / Organization / Agency *
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. International Inclusive Academy / Recruitment Search"
                      className={`w-full px-4 py-3 rounded-2xl glass border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all ${
                        formErrors.organization ? 'border-red-400 ring-1 ring-red-400' : 'border-white/10'
                      }`}
                    />
                    {formErrors.organization && (
                      <span className="text-[10px] text-red-400 mt-1 block">{formErrors.organization}</span>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono-code text-slate-300 mb-1.5 font-medium">
                      Message / Role Details *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details regarding your inquiry, open position, or prospective collaboration..."
                      className={`w-full px-4 py-3 rounded-2xl glass border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all resize-y ${
                        formErrors.message ? 'border-red-400 ring-1 ring-red-400' : 'border-white/10'
                      }`}
                    />
                    {formErrors.message && (
                      <span className="text-[10px] text-red-400 mt-1 block">{formErrors.message}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-white hover:bg-slate-100 text-black font-bold text-xs transition-all shadow-lg active:scale-[0.99] cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Professional Message</span>
                    </button>
                  </div>

                  <p className="text-[10px] text-center text-slate-400 font-mono-code pt-1">
                    Direct communication bridge • Responses typically sent within 24-48 hours
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
