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
    <div class="col-sm-6 col-12 img-container">
      <img
        class="h-100 w-100"
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
        alt=""
      />
    </div>
    <div class="col-sm-6 col-12 form-container p-2">
      <div class="h-100 d-flex align-items-center justify-content-center">
        <form  class="inner-form-container">
          <div class="form-group mb-4 px-2 d-flex flex-column align-items-start">
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
            <span class="validacion" v-if="mailFormat">
              Formato de E-Mail incorrecto
           </span>
            <span class="validacion" v-if="valEmail">
              El campo "Email" es requerido
            </span>
          </div>
          <div class="form-group mb-4 px-2 d-flex flex-column align-items-start">
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
            <span class="validacion" v-if="valPass">
              El campo "Contraseña" es requerido
            </span>
          </div>
          <span class="validacion" v-if="valCred">
            Credenciales invalidas
          </span>
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
          <div class="mt-4">
            <div class="d-flex justify-content-center links">
              <span>¿Aun no tienes una cuenta?</span>
              <router-link class="hiperLink text-primary" :to="{name: 'Registro'}"> ¡Registrate!</router-link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name:'Login',
    data(){
      return{
        Email: '',
        valEmail: false,
        mailFormat: false,
        Contraseña: '',
        valPass: false,
        valCred: false
      }
    },
    methods:{   
       emailVacio(){
        if(this.Email.length === 0)
        this.valEmail = true
      },

      ValEmailFormat(){
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(this.Email.match(validRegex)){
        this.mailFormat = false
      }else{
        this.mailFormat = true
      }
    },

       passVacio(){
        if(this.Contraseña.length === 0)
        this.valPass = true
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
       alert("Usuario logeado con exito")
       window.location.replace('/Test');
      }
      else{
        this.credInvalido()
      }
      
      
    });   

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
  padding: 5px;
  font-weight: bold;
}

</style>