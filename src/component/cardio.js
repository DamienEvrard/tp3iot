function valInstantanee(props){

    var val = props.data;

    var color="";
    if(val>=40&&val<80){
        color="green";
        val += " OK";
    }
    if(val>=80&&val<160){
        color="orange";
        val += " ATTENTION";
    }
    if(val>=160&&val<201){
        color="red";
        val += " DANGER";
    }

    return (<div id={color}>valeur: {val}</div>);
}

export default valInstantanee;