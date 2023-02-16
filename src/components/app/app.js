import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { API_URL } from '../../constants';
import styles from './app.module.css';

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const [data, setData] = React.useState([]);
  
  React.useEffect(() => {
    getFilms();
  }, [])

  const getFilms = () => {
    setHasError(false);
    setIsLoading(true);
    fetch(API_URL)
      .then(res => res.ok ? res.json() : res.json().then((err) => Promise.reject(err)))
      .then(data => {
        setData(data.data);
        setIsLoading(false);
      })
      .catch(e => {
        setHasError(true);
        setIsLoading(false);
      });
  };

  return (
    <div className="App">
      <AppHeader />
      <main>
        {
          !isLoading && !hasError && data.length &&
          <div className={styles.main}>
            <BurgerConstructor data={data} className={styles.leftItem} />
            <BurgerIngredients data={data} className={styles.rightItem} />
          </div>
        }
      </main>
    </div>
  );
}

export default App;
