import React from 'react'
import './CustomTip.css'
import { billContext } from './App'
import { useContext , useState} from 'react'

export function CustomTip() {
    var {bill, setBill} = useContext(billContext)
    var {people, setPeople} = useContext(billContext)
    var {tipAmount, SettipAmount} = useContext(billContext)
    var {totalPerson, SettotalPerson} = useContext(billContext)
    var [custom, Setcustom] = useState(0)


    let intBill = parseFloat(bill)
    var intPercentage = parseFloat(custom)
    let intPeople = parseFloat(people)
    const Calculate = () => {
        console.log(intPercentage + 5)
        var tip_per_person = (intBill * parseFloat(custom) / 100) / intPeople
        let total_per_person = (intBill / intPeople) + tip_per_person
        SettipAmount(tipAmount = tip_per_person)
        SettotalPerson(totalPerson = total_per_person)
    }
    return(
        <input type="number" className='custom_tip' placeholder='Custom' min='1' max='100' onChange={(e) => Setcustom(custom = e.target.value , Calculate())}/>
    )
}