import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/footer.css';

function Footer() {
  return (
    <footer data-testid="footer">
      <Link to="/drinks">
        Drinks
        <img
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
          alt="Drink Icon"
        />
      </Link>
      <span> | </span>
      <Link to="/meals">
        <img
          data-testid="meals-bottom-btn"
          src={ mealIcon }
          alt="Meal Icon"
        />
        Meals
      </Link>
    </footer>
  );
}

export default Footer;
