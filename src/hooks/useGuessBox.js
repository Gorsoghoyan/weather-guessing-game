import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWeatherAPI,
  selectCities,
  selectWeather,
  setRandomCities,
  toggleGameOver,
  selectLoading,
  selectError,
  setResults,
  setWins,
} from "../store/slices/gameSlice";

export const useGuessBox = () => {
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [currentCity, setCurrentCity] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);

  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const selectedCities = useSelector(selectCities);
  const weather = useSelector(selectWeather);
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  useEffect(() => {
    dispatch(setRandomCities());
  }, [dispatch]);

  useEffect(() => {
    if (!selectedCities) return;
    setCurrentCity(selectedCities[currentCityIndex]);
  }, [selectedCities, currentCityIndex]);

  useEffect(() => {
    if (!weather) return;
    const checkTheGuess = (currentCityTemp) => {
      const userGuess = +inputRef.current.value;

      if (Math.abs(currentCityTemp - userGuess) <= 5) {
        dispatch(setWins());
        dispatch(setResults({
          id: Math.random(),
          guess: userGuess,
          temp: currentCityTemp,
          status: "won"
        }));

        inputRef.current.value = "";
        return;
      }

      dispatch(setResults({
        id: Math.random(),
        guess: userGuess,
        temp: currentCityTemp,
        status: "lost"
      }));
      
      inputRef.current.value = "";
    };

    checkTheGuess(Math.round(weather.main.feels_like));
  }, [weather, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    if (currentCityIndex === selectedCities?.length - 1) {
      setBtnDisabled(true);
      dispatch(fetchWeatherAPI(currentCity));

      setTimeout(() => {
        dispatch(toggleGameOver(true));
      }, 1000);

      setCurrentCityIndex(0);
      return;
    }
    
    dispatch(fetchWeatherAPI(currentCity));
    setCurrentCityIndex(prev => prev + 1);
  };

  return {
    error,
    loading,
    inputRef,
    btnDisabled,
    currentCity,
    handleSubmit
  };
};