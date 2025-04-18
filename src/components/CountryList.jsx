import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import PropTypes from "prop-types";
CountryList.propTypes = {
  cities: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  country: PropTypes.string,
  message: PropTypes.string,
};

function CountryList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={cities.id} />
      ))}
    </ul>
  );
}
export default CountryList;
