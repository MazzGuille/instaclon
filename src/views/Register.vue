<template>
  <div
    class="row m-2 d-flex align-content-center justify-content-center wrapper"
  >
     <transition appear @enter="resEnter"> 
        <div v-if="res200" class="res-container">
          <div class="res">
            <div class="inner-res">
              <p class="text-primary">USUARIO CREADO CON EXITO</p>
               <button @click="moveToLogin()" class="btn text-primary bg-white border border-primary btn-block">Aceptar</button>
            </div>
          </div>
        </div>
      </transition>
     
    <transition appear  @enter="enter">
      <div class="col-sm-6 col-12 img-container">
        <img src="../assets/register.png" alt="" class="h-100 w-100" />
      </div>
    </transition>
    
      <div class="col-sm-6 col-12 form-container p-2 h-100
            d-flex
            flex-column
            align-items-center
            justify-content-center">                        
          <form class="inner-form-container">            
            <transition appear @enter="mailEnter">
              <div
                class="form-group mb-4 px-2 d-flex flex-column align-items-start"
              >
                <label class="form-label" for="emailinput"
                  ><i class="bi bi-envelope-fill text-primary"></i> E-Mail</label
                >
                <input
                @input="ValEmailLenMin(), ValEmailLenMax(), ValEmailFormat()"
                  v-model="Email"
                  autocomplete="off"
                  type="email"
                  name="Email"
                  id="emailinput"
                  class="form-control form-control-sm"
                />
                <span class="validacion" v-if="EmailExist">
                  El mail ingresado ya existe
                </span>
               <span class="validacion" v-if="valEmail">
                  El campo E-Mail es requerido
               </span>
               <span class="validacion" v-if="mailFormat">
                  Formato de E-Mail incorrecto
               </span>
              </div>
            </transition>
            <transition appear @enter="nameEnter">
              <div
                class="form-group mb-4 px-2 d-flex flex-column align-items-start"
              >
                <label class="form-label" for="nombreinput"
                  ><i class="bi bi-person-fill text-primary"></i> Nombre</label
                >
                <input
                  @input="validarNombre()"                  
                  v-model="Nombre"
                  autocomplete="off"
                  type="text"
                  name="Nombre"
                  id="nombreinput"
                  class="form-control form-control-sm"
                />
                <span class="validacion" v-if="ValNombre">
                  El nombre debe tener un minimo de 4 caracteres
                </span>
                <span class="validacion" v-if="campoName">
                    El campo "Nombre" es requerido
                </span>
              </div>
            </transition>
            <transition appear @enter="nameUsuEnter">
              <div
                class="form-group mb-4 px-2 d-flex flex-column align-items-start"
              >
                <label class="form-label" for="username"
                  ><i class="bi bi-person-fill text-primary"></i> Nombre de
                  usuario</label
                >
                <input
                @input="validarNomUsu()"
                  v-model="UserName"
                  autocomplete="off"
                  type="text"
                  name="UserName"
                  id="username"
                  class="form-control form-control-sm"
                />
                <span class="validacion" v-if="ValNombreUsuMin">
                  El nombre de usuario debe tener un minimo de 4 caracteres
                </span>
                 <span class="validacion" v-if="ValNombreUsuMax">
                  El nombre de usuario debe tener un maximo de 8 caracteres
                </span>
                <span class="validacion" v-if="campoUserName">
                    El campo "Nombre de usuario" es requerido
                </span>
              </div>
            </transition>
          
          <!-- <div class="form-group mb-4 px-2 d-flex flex-column align-items-start">
              <label class="form-label" for="imageninput"
                ><i class="bi bi-image-fill text-primary"></i> Imagen de perfil</label
              >
              <input
              v-model="ruta"
                type="file"
                name="ImagenPerfil"
                id="imageninput"
                class="form-control form-control-sm"
              />
            </div>-->

            <transition appear @enter="bioEnter">
              <div
                class="form-group mb-4 px-2 d-flex flex-column align-items-start"
              >
                <label class="form-label" for="bio"
                  ><i class="bi bi-body-text text-primary"></i> Bio (opcional)</label
                >
                <textarea
                  v-model="BioUsuario"
                  name="Bio"
                  id="bio"
                  class="form-control form-control-sm"
                />
              </div>
            </transition>
            <transition appear @enter="passEnter">
              <div
                class="form-group mb-4 px-2 d-flex flex-column align-items-start"
              >
                <label class="form-label" for="passwdinput"
                  ><i class="bi bi-key-fill text-primary"></i> Contraseña</label
                >
                <input
                @input="ContraseñaLenOk(), valContraseñas()"
                  v-if="!showPass"
                  v-model="Contraseña"
                  type="password"
                  name="Contraseña"
                  id="passwdinput"
                  class="form-control form-control-sm"
                />
                <input
                @input="ContraseñaLenOk(), valContraseñas()"
                  v-if="showPass"
                  v-model="Contraseña"
                  type="text"
                  name="Contraseña"
                  id="passwdinput"
                  class="form-control form-control-sm"
                />
                <div class="check">
                  <input type="checkbox" v-model="showPass">
                  <span><i class="text-primary" :class="mclass" v-if="showPass == true ? mclass='bi bi-eye-fill': mclass='bi bi-eye-slash-fill'"></i></span>
                </div> 
                <span class="validacion" v-if="valContraseñaMin">
                  La contraseña no debe tener menos de 8 caracteres
                </span>
                <span class="validacion" v-if="validarContraseñas">
                    Las contraseñas no coinciden
                </span>
                <span class="validacion" v-if="campoContraseña">
                    El campo "Contraseña" es requerido
                </span>                             
              </div>
            </transition>            
            <transition appear @enter="passConEnter">
              <div
                class="form-group mb-4 px-2 d-flex flex-column align-items-start"
              >
                <label class="form-label" for="confirmpasswdinput"
                  ><i class="bi bi-key-fill text-primary"></i> Confirmar
                  contraseña</label
                >
                <input
                @input="valContraseñas()"
                v-if="!showPass"
                  type="password"
                  id="confirmpasswdinput"
                  class="form-control form-control-sm"
                  v-model="ConfirmarClave"
                />
                 <input
                @input="valContraseñas()"
                v-if="showPass"
                  type="text"
                  id="confirmpasswdinput"
                  class="form-control form-control-sm"
                  v-model="ConfirmarClave"
                />
                <span class="validacion" v-if="validarContraseñas">
                    Las contraseñas no coinciden
                </span>
              </div>
            </transition>
            
            <transition appear @enter="btnEnter">
              <div class="boton-container">
                <button
                  @click="showRes200"
                  type="submit"
                  class=" 
                    boton                  
                    btn
                    text-primary
                    bg-white
                    border border-primary
                    btn-block
                    boton
                  "
                >
                  Crear cuenta
                </button>
              </div>
            </transition>
            <transition appear @enter="txtEnter">
              <div class="mt-4">
                <div class="d-flex justify-content-center links">
                  <p>
                    ¿Ya tienes una cuenta?
                    <router-link
                      class="hiperLink text-primary"
                      :to="{ name: 'Login' }"
                      >¡Inicia sesion aqui!</router-link
                    >
                  </p>
                </div>
              </div>
            </transition>
          </form>
      </div>
    </div>
    
  
