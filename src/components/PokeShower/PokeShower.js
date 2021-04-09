/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import s from "./PokeShower.module.css";

export const PokeShower = ({ values }) => {
  console.log(values);
  return (
    <div>
      {values ? (
        <div>
          <div className={s.pokeName}> {values.name} </div>
          <div className={s.sprites}>
            <div className={s.sprite}>
              <img src={values.sprites.front_default} />
              <p>Default form</p>
            </div>

            <div className={s.sprite}>
              <img src={values.sprites.front_shiny} />
              <p>Shiny form</p>
            </div>
          </div>
        </div>
      ) : (
        "something went wrong, please try again"
      )}
    </div>
  );
};
