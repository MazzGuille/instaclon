<template>
   <div
    class="row m-2 d-flex align-content-center justify-content-center wrapper"
  >
    <div class="col-sm-6 col-12 img-container">
      <img src="../assets/register.png" alt="" class="h-100 w-100">

    </div>
    <div class="col-sm-6 col-12 form-container p-2">
      <div class="h-100 d-flex flex-column align-items-center justify-content-center">
        <form class="inner-form-container mt-5">

          <div class="form-group mb-4 px-2 d-flex flex-column align-items-start">
            <label class="form-label" for="emailinput"
              ><i class="bi bi-envelope-fill text-primary"></i> E-Mail</label>
            <input
              v-model="Email"
              type="email"
              name="Email"
              id="emailinput"
              class="form-control form-control-sm"
            />
          </div>
          <div class="form-group mb-4 px-2 d-flex flex-column align-items-start">
            <label class="form-label" for="nombreinput"
              ><i class="bi bi-person-fill text-primary"></i> Nombre</label>
            <input
              v-model="Nombre"
              type="text"
              name="Nombre"
              id="nombreinput"
              class="form-control form-control-sm"
            />
          </div>
          <div class="form-group mb-4 px-2 d-flex flex-column align-items-start">
            <label class="form-label" for="username"
              ><i class="bi bi-person-fill text-primary"></i> Nombre de usuario</label
            >
            <input
              v-model="UserName"
              type="text"
              name="UserName"
              id="username"
              class="form-control form-control-sm"
            />
          </div>

      <!--    <div class="form-group mb-4 px-2 d-flex flex-column align-items-start">
            <label class="form-label" for="imageninput"
              ><i class="bi bi-image-fill text-primary"></i> Imagen de perfil</label
            >
            <input
              type="file"
              name="ImagenPerfil"
              id="imageninput"
              class="form-control form-control-sm"
            />
          </div>
          <div class="form-group mb-4 px-2 d-flex flex-column align-items-start">
            <label class="form-label" for="bio"
              ><i class="bi bi-body-text text-primary"></i> Biografia</label
            >
            <textarea
              type="file"
              name="Bio"
              id="bio"
              class="form-control form-control-sm"
            />
          </div>
        -->


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
          </div>
          <div class="form-group mb-4 px-2 d-flex flex-column align-items-start">
            <label class="form-label" for="confirmpasswdinput"
              ><i class="bi bi-key-fill text-primary"></i> Confirmar contraseña</label
            >
            <input
            v-model="ConfirmarContraseña"
              type="password"
              name="ConfirmarContraseña"
              id="confirmpasswdinput"
              class="form-control form-control-sm"
            />
          </div>
          <div class="boton-container">
            <button
            @click='crearUsuario'
              type="submit"
              class="boton btn text-primary bg-white border border-primary btn-block boton"
            >
              Crear cuenta
            </button>
          </div>
          <div class="mt-4">
            <div class="d-flex justify-content-center links">
              <p>
                ¿Ya tienes una cuenta?
                             <router-link class="hiperLink text-primary" to="/login">Inicia sesion aqui!</router-link>
              </p>
              
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {ref} from 'vue'

export default {
    name:'Registro',

     setup () {
      const result = ref(null)
      const Email = ref(null)
      const Nombre = ref(null)
      const UserName = ref(null)
      const Contraseña = ref(null)
      const ConfirmarContraseña = ref(null)

          const crearUsuario = axios.post('https://localhost:7158/api/Usuario/CrearUsuario', 
          Email = this.Email, Nombre = this.Nombre, UserName = this.UserName, Contraseña = this.Contraseña
          ).then((response) =>{
            console.log(response)
          })

          crearUsuario()

      return {}
    }
    
}
</script>

<style scoped>

.hiperLink{
  text-decoration: none;
  font-weight: bold;
  margin-left: 5px;
}

.wrapper {
  width: 90vw;
  height: 90vh;
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

</style>