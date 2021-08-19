// import React from 'react';
// import { View, TextInput, StyleSheet, Button, ActivityIndicator, Text, Alert } from 'react-native';
// import Formulario from '../componentes/Formulario';
// import { navigation} from "react-navigation";
// import firebase from 'firebase';
// import { color } from 'react-native-reanimated';
// import { createIconSetFromFontello } from 'react-native-vector-icons';


// export default class PaginaLogin extends React.Component{

//     constructor(props){
//         super(props);

//         this.state = {
//             email:"",
//             senha:"",
//             Carregando: false,
//             mensagem:"",
//         }
//     }

//     componentDidMount(){
//      var firebaseConfig = {
//         apiKey: "AIzaSyD2fylF5NUtIs_u0W8XIBxtzxbj5-nmnFQ",
//         authDomain: "projetofinal-501bf.firebaseapp.com",
//         projectId: "projetofinal-501bf",
//         storageBucket: "projetofinal-501bf.appspot.com",
//         messagingSenderId: "957015518346",
//         appId: "1:957015518346:web:12c4d4242bf16eb96d5173",
//         measurementId: "G-LZNYRWJV4E"
//   };
//     firebase.initializeApp(firebaseConfig);
//     firebase.analytics();



//     }

//     inserir(campo,valor){
//         this.setState({
//             [campo]: valor
//         })
//     }

//     ProcessaLogin(){
//         this.setState({Carregando: true});
//         const {email, senha} = this.state;

//         const SucessoLogin = usuario =>{
//             console.log(usuario);
//             this.setState({mensagem : "Sucesso!"});
//             this.props.navigation.navigate('Principal');
//         }

//         const FalhaLogin = error=>{
//             this.setState({
//               mensagem : this.MensagemErroPorCodigo(error.code)
//             });
//         }
        
//     firebase.auth().signInWithEmailAndPassword(email,senha)
//     .then(SucessoLogin)
//     .catch(error =>{
//         if(error.code == "auth/user-not-found"){
//             Alert.alert(
//                 "Usuário não encontrado!"
//             )
//         }
//         FalhaLogin;
       
//     })
//     .then( () => {
//         this.setState({Carregando: false });
//     })
//     }

//     renderCarregador(){
//         if(this.state.Carregando)
//             return <ActivityIndicator size="large" color="#0000ff" />;

//         return(
//         <Button title='Entrar'
//                     onPress={() => this.ProcessaLogin()}/>
//         );
//     }

//     MensagemErroPorCodigo(code){
//         switch(code){
//             case "auth/user-not-found":
//                 return "Email inválido!";
//             case "auth/wrong-password":
//                 return "Senha incorreta!";
//             case "auth/user-not-found":
//                 return  "Usuário não encontrado!";
//             default:
//                 return "Erro ao fazer login!"
//         }
//     }

//     renderMensagem(){
//         const { mensagem } = this.state;

//         if(!mensagem)
//             return null;
        
//         return (        
//         <View>
//             <Text>{mensagem}</Text>
//         </View>
//         );

//     }

//     renderCadastro(){
//         const {email,senha} = this.state;
//         firebase.auth().createUserWithEmailAndPassword(email,senha)
//         .then(Alert.alert(
            
//             "Usuário Cadastrado!"
//         ))
//         .catch(error =>{
//             Alert.alert(
//                 "Erro ao cadastrar o usuário!", error
//             )
//         })

//     }

//     render(){
//         return(
            
//             <View>
                
//                 <Formulario>
//                     <TextInput style={estilo.entradaTexto} placeholder="E-mail:"
//                     value={this.state.email}
//                     onChangeText={ valor=>{this.inserir('email',valor)}} />  
                    
//                 </Formulario>
//                 <Formulario>
//                     <TextInput style={estilo.entradaTexto} placeholder="Senha:"  secureTextEntry={true}
//                     value={this.state.senha}
//                     onChangeText={valor => {this.inserir('senha',valor)}} />
//                 </Formulario>

//                 {this.renderCarregador()}
//                 {this.renderMensagem()}
//                 <Button style={estilo.Cadastro} title='Cadastrar'onPress={() => this.renderCadastro()}/>
                
        
//             </View>
//         );
        
//     }
// }

// const estilo = StyleSheet.create({
//     entradaTexto:{
//         borderWidth: 1,
//         borderColor: 'gray',
//         marginTop: 5,
//         paddingLeft: 20,
//         paddingRight: 10
//     },

//     Cadastro:{
//         marginTop:50,
//     }
// })