import React from 'react'
import './Tip_button.css'
import { billContext } from './App'
import { useContext } from 'react'

export function TipButton(props) {
    var {bill, setBill} = useContext(billContext)
    var {people, setPeople} = useContext(billContext)
    var {tipAmount, SettipAmount} = useContext(billContext)
    var {totalPerson, SettotalPerson} = useContext(billContext)

    let intBill = parseFloat(bill)
    let intPercentage = parseFloat(props.title)
    let intPeople = parseFloat(people)
    const Calculate = () => {
        var tip_per_person = (intBill * intPercentage / 100) / intPeople
        let total_per_person = (intBill / intPeople) + tip_per_person
        SettipAmount(tipAmount = tip_per_person)
        SettotalPerson(totalPerson = total_per_person)
    }
    return (
        <>
            <button className='tip_button' onClick={() => Calculate()}>{props.title}%</button>
        </>
    )
}