</template>

<script>
import axios from "axios";
import gsap from 'gsap'; 
import router from '@/router';

export default {
  name: "Registro",

  data() {
    return {      
      posts: [],
      Email: "",
      EmailExist: false,
      valEmail: false,
      mailFormat: false,
      Nombre: "",
      ValNombre: false,
      UserName: "",
      ValNombreUsuMin: false,
      ValNombreUsuMax: false,
      Contraseña: "",
      valContraseñaMin: false,      
      ConfirmarClave: "",      
      validarContraseñas: false,
      BioUsuario: "",
      campoName: false,
      campoUserName: false,
      campoContraseña: false,
      showPass: false,
      mclass: "bi bi-eye-slash-fill",
      ruta: '',
      res200:false,
      
    };
  },

  methods: {
//--------------------------------------------------------ANIMATION METHODS-----------------------------------------------//
   
    enter(el){
      gsap.from(el, {
        opacity: 0,
        duration: 4,
        delay: .5
      })
    }, 
    
    mailEnter(el){
      gsap.from(el, {
        opacity: 0,
        duration: 2,
        y: 60,
        delay: 1
      })
    },

    nameEnter(el){
      gsap.from(el, {
        opacity: 0,
        duration: 2,
        y: 60,
        delay: 1.5
      })
    },

    nameUsuEnter(el){
      gsap.from(el, {
        opacity: 0,
        duration: 2,
        y: 60,
        delay: 2
      })
    },

    bioEnter(el){
      gsap.from(el, {
        opacity: 0,
        duration: 2,
        y: 60,
        delay: 2.5
      })
    },

    passEnter(el){
      gsap.from(el, {
        opacity: 0,
        duration: 2,
        y: 60,
        delay: 3
      })
    },

    passConEnter(el){
      gsap.from(el, {
        opacity: 0,
        duration: 2,
        y: 60,
        delay: 3.5
      })
    },

      btnEnter(el){
      gsap.from(el, {
        opacity: 0,
        duration: 2,
        x: -120,
        delay: 4
      })
    },

      txtEnter(el){
      gsap.from(el, {
        opacity: 0,
        duration: 2,
        x: -120,
        delay: 4.5
      })
    },

     resEnter(el){
      gsap.from(el,{
        opacity: 0,
        scale: .5,
        duration: .5,
        delay: .25
      })
    },
   
  
//--------------------------------------------------------ANIMATION METHODS END-----------------------------------------------//

//--------------------------------------------------------VALIDATION METHODS-----------------------------------------------//
    ValEmailExist(){
      this.EmailExist = true
    },

    ValEmailLenMin(){
      if(this.Email.length === 0){
        this.valEmail = true
      }
    },

      ValEmailLenMax(){
      if(this.Email.length > 0){
        this.valEmail = false
      }
    },

    ValEmailFormat(){
      var validRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
      if(this.Email.match(validRegex)){
        this.mailFormat = false
      }else{
        this.mailFormat = true
      }
    },

    validarNombre(){
      if(this.Nombre.length < 4){
        this.ValNombre = true
        this.campoName = false
      }

      if(this.Nombre.length === 0){
        this.ValNombre = false
        this.campoName = true
      }

      if(this.Nombre.length >= 4){
        this.ValNombre = false
        this.campoName = false
      }
    },

    validarNomUsu(){
      if(this.UserName.length < 4){
        this.ValNombreUsuMin = true
        this.ValNombreUsuMax = false
        this.campoUserName = false
      } 

      if(this.UserName.length > 12){
        this.ValNombreUsuMax = true
        this.ValNombreUsuMin = false
        this.campoUserName = false
      }

       if(this.UserName.length >= 4 && this.UserName.length <= 12){
        this.ValNombreUsuMax = false
        this.ValNombreUsuMin = false
        this.campoUserName = false
      }

      if(this.UserName.length === 0){
        this.ValNombreUsuMax = false
        this.ValNombreUsuMin = false
        this.campoUserName = true
      }
    },  

    ContraseñaLenOk(){
      if(this.Contraseña.length >= 8){
        this.valContraseñaMin = false
        this.campoContraseña = false
      }

      if(this.Contraseña.length < 8){
        this.valContraseñaMin = true
        this.campoContraseña = false
      }

      if(this.Contraseña.length === 0){
        this.valContraseñaMin = false
        this.campoContraseña = true
      }
    },

    valContraseñas(){
      if(this.Contraseña !== this.ConfirmarClave)
      {
        this.validarContraseñas = true
      } 

      if(this.Contraseña === this.ConfirmarClave)
      {
        this.validarContraseñas = false
      } 
    },

  
//--------------------------------------------------------VALIDATION METHODS END-----------------------------------------------//
    showRes200(e){  
      e.preventDefault()
      this.res200 = true
      window.scrollTo(0,0);
    },

    moveToLogin(){
      router.push('/Login')
    }, 

    crearUsuario(e) {
      e.preventDefault();
      this.ValEmailLenMin();
      this.ValEmailFormat();
      this.ValEmailLenMax();
      this.validarNombre();  
      this.validarNomUsu();
      this.valContraseñas();  
      this.ContraseñaLenOk();    
      let datos = this;
      let jsonDatos = {
        Email: datos.Email,
        Nombre: datos.Nombre,
        UserName: datos.UserName,
        Contraseña: datos.Contraseña,
        ConfirmarClave: datos.ConfirmarClave,
        BioUsuario: datos.BioUsuario,
      };
      
      axios.post('https://localhost:7158/api/Usuario/CrearUsuario', jsonDatos).then(res =>{
       console.log(res.status);         
      
     if(res.status === 200){
        this.showRes200()      
      }
      else if(res.status === 204){       
         this.ValEmailExist()
      }     
            
      }).catch(function (error) {          
        console.log(error)        
      })  
      
      //.then((res) => res.json())
      //.then((data => this.posts = data))
      //console.log(jsonDatos);
    },

/*
    loadImg(e){
      e.preventDefault();      
      let jsonDatos = {
        Ruta: this.ruta
      };
      axios.post("https://localhost:7158/api/Usuario/CargarArchivo", jsonDatos).then(res =>{
        console.log(res.status);
      }).catch(function (error) {          
        console.log(error)          
      })
    }
*/
    
  },
};   
</script>
<style scoped>

