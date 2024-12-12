import React from "react";
import { useState } from "react";

export default function LabelSelect(){
    
    return (
        <div>
            <input type="checkbox" name="Label"></input>
            <label htmlFor="Label" name="Label">Label</label>
            <br/>
            <label>Gender</label>
            <input type="radio" id="genderRadio-f" name="gender"/>
            <label htmlFor="genderRadio-f">female</label>
            <input type="radio" id="genderRadio-m" name="gender"/>
            <label htmlFor="genderRadio-m">male</label>
            <br/>
            <select >Age
                <option value="10">Ten</option>
                <option value="20">Twenty</option>
                <option value="30">Thirty</option>
            </select>
        </div>
    )
}