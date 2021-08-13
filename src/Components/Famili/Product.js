export function Product({name, surname, age, info, photo}){

    return(

            <div className={'product'}>
                <h2>{name}</h2>
                <h3>{surname}</h3>
                <h4>{age}</h4>
                <h5>{info}</h5>
                <img src={photo} alt=""/>

            </div>


    );
}