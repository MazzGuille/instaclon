<template>
  <div
    class="row m-2 d-flex align-content-center justify-content-center wrapper"
  >
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
                  v-model="Email"
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
                  v-model="Nombre"
                  type="text"
                  name="Nombre"
                  id="nombreinput"
                  class="form-control form-control-sm"
                />
                <span class="validacion" v-if="ValNombre">
                  El nombre debe tener un minimo de 4 caracteres
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
                  v-model="UserName"
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
              </div>
            </transition>
            <!--
           <div class="form-group mb-4 px-2 d-flex flex-column align-items-start">
              <label class="form-label" for="imageninput"
                ><i class="bi bi-image-fill text-primary"></i> Imagen de perfil</label
              >
              <input
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
                  v-model="Contraseña"
                  type="password"
                  name="Contraseña"
                  id="passwdinput"
                  class="form-control form-control-sm"
                />
                <span class="validacion" v-if="valContraseñaMin">
                  La contraseña no debe tener menos de 8 caracteres
                </span>
                <span class="validacion" v-if="validarContraseñas">
                    Las contraseñas no coinciden
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
                  type="password"
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
                  @click="crearUsuario"
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
import axios, { AxiosError } from "axios";
import gsap from 'gsap'; 

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
      BioUsuario: ""
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
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(this.Email.match(validRegex)){
        this.mailFormat = false
      }else{
        this.mailFormat = true
      }
    },

    validarNombre(){
      if(this.Nombre.length < 4){
        this.ValNombre = true
      }
    },

    validarNomUsu(){
      if(this.UserName.length < 4){
        this.ValNombreUsuMin = true
        this.ValNombreUsuMax = false
      } 

      if(this.UserName.length > 8){
        this.ValNombreUsuMax = true
        this.ValNombreUsuMin = false
      }
    },

    ContraseñaMin(){
      if(this.Contraseña.length < 8){
        this.valContraseñaMin = true
      }
    },

    ContraseñaLenOk(){
      if(this.Contraseña.length >= 8){
        this.valContraseñaMin = false
      }
    },

    valContraseñas(){
      if(this.Contraseña !== this.ConfirmarClave)
      {
        this.validarContraseñas = true
      } 
    },
//--------------------------------------------------------VALIDATION METHODS END-----------------------------------------------//
    crearUsuario(e) {
      e.preventDefault();
      this.ValEmailLenMin();
      this.ValEmailFormat();
      this.ValEmailLenMax();
      this.validarNombre();  
      this.validarNomUsu(); 
      this.ContraseñaMin(); 
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
      
      axios.post("https://localhost:7158/api/Usuario/CrearUsuario", jsonDatos).then(res =>{
      
      if(res.status === 200)
      {
       alert("Usuario registrado con exito")
       window.location.replace('/Login')
      }
      else if(AxiosError.code === 'ERR_BAD_REQUEST'){
         ValEmailExist()
      }
      else{
        console.error(AxiosError)
      }
         
        });
      //.then((res) => res.json())
      //.then((data => this.posts = data))
      //console.log(jsonDatos);
    },
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
  width: 90vw;
  height: 100vh;  
  margin-right: auto;
  margin-left: auto;
}

.img-container {
  height: 85vh;
}

.form-container {
  height: 85vh;
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
  padding: 5px;
  font-weight: bold;
}
</style>