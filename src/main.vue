<script setup lang="ts">
import { listen, register } from '@scripts/push-notifications'
import { SplashScreen } from '@capacitor/splash-screen'
import Counter from '@components/Counter.vue'
import { onMounted } from 'vue'

//@ts-ignore
if (window.cordova) {
  onMounted(SplashScreen.hide)
  onMounted(async () => {
    if (await register()) {
      listen({
        onregistration: token => console.log('token', { token }),
        onregistrationerror: error => console.log('token', { error }),
        onaction: action => console.log('action', { action }),
        onnotification: notification => console.log('notification', { notification }),
      })
    }
  })
}
</script>

<template>
  <div class="grid justify-center content-center h-full w-full">
    <Counter />
  </div>
</template>
