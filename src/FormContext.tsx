import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FormState {
  locations: string[];
  guests: number;
  startDate: Date | null;
  endDate: Date | null;
}

const defaultFormState: FormState = {
  locations: [],
  guests: 0,
  startDate: null,
  endDate: null,
};

interface FormContextValue extends FormState {
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
}

const FormContext = createContext<FormContextValue>({
  ...defaultFormState,
  setFormState: () => {},
});

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [formState, setFormState] = useState<FormState>(defaultFormState);

  return (
    <FormContext.Provider value={{ ...formState, setFormState }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);