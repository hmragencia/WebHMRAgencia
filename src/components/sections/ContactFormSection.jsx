import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/supabaseClient';
import { useLanguage } from '@/context/LanguageContext';

const ContactFormSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const serviceOptions = t('contactForm.serviceOptions');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsappContact: false,
    company: '',
    message: '',
    services: [],
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'services') {
      setFormData(prev => ({
        ...prev,
        services: checked ? [...prev.services, value] : prev.services.filter(s => s !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t('contactForm.nameRequired');
    if (!formData.email.trim()) {
      newErrors.email = t('contactForm.emailRequired');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('contactForm.emailInvalid');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: t('contactForm.toastErrorTitle'),
        description: t('contactForm.toastErrorDescription'),
        variant: "destructive",
        duration: 5000,
      });
      return;
    }

    setIsSubmitting(true);

    const submissionData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      whatsapp_contact: formData.whatsappContact,
      company: formData.company || null,
      message: formData.message || null,
      services: formData.services.length > 0 ? formData.services : null,
    };

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([submissionData]);

      if (error) throw error;

      toast({
        title: t('contactForm.toastSuccessTitle'),
        description: t('contactForm.toastSuccessDescription'),
        variant: "default",
        duration: 5000,
      });
      setFormData({
        name: '', email: '', phone: '', whatsappContact: false, company: '', message: '', services: [],
      });
      setErrors({});
    } catch (error) {
      console.error('Error submitting to Supabase:', error);
      toast({
        title: t('contactForm.toastSubmitErrorTitle'),
        description: `${t('contactForm.toastSubmitErrorDescription')} ${error.message}`,
        variant: "destructive",
        duration: 7000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-hmr-blue-dark">{t('contactForm.title')}</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">{t('contactForm.subtitle')}</p>
        </motion.div>
        
        <motion.form 
          onSubmit={handleSubmit} 
          className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-2xl space-y-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <Label htmlFor="name" className="text-gray-700 font-medium">{t('contactForm.nameLabel')} <span className="text-hmr-red">*</span></Label>
            <Input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className={`mt-1 ${errors.name ? 'border-red-500' : 'border-gray-300'}`} disabled={isSubmitting} />
            {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
          </div>
          <div>
            <Label htmlFor="email" className="text-gray-700 font-medium">{t('contactForm.emailLabel')} <span className="text-hmr-red">*</span></Label>
            <Input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={`mt-1 ${errors.email ? 'border-red-500' : 'border-gray-300'}`} disabled={isSubmitting} />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
          </div>
          <div>
            <Label htmlFor="phone" className="text-gray-700 font-medium">{t('contactForm.phoneLabel')}</Label>
            <Input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 border-gray-300" disabled={isSubmitting} />
            <div className="flex items-center mt-2 space-x-2">
              <Checkbox id="whatsappContact" name="whatsappContact" checked={formData.whatsappContact} onCheckedChange={(checked) => setFormData(prev => ({ ...prev, whatsappContact: checked }))} disabled={isSubmitting} />
              <Label htmlFor="whatsappContact" className="text-sm text-gray-600 font-normal">{t('contactForm.whatsappLabel')}</Label>
            </div>
          </div>
          <div>
            <Label htmlFor="company" className="text-gray-700 font-medium">{t('contactForm.companyLabel')}</Label>
            <Input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className="mt-1 border-gray-300" disabled={isSubmitting} />
          </div>
          <div>
            <Label htmlFor="message" className="text-gray-700 font-medium">{t('contactForm.messageLabel')}</Label>
            <Textarea name="message" id="message" value={formData.message} onChange={handleChange} className="mt-1 border-gray-300" rows={4} disabled={isSubmitting} />
          </div>
          <div>
            <Label className="text-gray-700 font-medium">{t('contactForm.serviceLabel')}</Label>
            <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
              {serviceOptions.map(service => (
                <div key={service.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={service.id} 
                    name="services" 
                    value={service.label}
                    checked={formData.services.includes(service.label)}
                    onCheckedChange={(checked) => handleChange({ target: { name: 'services', value: service.label, type: 'checkbox', checked }})}
                    disabled={isSubmitting}
                  />
                  <Label htmlFor={service.id} className="text-sm text-gray-600 font-normal">{service.label}</Label>
                </div>
              ))}
            </div>
          </div>
          <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-hmr-orange to-yellow-400 text-white hover:opacity-90 transition-opacity duration-300 py-3 text-lg" disabled={isSubmitting}>
            {isSubmitting ? t('contactForm.submittingButton') : t('contactForm.submitButton')}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactFormSection;