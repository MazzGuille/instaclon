<template>
    <div class="sidebar" :style="{ width: sidebarWidth }">
    <h3>
      <span v-if="collapsed">
        <div></div>
      </span>
      <span v-else>Insta Mazz</span>
    </h3>

    <SidebarLink to="HomeView" icon="bi bi-house-fill text-info">Inicio</SidebarLink>
    <SidebarLink to="/profile" icon="bi bi-person-fill text-info">Perfil</SidebarLink>
    <SidebarLink to="/analytics" icon="bi bi-search text-info">Buscar</SidebarLink>
    <SidebarLink to="/friends" icon="bi bi-chat-left-dots-fill text-info">chat</SidebarLink>
    <SidebarLink to="/image" icon="bi bi-door-open-fill text-danger">Salir</SidebarLink>

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="bi bi-caret-left-fill"></i>
      <i class="bi bi-caret-left-fill"></i>
      <i class="bi bi-caret-left-fill"></i>
    </span>
  </div>
</template>

<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'
export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<style >
    :root{
        --sidebar-bg-color: #e9e9e9;
        --sidebar-item-hover: #0d47a1;
        --sidebar-item-active: #9FA6B2;
    }
</style>

<style scoped>
    .sidebar {
  color: #4285F4;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}
.sidebar h1 {
  height: 2.5em;
}
.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: #4285F4;
  transition: 0.2s linear;
  cursor: pointer;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}

.icono-pequeño{
    height: 10px;
    width: 10px;
}
</style>