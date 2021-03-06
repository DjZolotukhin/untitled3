import './App.css'
import {Product} from './Components/Famili/Product';



function App(){
    let cls = 'products';
    return (
        <div className={cls}>
           <Product
               name ={'Bart'}
               surname ={'Simpson'}
               age = {10}
               info = {'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.'}
               photo = {'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
           />


        </div>
    )
}

export default App;
