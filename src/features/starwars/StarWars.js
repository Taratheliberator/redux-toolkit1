import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setFactNumber, selectFacts, selectFactNumber } from "./starwarsSlice";
import styles from './StarWars.module.css';

export default function StarWars() {
  const dispatch = useDispatch();
  const facts = useSelector(selectFacts);
  const factNumber = Number(useSelector(selectFactNumber));

  return (
    <div className={ styles.container }>
      <div className={ styles.number }>
        <input
          type="number"
          value={ factNumber }
          onChange={ (e) => dispatch(setFactNumber(e.target.value)) }
        />
      </div>
      <div className={ styles.facts }>
        <ol>
          {facts.map((fact, index) => <li key={ index }>{ fact }</li>)}
        </ol>
      </div>
    </div>
  );
}
