import React, {useState} from 'react'
import {Formik, Field, Form} from 'formik';
import {PokeShower} from "../PokeShower/PokeShower";
import {GetPokemonById} from "../../API/API";
import s from './PokeFinder.module.css'

export const PokeFinder = () => {
    const [pokemon, setInfo] = useState('')


    return (
        <div>

            <Formik
                initialValues={{
                    pokename: '',
                }}
                onSubmit={(values) => {
                    GetPokemonById(values.pokename).then(response => {
                        setInfo(response)
                    })
                }}>

                <Form>
                    <label htmlFor="pokename">Write down pokemon's name or id </label><br/> 
                    <Field className={s.inputForm}  id="pokename" name="pokename"/>
                        <button type="submit">Submit</button>
                        </Form>
                        </Formik>
                        <PokeShower values={pokemon}/>
                        </div>
                        )


                        }

