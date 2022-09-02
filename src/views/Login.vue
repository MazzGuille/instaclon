<template>
  
    <div
      class="
        row
        m-2
        container
        d-flex
        align-content-center
        justify-content-center
        wrapper
      "
    >
      <transition appear @enter="imgEnter">
        <div class="col-sm-6 col-12 img-container">
          <img
            class="h-100 w-100"
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            alt=""
          />
        </div>
      </transition>
      <div class="col-sm-6 col-12 form-container mt-5 p-2 h-100 d-flex align-items-center justify-content-center">
    
          <form  class="inner-form-container">
            <transition appear @enter="mailEnter">
              <div class="form-group mb-4 px-2 d-flex flex-column align-items-start">
                <label class="form-label" for="emailinput"
                  ><i class="bi bi-envelope-fill text-primary"></i> E-Mail</label
                >
                <input
                @input="ValEmailFormat(), emailVacio()"
                  v-model="Email"
                  type="email"
                  autocomplete="off"
                  name="Email"
                  id="emailinput"
                  class="form-control form-control-sm"
                />
                
                <span class="validacion" v-if="mailFormat">
                  Formato de E-Mail incorrecto
               </span>
                <span class="validacion" v-if="valEmail">
                  El campo "Email" es requerido
                </span>
              </div>
            </transition>
            <transition appear @enter="passEnter">
              <div class="form-group mb-4 px-2 d-flex flex-column align-items-start">
                <label class="form-label" for="passwdinput"
                  ><i class="bi bi-key-fill text-primary"></i> Contraseña</label
                >
                <input
                @input="passVacio()"
                  v-if="!showPass"
                  v-model="Contraseña"
                  type="password"
                  name="Contraseña"
                  id="passwdinput"
                  class="form-control form-control-sm"
                />
                <input
                @input="passVacio()"
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
                <span class="validacion" v-if="valPass">
                  El campo "Contraseña" es requerido
                </span>
              </div>
            </transition>
            <span class="validacion" v-if="valCred">
              Credenciales invalidas
            </span>
            <transition appear @enter="btnEnter">
              <div class="boton-container mt-2">
                <button
                 @click="iniciarSesion"
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
                  Iniciar Sesión
                </button>
              </div>
            </transition>
            <transition appear @enter="txtEnter">
              <div class="mt-4">
                <div class="d-flex justify-content-center links">
                  <span>¿Aun no tienes una cuenta?</span>
                  <router-link  class="hiperLink text-primary" :to="{name: 'Registro'}"> ¡Registrate!</router-link>
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

export default {
  name:'Login',
    data(){
      return{
        Email: '',
        valEmail: false,
        mailFormat: false,
        Contraseña: '',
        valPass: false,
        valCred: false,
        showPass: false,
        mclass: "bi bi-eye-slash-fill"
      }
    },
    methods:{  
    imgEnter(el){
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

     passEnter(el){
      gsap.from(el, {
        opacity: 0,
        duration: 2,
        y: 60,
        delay: 1.5
      })
    },

     btnEnter(el){
      gsap.from(el, {
        opacity: 0,
        duration: 2,
        x: -120,
        delay: 2
      })
    },

     txtEnter(el){
      gsap.from(el, {
        opacity: 0,
        duration: 2,
        x: -120,
        delay: 2.5
      })
    },
      
       emailVacio(){
        if(this.Email.length === 0)
        this.valEmail = true
        else{
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

       passVacio(){
        if(this.Contraseña.length === 0)
        this.valPass = true
        else{
          this.valPass = false
        }
      },

       credInvalido(){
        this.valCred = true
      },
      
      iniciarSesion(e){
      e.preventDefault();

      this.emailVacio();
      this.passVacio();
      this.ValEmailFormat();
      let datos = this;
      let jsonDatos = {
        Email: datos.Email,
        Contraseña: datos.Contraseña
      };
      axios.post('https://localhost:7158/api/Usuario/Login', jsonDatos).then(res =>{
      console.log(res);
      if(res.status === 200)
      {       
       window.location.replace('/Test');
      }
      else{
        this.credInvalido()
      }     
    }).catch(function (error) {          
        console.log(error)          
      })

  }
}

}
</script>

<style scoped>

.hiperLink{
  text-decoration: none;
  font-weight: bold;
  margin-left: 5px;
}

.inner-form-container{
    width: 100%;
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

</style>