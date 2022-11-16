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
} from "./components/Input/input";
import {Select} from "./components/Select/select";
import {ExampleReactMemo} from "./components/React_Memo/reactMemo";
import {DifficultCountingExample, HelpsToReactMemo, LikeUseCallback} from "./components/React_Memo/useMemo";
import {ExampleUseState} from "./components/React_Memo/useState";
import {ExampleUseEffect} from "./components/React_Memo/useEffect";

export const App = () => {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [onOff, setOnOff] = useState<boolean>(false)

    return (
        <div>
            <ExampleUseEffect/>
            <ExampleUseState/>

            {/*<ExampleReactMemo/>*/}
            <DifficultCountingExample/>
            <HelpsToReactMemo/>
            <LikeUseCallback/>

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
            {/*<GetValueOfUncontrolledInputByButtonPress/>*/}
            {/*<ControlledInput/>*/}
            {/*<ControlledCheckbox/>*/}
            {/*<ControlledSelect/>*/}
            <hr/>
            <Select value={'1'}
                    onChange={()=>{}}
                    items={ [
                        {value: '1', title: 'Minsk'},
                        {value: '2', title: 'Novo'},
                        {value: '3', title: 'Kiev'} ] }/>

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
