'use client';
import { useState } from 'react';
import { IoMailUnreadOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
const countryOptions = [
  { code: 'US', name: 'United States', placeholder: '+1 (555) 123-4567' },
  { code: 'GB', name: 'United Kingdom', placeholder: '+44 7123 456789' },
  { code: 'CA', name: 'Canada', placeholder: '+1 (604) 123-4567' },
  { code: 'AU', name: 'Australia', placeholder: '+61 412 345 678' },
  { code: 'DE', name: 'Germany', placeholder: '+49 1512 3456789' },
  { code: 'FR', name: 'France', placeholder: '+33 6 12 34 56 78' },
  { code: 'IN', name: 'India', placeholder: '+91 98765 43210' },
  { code: 'PK', name: 'Pakistan', placeholder: '+92 300 1234567' },
  { code: 'AE', name: 'UAE', placeholder: '+971 50 123 4567' },
  { code: 'SA', name: 'Saudi Arabia', placeholder: '+966 5 123 4567' },
  { code: 'SG', name: 'Singapore', placeholder: '+65 8123 4567' },
  { code: 'NL', name: 'Netherlands', placeholder: '+31 6 12345678' },
  { code: 'SE', name: 'Sweden', placeholder: '+46 70 123 45 67' },
  { code: 'CH', name: 'Switzerland', placeholder: '+41 79 123 45 67' },
  { code: 'NO', name: 'Norway', placeholder: '+47 912 34 567' }
];

export default function ContactPage() {
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);

  return (
<div className="min-h-screen bg-[#181818] text-[#FFFFFD]">
  <main className="flex flex-col md:flex-row p-4 sm:p-8 md:p-20 gap-6 md:gap-8">
    {/* Left Section */}
    <div className="w-full md:w-1/3 flex flex-col justify-center text-center md:text-left">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">Contact Us</h2>
      <p className="mb-4 md:mb-6 text-xs sm:text-sm md:text-base leading-relaxed text-[#B5B6B6] px-0 md:px-0">
        Not sure what you need? The team at Excellence Code Solution will be
        happy to listen to you and suggest ideas you hadn't considered.
      </p>
      <div className="space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base">
        <p className="flex items-center justify-center md:justify-start gap-1 md:gap-2 text-[#FFFFFD] break-all">
          <IoMailUnreadOutline className="min-w-[16px]" /> excellencecodesolution@gmail.com
        </p>
        <p className="flex items-center justify-center md:justify-start gap-1 md:gap-2 text-[#FFFFFD]">
          <LuPhoneCall className="min-w-[16px]" /> (+92) 300-00-00-000
        </p>
      </div>
    </div>

    {/* Right Section (Form) */}
    <div className="w-full md:w-[60%] bg-[#B5B6B6] rounded-xl border border-[#B5B6B6] my-4 md:my-0">
      <div className="p-4 sm:p-6 md:p-10">
        <h3 className="text-[#181818] text-base sm:text-lg md:text-xl font-semibold mb-4 md:mb-6 text-center md:text-left">
          We'd love to hear from you! <br className="hidden sm:block" /> Let's
          get in touch
        </h3>
        <form className="space-y-3 md:space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-[#B5B6B6] bg-[#181818] text-[#FFFFFD] rounded p-2 w-full text-sm md:text-base"
            />
            <input
              type="text"
              placeholder="Company"
              className="border border-[#B5B6B6] bg-[#181818] text-[#FFFFFD] rounded p-2 w-full text-sm md:text-base"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <input
              type="email"
              placeholder="Email"
              className="border border-[#B5B6B6] bg-[#181818] text-[#FFFFFD] rounded p-2 w-full text-sm md:text-base"
            />
            <div className="flex flex-col sm:flex-row gap-2">
              <select
                value={selectedCountry.code}
                onChange={(e) =>
                  setSelectedCountry(
                    countryOptions.find((c) => c.code === e.target.value)
                  )
                }
                className="border border-[#B5B6B6] bg-[#181818] text-[#FFFFFD] rounded p-2 w-full sm:w-1/3 text-sm md:text-base"
              >
                {countryOptions.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.code}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                placeholder={selectedCountry.placeholder}
                className="border border-[#B5B6B6] bg-[#181818] text-[#FFFFFD] rounded p-2 w-full text-sm md:text-base"
              />
            </div>
          </div>
          <input
            type="text"
            placeholder="Address"
            className="border border-[#B5B6B6] bg-[#181818] text-[#FFFFFD] rounded p-2 w-full text-sm md:text-base"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="border border-[#B5B6B6] bg-[#181818] text-[#FFFFFD] rounded p-2 w-full text-sm md:text-base"
          ></textarea>
          <button
            type="submit"
            className="bg-[#FFFFFD] text-[#181818] px-4 py-2 rounded w-full sm:w-auto hover:bg-[#131414] hover:text-[#f2f2f2] transition text-sm md:text-base"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </main>
</div>

  );
}