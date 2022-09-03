<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <i class="icon" :class="icon" />
    <transition name="fade">
      <span v-if="!collapsed">
        <slot />
      </span>
    </transition>
  </router-link>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { collapsed } from './state'
export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true }
  },
  setup(props) {    
    const route = useRoute()
    const isActive = computed(() => route.path === props.to)
    return { isActive, collapsed }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.link {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;
  margin: 0.1em;  
  margin-right: 0;
  border-radius: 0.25em;
  height: 1.5em;
  color: #4285F4;
  text-decoration: none;
  width: fit-content;
  transition: all .5s ease-in-out;
}
.link:hover {
  scale: 1.2;
}

.link.active {
  border-bottom: 1px solid var(--sidebar-item-active);
}
.link .icon {
  flex-shrink: 0;
  width: 25px;  
}
</style>