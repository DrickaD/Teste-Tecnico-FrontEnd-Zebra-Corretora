export interface bodyReturn {
    id: number;
    nome: string;
}
  
export interface SelectStatesProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: bodyReturn[];
    selectedOption:  number | "";
    setSelectedOption: React.Dispatch<React.SetStateAction<number | "">>;
}

export interface SelectCitiesesProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    selectedCity:  number | "";
    setSelectedCity: React.Dispatch<React.SetStateAction<number | "">>;
    cities: bodyReturn[];
}

export interface FormData{
    Address: string;
    Number: number;
    State: string;
    City: string
}