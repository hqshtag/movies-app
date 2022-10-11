import styled from "styled-components";
import { COLORS } from "../globalStyles";

interface SearchInputProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    placeholder: string;
  }

  const Input = styled.input`
    //position: absolute;
    //top: 28px;
    width: 380px;
    height: 30px;
    border: 1px solid white;
    border-radius: 6px;
    background: rgba(0,0,0,0);
    color: white;
    padding: 1px 14px;
    ::placeholder {
      color: ${COLORS.Gray[300]};
    }
  `
  
  const SearchInput: React.FC<SearchInputProps> = ({
    value,
    handleChange,
    placeholder,
  }) => {
    return (
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    );
  };
  
  export default SearchInput;
  