.hiperLink {
  text-decoration: none;
  font-weight: bold;
  margin-left: 5px;
}

.wrapper {
  width: 100vw;
  height: 100vh;  
  margin-right: auto;
  margin-left: auto;
  padding-left: 5vw;
  padding-right: 5vw;
  position: relative;
}

.img-container {
  height: 100vh;
}

.form-container {
  height: 100vh;
  margin: 0;
}

.res-container{
  position: absolute;
  height: 100%;
  width: 100%;  
  z-index: 10; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
}

.res{
  height: 90vh;
  width: 90vw;
  border-radius: 10px;
 /* background-color: rgba(2, 117, 216, .3);    */
  background-color: transparent;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
}

.inner-res{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  height: 25vh;
  width: 25vw;
  border-radius: 10px;
  background-color: white;
  border: 2px solid black;
  font-weight: bold;
  font-size: 20px;
}

.inner-form-container {
  width: 100%;
  margin-top: 8rem;
}

.boton-container {
  width: 100%;
  display: grid;
  place-content: center;
}

.boton {
  width: 100%;
}

input:focus {
  outline: none;
}

.validacion{
  background-color: transparent;
  border-radius: 16px;
  border: 1px solid crimson;
  color: crimson;
  margin-top: 5px;
  padding: 3px 10px;
  font-weight: bold;
  font-size: 14px;
}

.check{
  display: flex;
  gap: 5px;
}

@media (max-width: 430px){
  .img-container{
    display: none;
  }

  .form-container{
    min-height: 100vh;
  }
}
</style>