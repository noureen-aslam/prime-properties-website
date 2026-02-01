import { useState } from 'react';
import { Calendar, User, Phone, Tag, CheckCircle } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    interest: 'outrate',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ mobile?: string }>({});

  const validateMobile = (mobile: string) => {
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(mobile);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!validateMobile(formData.mobile)) {
      setErrors({ mobile: 'Please enter a valid 10-digit Indian mobile number' });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);

     
      const message = `Hello, my name is ${formData.name}.
My mobile number is ${formData.mobile}.
I am interested in ${formData.interest} property.
Please book my appointment.`;

      
      const whatsappNumber = "918105592706"; 
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, "_blank");

     
      setFormData({ name: '', mobile: '', interest: 'outrate' });
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === 'mobile' && errors.mobile) {
      setErrors({});
    }
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-zinc-900 via-zinc-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Book Your <span className="text-amber-500">Appointment</span>
            </h2>
            <p className="text-xl text-gray-400">
              Let's discuss your property investment goals
            </p>
          </div>

          {submitted ? (
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-2 border-green-500 rounded-2xl p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
              <p className="text-gray-300">
                Your appointment request has been received. We'll contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-zinc-800 rounded-2xl p-8 border border-zinc-700 shadow-2xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="flex items-center gap-2 text-gray-300 mb-2 font-medium">
                    <User className="w-5 h-5 text-amber-500" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="mobile" className="flex items-center gap-2 text-gray-300 mb-2 font-medium">
                    <Phone className="w-5 h-5 text-amber-500" />
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    maxLength={10}
                    className={`w-full px-4 py-3 bg-zinc-900 border rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none ${
                      errors.mobile ? 'border-red-500' : 'border-zinc-700 focus:border-amber-500'
                    }`}
                    placeholder="10-digit mobile number"
                  />
                  {errors.mobile && (
                    <p className="mt-2 text-red-400 text-sm">{errors.mobile}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="interest" className="flex items-center gap-2 text-gray-300 mb-2 font-medium">
                    <Tag className="w-5 h-5 text-amber-500" />
                    Property Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none"
                  >
                    <option value="outrate">Outrate Sale</option>
                    <option value="jd">Joint Development (JD)</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-400 hover:to-yellow-500 transition-all shadow-lg shadow-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Calendar className="w-5 h-5" />
                  {isSubmitting ? 'Submitting...' : 'Book Appointment'}
                </button>
              </div>
            </form>
          )}

          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-4">Or reach us directly:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+918105592706"
                className="flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors font-semibold"
              >
                <Phone className="w-5 h-5" />
                +91 81055 92706
              </a>
              <span className="hidden sm:block text-gray-600">|</span>
              <a
                href="mailto:primepropertiesbanglore@gmail.com"
                className="text-amber-500 hover:text-amber-400 transition-colors"
              >
                primepropertiesbanglore@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}