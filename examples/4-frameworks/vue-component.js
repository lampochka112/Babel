// Vue 3 Composition API
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);
    
    const increment = () => {
      count.value++;
    };

    return { count, increment };
  }
};