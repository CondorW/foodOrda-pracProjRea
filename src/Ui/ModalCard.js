export default function ModalCard(props){
    return(
        <div className="flex flex-row justify-center">
            <div className="bg-gray-100 w-10/12 m-1 rounded p-1">
            <p>{props.itemName}</p>
            <p>{props.itemCount}</p>
            </div>
        </div>
    );
}