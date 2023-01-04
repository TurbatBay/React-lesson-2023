import logo from './logo.svg';
import './App.css';
//

//   const {img, name, age, profession} = props;
//   return (
//     <div className='profile'>
//         <img src={props.img} width = "200px"/>
//         <p>name: {props.name} </p>
//         <p style={Style}>age: {props.age} </p>
//         <p>profession: {props.profession} </p>
//     </div>
//   )
// }
const Style = {
  color: "brown",
  fontSize: "20px",
};

  //desctructuring
function Profile(props) {
  const {img, name, age, profession} = props;   
  return (
    <div className='profile'>
        <img src={img} width = "200px"/>
        <p style={Style}>name: {name} </p>
        <p style={Style}>age: {age} </p>
        <p style={Style}>profession: {profession} </p>
    </div>
  )
}

function App() {
  const user = {
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compresscs=tinysrgbw=600",
    name: "Turu",
    age: 20,
    profession: "Dev"

  }
  return (
    <div className="App">
      <Profile
          img= "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compresscs=tinysrgbw=600"
          name= "Turu"
          age = {20}
          profession = "Dev"
      />
        <Profile
            img= "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgbdl=pexels-masha-raymers-2726111.jpgfm=jpg"
            name= "Jen"
            age = {25}
            profession = "Fullstack"
        />
          <Profile
            img= "https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compresscs=tinysrgbdpr=2w=252fit=croph=408"
            name= "Jack"
            age = {28}
            profession = "Model"
        />
        <Profile
            img= "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compresscs=tinysrgbw=1260h=750dpr=2"
            name= "Bojack"
            age = {36}
            profession = "Entrepreneur"
        />
    </div>
  );
}

export default App;
