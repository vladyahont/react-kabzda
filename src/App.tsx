import React, {useState} from 'react';
import './App.css';
import {UnControlledAccordion} from "./components/Accordion_UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/Rating_UnControlledRating/UnControlledRating";
import {OnOff} from "./components/OnOff_UnControlledOnOff/OnOff";
import {Accordion} from "./components/Accordion_UnControlledAccordion/Accordion";
import {Rating, RatingValueType} from './components/Rating_UnControlledRating/Rating';
import {UnControlledOnOff} from "./components/OnOff_UnControlledOnOff/UnControlledOnOff";
import {
    ControlledCheckbox,
    ControlledInput,
    ControlledInputWithFixedValue, ControlledSelect,
    GetValueOfUncontrolledInputByButtonPress,
    TrackValueOfUncontrolledInput,
    UncontrolledInput
} from "./components/input";
import {Select} from "./components/Select/select";

export const App = () => {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [onOff, setOnOff] = useState<boolean>(false)

    return (
        <div>
            <OnOff on={onOff} onChange={(on) => setOnOff(on)}/>
            <UnControlledOnOff onChange={setOnOff}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UnControlledRating />

            <Accordion title={'Menu'} collapsed={accordionCollapsed}
                       items={[{title: 'Vlad', value: 1},
                           {title: 'Tanya', value: 2},
                           {title: 'Chong', value: 3}]}
                       onClick={()=>{}}
                       onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>
            <UnControlledAccordion title={'Bla Bla'} />

            {/*<UncontrolledInput/>*/}
            {/*<TrackValueOfUncontrolledInput/>*/}
            <GetValueOfUncontrolledInputByButtonPress/>
            <ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect/>
            <hr/>
            <Select value={123} onClick={()=>{}} items={[]}/>
        </div>
    );
}
type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <h2>{ props.title }</h2>
}
export default App;
