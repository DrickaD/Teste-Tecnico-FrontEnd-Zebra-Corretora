import {forwardRef, ForwardRefRenderFunction } from 'react';
import style from "./style.module.scss"
import { SelectStatesProps } from '../../interfaces/interfaces';

const SelectStates: ForwardRefRenderFunction<HTMLSelectElement, SelectStatesProps> = (
  {options, setSelectedOption, selectedOption, ...rest}, ref) =>  {
  
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(Number(event.target.value));
    };
  
    return (
        <div>
            <select ref= {ref} {...rest}  className={style.select} value={selectedOption} onChange={handleChange} >
              <option value="">Estado</option>
              {options.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.nome}
                </option>
              ))}
          </select>
        </div>
     
    );
  };

export default forwardRef(SelectStates);