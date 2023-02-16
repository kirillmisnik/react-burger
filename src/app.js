import React from 'react';
import AppHeader from './components/app-header/app-header';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
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
    fetch("https://norma.nomoreparties.space/api/ingredients")
      .then(res => res.json())
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
