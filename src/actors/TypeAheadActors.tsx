import { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { ActorMovieDTO } from "./actors.model";

export default function TypeAheadActors(props: typeAheadActorsProps){
    const actors: ActorMovieDTO[] = [
        {
            id: 1, name: 'Tom Hollan', character: '', photo: 'https://cloudfront-us-east-1.images.arcpublishing.com/copesa/FFEN3WRTYRH3TE3CIBEWSZRUKI.jpg'
        },
        {
            id: 2, name: 'Scarlet Johanson', character: '', photo: 'https://www.soy502.com/sites/default/files/styles/mobile_full_node/public/2021/Oct/06/scarlett_disney_juicio.jpg'
        },
        {
            id: 3, name: 'Josh Brolin', character: '', photo: 'https://www.ecartelera.com/images/sets/31800/31879.jpg'
        }
    ];
    const selection: ActorMovieDTO[] = [];

    const [draggedElement, SetDraggedElement] = useState<ActorMovieDTO | undefined>(undefined);

    function handleDragStart(actor:ActorMovieDTO){
        SetDraggedElement(actor);
    }

    function handleDragOver(actor: ActorMovieDTO){
        if(!draggedElement){
            return
        }
        if(actor.id !== draggedElement.id){
            const draggedElementIndex = props.actors.findIndex(x => x.id === draggedElement.id);
            const actorIndex = props.actors.findIndex(x => x.id === actor.id);
            const actors = [...props.actors];
            actors[actorIndex] = draggedElement;
            actors[draggedElementIndex] = actor;
            props.onAdd(actors);
        }
    }
    return(
        <>
            <label>Actores</label>
            <Typeahead 
                id="typeahead"
                onChange={actors => {
                    if(props.actors.findIndex(x => x.id === actors[0].id)){
                        props.onAdd([...props.actors, actors[0]])
                    }
                    
                }}
                options={actors}
                labelKey={actor => actor.name}
                filterBy = {['name']}
                placeholder="Escribe el nombre del actor..."
                minLength={1}
                flip={true}
                selected={selection}
                renderMenuItemChildren={actor => (
                    <>
                    <img alt="image actor" src={actor.photo}
                        style={{
                            height: '64px',
                            marginRight: '10px',
                            width: '64px'
                        }}
                    />
                    <span>{actor.name}</span>
                    </>
                )}
            />
            <ul className="list-group">
                {props.actors.map(actor => <li 
                draggable={true}
                onDragStart={() => handleDragStart(actor)}
                onDragOver={() => handleDragOver(actor)}
                className="list-group-item list-group-item-action"
                key={actor.id}>
                    {props.listUI(actor)}
                    <span  className="badge alert-success pointer"
                    style={{marginLeft:'0.5rem'}}
                    onClick={() => props.onRemove(actor)}>
                        X
                    </span>
                </li>)}
            </ul>
        </>
    )
}

interface typeAheadActorsProps{
    actors: ActorMovieDTO[];
    onAdd(actors: ActorMovieDTO[]): void;
    listUI(actor: ActorMovieDTO):ReactElement;
    onRemove(actor: ActorMovieDTO): void;
}