
import SelectCities from "./selectCities/selectCities";
import SelectStates from "./selectStates/selectStates";
import { bodyReturn, FormData } from "../interfaces/interfaces";
import { useEffect, useState } from "react";
import { CaesarDecipher } from "./decipherCaesar";
import { useForm } from "react-hook-form";
import axios from "axios";
import style from "./style.module.scss";


export const Dropdown = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const [cities, setCities] = useState<bodyReturn[]>([]);
  const [selectedCity, setSelectedCity]= useState<number | "">("");
  const [options, setOptions] = useState<bodyReturn[]>([]);
  const [selectedOption, setSelectedOption]= useState<number | "">("");

  console.log(typeof selectedOption)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios.get('http://localhost:3000/states');

        const decryptedData = data.map((state: bodyReturn) => ({
          ...state,
          nome: CaesarDecipher(state.nome, 7),
        }));

        setOptions(decryptedData);

      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    const fetchCity= async () => {
      const uf = selectedOption !== '' ? Number(selectedOption) : null;

      if(uf) {
        const {data} = await axios.get(`http://localhost:3000/states/cities/${uf}`);
        const decryptedData = data.map((city: bodyReturn) => ({
          ...city,
          nome: CaesarDecipher(city.nome, 7),
        }));

        setCities(decryptedData);
      } 
    };

    fetchData();
    fetchCity();
  }, []);

  const submit = (formData: FormData) =>{
     console.log(formData)
  }

    return (
      <form onSubmit={handleSubmit(submit)} className={style.dropdown}>
        <div className={style.select} >
            <SelectStates
              {...register("State")}
              options = {options}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}

            />
        </div>
        <div className={style.select} >
          <SelectCities 
            {...register("City")} 
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity} 
            cities = {cities}
          />
        </div>
        <input className={style.input} type="text" placeholder="Endereço" {...register("Address")} />
        <input className={style.input} type="text" placeholder="Número" {...register("Number")} />
        <button type="submit">Salvar informações</button>
      </form>
    );
  };