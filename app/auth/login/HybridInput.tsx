'use client';
import { useState } from 'react';
import { Check, X } from 'lucide-react';
import styles from '@/components/form/input/input.module.css';
import { mergeClasses, phoneMask, removeNumbers } from '@/utils';
import type { ChangeEvent, InputHTMLAttributes } from 'react';
import RequiredTag from '@/components/form/RequiredTag';
import { InputMask, Track } from '@react-input/mask';
import { chars64Mask } from '@/utils/masks';

interface ValidatedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  containerClassName?: string;
  labelClassName?: string;
  inputContainerClassName?: string;
  inputClassName?: string;
  iconContainerClassName?: string;
  children?: React.ReactNode;
}

function HybridInput({
  title,
  name,
  required,
  containerClassName,
  labelClassName,
  inputContainerClassName,
  inputClassName,
  iconContainerClassName,
  children,
  type = 'text',
  ...rest
}: ValidatedInputProps) {
  const [internalValid, setInternalValid] = useState<boolean | null>(null);
  const [value, setValue] = useState("");
  const [isPhone, setIsPhone] = useState(false);

  const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = ((val: string) => {
    if (isPhone) {
      return phoneRegex.test(val);
    } else {
      return emailRegex.test(val);
    }
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    
    if (newValue.length >= 3) {
      const withoutNumbers = removeNumbers(newValue);
      if (withoutNumbers  === "() -" || withoutNumbers === "() -" || withoutNumbers === "") {
        setIsPhone(true);
      }
    } else {
      setIsPhone(false);
    }
    
    const valid = validate(newValue);
    setInternalValid(valid);
  }

  return (
    <div className={mergeClasses('flex flex-col', containerClassName)}>
      <label className={mergeClasses('text-lg font-medium', labelClassName)} htmlFor={name}>
        {title}
        {required && <RequiredTag />}
        {children}
      </label>

      <div className={mergeClasses('relative inline-block', inputContainerClassName)}>
        <InputMask
          {...rest}
          replacement={{ _: /(?=.)/ }}
          mask={isPhone ? phoneMask : chars64Mask}
          value={value}
          onChange={handleChange}
          className={mergeClasses('outline-none text-slate-900 placeholder:text-gray-400', inputClassName)}
          type={type}
          name={name}
          id={name}
        />

        {internalValid !== null && (
          <span className={mergeClasses(iconContainerClassName as string, styles.icon_container)}>
            {internalValid ? (
              <Check className={`${styles.icon} ${styles.icon_valid}`} />
            ) : (
              <X className={`${styles.icon} ${styles.icon_invalid}`} />
            )}
          </span>
        )}
      </div>
    </div>
  );
}

export default HybridInput;
