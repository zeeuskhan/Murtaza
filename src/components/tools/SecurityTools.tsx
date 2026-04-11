import React, { useState } from 'react';
import { Copy, Check, Shield, CreditCard, Globe, X } from 'lucide-react';
import validator from 'validator';

const ToolContainer: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
    {children}
  </div>
);

const InputField: React.FC<{
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  type?: string;
}> = ({ label, value, onChange, placeholder, type = 'text' }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-slate-700">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
    />
  </div>
);

export const PasswordStrengthMeter = () => {
  const [password, setPassword] = useState('');

  const getStrength = (pass: string) => {
    let score = 0;
    if (!pass) return 0;
    if (pass.length > 6) score += 1;
    if (pass.length > 10) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;
    return score;
  };

  const strength = getStrength(password);
  const labels = ['Very Weak', 'Weak', 'Fair', 'Strong', 'Very Strong'];
  const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-blue-500', 'bg-emerald-500'];

  return (
    <ToolContainer title="Password Strength Meter">
      <div className="space-y-4">
        <InputField label="Enter Password" value={password} onChange={setPassword} type="password" placeholder="Type password..." />
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
            <span>Strength: {labels[strength - 1] || 'None'}</span>
            <span>{strength}/5</span>
          </div>
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`h-full flex-1 transition-all duration-500 ${i <= strength ? colors[strength - 1] : 'bg-transparent'} border-r border-white last:border-0`}
              />
            ))}
          </div>
        </div>
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Suggestions:</p>
          <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
            <li className={password.length > 10 ? 'text-emerald-600' : ''}>At least 10 characters</li>
            <li className={/[A-Z]/.test(password) ? 'text-emerald-600' : ''}>Include uppercase letters</li>
            <li className={/[0-9]/.test(password) ? 'text-emerald-600' : ''}>Include numbers</li>
            <li className={/[^A-Za-z0-9]/.test(password) ? 'text-emerald-600' : ''}>Include special characters</li>
          </ul>
        </div>
      </div>
    </ToolContainer>
  );
};

export const CreditCardValidator = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [result, setResult] = useState<{ valid: boolean; type: string } | null>(null);

  const validate = () => {
    const cleanNumber = cardNumber.replace(/\s/g, '');
    const valid = validator.isCreditCard(cleanNumber);
    let type = 'Unknown';
    if (valid) {
      if (/^4/.test(cleanNumber)) type = 'Visa';
      else if (/^5[1-5]/.test(cleanNumber)) type = 'Mastercard';
      else if (/^3[47]/.test(cleanNumber)) type = 'American Express';
      else if (/^6(?:011|5)/.test(cleanNumber)) type = 'Discover';
    }
    setResult({ valid, type });
  };

  return (
    <ToolContainer title="Credit Card Validator">
      <div className="space-y-4">
        <InputField label="Card Number" value={cardNumber} onChange={setCardNumber} placeholder="4111 1111 1111 1111" />
        <button
          onClick={validate}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
        >
          <CreditCard size={18} /> Validate Card
        </button>
        {result && (
          <div className={`p-6 rounded-xl border flex items-center justify-between ${result.valid ? 'bg-emerald-50 border-emerald-100 text-emerald-700' : 'bg-red-50 border-red-100 text-red-700'}`}>
            <div className="flex items-center gap-3">
              <Shield size={24} />
              <div>
                <p className="font-bold">{result.valid ? 'Valid Card' : 'Invalid Card'}</p>
                <p className="text-xs opacity-80">Type: {result.type}</p>
              </div>
            </div>
            {result.valid && <Check size={24} />}
          </div>
        )}
      </div>
    </ToolContainer>
  );
};

export const IBANValidator = () => {
  const [iban, setIban] = useState('');
  const [result, setResult] = useState<boolean | null>(null);

  const validate = () => {
    // Basic IBAN regex: Starts with 2 letters, followed by 2 digits, then 11-30 alphanumeric characters
    const ibanRegex = /^[A-Z]{2}[0-9]{2}[A-Z0-9]{11,30}$/;
    setResult(ibanRegex.test(iban.replace(/\s/g, '').toUpperCase()));
  };

  return (
    <ToolContainer title="IBAN Validator">
      <div className="space-y-4">
        <InputField label="IBAN Number" value={iban} onChange={setIban} placeholder="GB29 NWBK 6016 1331 9268 19" />
        <button
          onClick={validate}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
        >
          <Globe size={18} /> Validate IBAN
        </button>
        {result !== null && (
          <div className={`p-6 rounded-xl border flex items-center justify-between ${result ? 'bg-emerald-50 border-emerald-100 text-emerald-700' : 'bg-red-50 border-red-100 text-red-700'}`}>
            <div className="flex items-center gap-3">
              <Shield size={24} />
              <div>
                <p className="font-bold">{result ? 'Valid IBAN' : 'Invalid IBAN'}</p>
              </div>
            </div>
            {result && <Check size={24} />}
          </div>
        )}
      </div>
    </ToolContainer>
  );
};
