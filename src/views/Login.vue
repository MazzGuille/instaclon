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
          </div>
          <div class="form-group mb-4 px-2 d-flex flex-column align-items-start">
            <label class="form-label" for="passwdinput"
              ><i class="bi bi-key-fill text-primary"></i> Contraseña</label
            >
            <input
              v-model="Contraseña"
              type="text"
              name="Contraseña"
              id="passwdinput"
              class="form-control form-control-sm"
            />
          </div>
          <div class="boton-container">
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
              <router-link class="hiperLink text-primary" :to="{name: 'Registro'}"> Registrate!</router-link>
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
        Contraseña: ''
      }
    },
    methods:{         
      iniciarSesion(e){
      e.preventDefault();
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
      
    });
    console.log(jsonDatos);

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

</style>