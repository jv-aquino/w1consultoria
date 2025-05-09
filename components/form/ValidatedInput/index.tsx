'use client';
import { useState } from 'react';
import { Check, X } from 'lucide-react';
import styles from './input.module.css';
import { mergeClasses } from '@/utils';
import type { InputHTMLAttributes } from 'react';

interface ValidatedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue?: (value: any) => void;
  overrideValidate?: (value: string) => boolean;
  isValid?: boolean | null;
  onValidChange?: (valid: boolean) => void;
  containerClassName?: string;
  labelClassName?: string;
  inputContainerClassName?: string;
  inputClassName?: string;
  iconContainerClassName?: string;
  children?: React.ReactNode;
}

function ValidatedInput({
  title,
  name,
  value,
  setValue,
  overrideValidate,
  isValid: externallyControlledValid,
  onValidChange,
  containerClassName,
  labelClassName,
  inputContainerClassName,
  inputClassName,
  iconContainerClassName,
  children,
  type = 'text',
  ...rest
}: ValidatedInputProps) {
  const [inputValue, setInputValue] = useState<string | number | readonly string[]>(value || '');
  const [internalValid, setInternalValid] = useState<boolean | null>(null);

  const isControlled = value !== undefined && setValue !== undefined;

  const validate = overrideValidate ?? ((val: string) => {
    if (type === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    if (type === 'password') return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(val);
    if (type === 'phone') return /^\+?[1-9]\d{1,14}$/.test(val);
    if (type === 'text') return val.trim().length >= 1;
    return true;
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value;
    if (isControlled) {
      setValue!(newVal);
    } else {
      setInputValue(newVal);
    }
    const valid = validate(newVal);
    setInternalValid(valid);
    onValidChange?.(valid);
  };

  const showValid = externallyControlledValid ?? internalValid;
  const inputCurrentValue = isControlled ? value : inputValue;

  return (
    <div className={mergeClasses('flex flex-col', containerClassName)}>
      <label className={mergeClasses('text-lg font-medium', labelClassName)} htmlFor={name}>
        {title}
        {children}
      </label>

      <div className={mergeClasses('relative inline-block', inputContainerClassName)}>
        <input
          {...rest}
          className={mergeClasses('outline-none text-slate-900 placeholder:text-gray-400', inputClassName)}
          type={type}
          name={name}
          id={name}
          value={inputCurrentValue}
          onChange={handleChange}
        />

        {showValid !== null && (
          <span className={mergeClasses(styles.icon_container + ' right-0', iconContainerClassName)}>
            {showValid ? (
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

export default ValidatedInput;
