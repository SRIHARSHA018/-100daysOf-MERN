export const RenderIf = (props) =>{
    return <>{props.isTrue?props.children:""}</>
}

export const RenderIfElse = (props) =>{
    return <>{props.isTrue?props.trueComponent:props.falseComponent}</>
}