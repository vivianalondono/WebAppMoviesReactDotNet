import './MultiSelect.css';

export default function MultiSelect(props:multiSelectProps){

    function toSelect(item: multiSelectModel){
        const selected = [...props.selected, item];
        const notSelecteed = props.notSelected.filter(value => value !== item);
        props.onChange(selected, notSelecteed);
    }

    function deselect(item: multiSelectModel){
        const selected = props.selected.filter(value => value !== item);
        const notSelected = [...props.notSelected, item];
        props.onChange(selected, notSelected);
    }

    function selectAll(){
        const selected = [...props.selected, ...props.notSelected];
        const notSelected: multiSelectModel[] = [];
        props.onChange(selected, notSelected);
    }

    function deselectAll(){
        const notSelected = [...props.notSelected, ...props.selected];
        const selected: multiSelectModel[] = [];
        props.onChange(selected, notSelected);
    }

    return(
        <div className="multi-select">
            <ul>
               {props.notSelected.map(item =>
                <li key={item.key} onClick={() =>toSelect(item)}>{item.value}</li>)} 
            </ul>
            <div className="multi-select-buttons">
                <button type="button" onClick={selectAll}>{'>>'}</button>
                <button type="button" onClick={deselectAll}>{'<<'}</button>
            </div>
            <ul>
               {props.selected.map(item =>
                <li key={item.key} onClick={() =>deselect(item)}>{item.value}</li>)} 
            </ul>
        </div>
    )
}

interface multiSelectProps{
    selected: multiSelectModel[];
    notSelected: multiSelectModel[];
    onChange(selected: multiSelectModel[], notSelected:multiSelectModel[]): void;
}

export interface multiSelectModel{
    key:number;
    value:string;
}