import {forwardRef, ForwardRefRenderFunction } from 'react';
import style from "./style.module.scss"
import { SelectCitiesesProps } from '../../interfaces/interfaces';

const SelectCities: ForwardRefRenderFunction<HTMLSelectElement, SelectCitiesesProps> = (
  {selectedCity, setSelectedCity, cities, ...rest}, ref) =>  {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedCity(Number(event.target.value));
    };
  
    return (
        <div>
            <select ref= {ref} {...rest}  className={style.select} value={selectedCity} onChange={handleChange} >
              <option value="">Cidade</option>
              {cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.nome}
                </option>
              ))}
          </select>
        </div>
     
    );
  };

export default forwardRef(SelectCities);