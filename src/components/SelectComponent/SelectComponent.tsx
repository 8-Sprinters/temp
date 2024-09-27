import Select from 'react-select';
import { vars } from '@/styles/__theme.css';

interface OptionsProps {
  value: string;
  label: string;
}

interface SelectProps {
  name: string;
  options: OptionsProps[];
  defaultValue?: OptionsProps;
  isSearchable?: boolean;
  onChange?: any;
}

const selectStyles = {
  control: (provided: object, state: { isFocused: boolean }) => ({
    ...provided,
    maxWidth: '320px',
    backgroundColor: 'white',
    boxShadow: 'none',
    border: 0,
    borderRadius: '8px',
    cursor: 'pointer',
    '&:hover': {
      borderColor: 'none',
      backgroundColor: vars.color.lightblue,
    },
  }),
  singleValue: (provided: object) => ({
    ...provided,
    fontSize: '1.3rem',
  }),
  option: (provided: object, { isSelected }: { isSelected: boolean }) => ({
    ...provided,
    backgroundColor: isSelected ? vars.color.lightblue : vars.color.white,
    color: vars.color.black,
    fontSize: '1.3rem',
    '&:hover': {
      backgroundColor: vars.color.lightblue,
    },
  }),
  menu: (provided: object) => ({
    ...provided,
    maxWidth: '320px',
    boxShadow: '0px 2px 12px 0px rgba(0, 0, 0, 0.08)',
    borderRadius: '8px',
    border: `1px solid ${vars.color.gray7}`,
    overflow: 'hidden',
  }),
};

function SelectComponent({ name, options, defaultValue, isSearchable = false, onChange }: SelectProps) {
  return (
    <Select
      id={name}
      instanceId={name}
      options={options}
      styles={selectStyles}
      isSearchable={isSearchable}
      defaultValue={defaultValue}
      onChange={onChange}
      components={{
        IndicatorSeparator: () => null,
      }}
    />
  );
}

export default SelectComponent;
