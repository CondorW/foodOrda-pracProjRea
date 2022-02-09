export default function ModalCard(props){
    return(
        <div className="flex flex-row">
            <p>{props.itemName}</p>
            <p>{props.itemCount}</p>
        </div>
    );
}