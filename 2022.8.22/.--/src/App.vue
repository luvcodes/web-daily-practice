<script setup>
import { ref, onMounted, computed, watch } from "vue";

const todos = ref([])
const name = ref('')

const input_content = ref('')
const input_category = ref(null)

const todos_asc = computed(()=>todos.value.sort((a,b)=>{
  return b.createdAt-a.createdAt
}))



</script>

<template>
  <!-- <div>
  hello world!
</div> -->
<main class="app">
  <section class="greeting">
    <h2 class="title">
      What do you want, <input type="text" placeholder="Please enter your name:" v-model="name"></input>
    </h2>
  </section>

  <section class="create-todo">
    <h3>Create a waiting item!</h3>
    <from @submit.prevent="addTodo">
      <h4>Enter your waiting item here:</h4>
      <input type="text" placeholder="Example: Create a short video!" v-model="input_content"></input>
      <h4>Select a items-like habit</h4>
      <div class="options">
        <label>
          <input type="radio" name="category" value="business" v-model="input_category"></input>
          <span class="bubble business"></span>
          <div>Business</div>
        </label>
        <label>
          <input type="radio" name="category" value="business" v-model="input_category"></input>
          <span class="bubble personal"></span>
          <div>Business</div>
        </label>
      </div>

      <input type="submit" value="Add items"></input>


    </from>
  </section>


</main>
</template>
