<script setup>
import axios from "axios";
import { ref } from "vue";

const form = ref({
  username: "",
  password: "",
});

const onSubmit = async () => {
  try {
    const response = await axios.post("http://localhost:3000/login", {
      username: form.value.username,
      password: form.value.password,
    });

    console.log(response.data);
  } catch (error) {
    console.error("Error making Axios request:", error);
  }

  console.log(form.value);
};

const onRegister = async () => {
  try {
    const response = await axios.post("http://localhost:3000/register", {
      username: form.value.username,
      password: form.value.password,
    });

    console.log(response.data);
  } catch (error) {
    console.error("Error making Axios request:", error);
  }

  console.log(form.value);
};
</script>

<template>
  <div>
    <h1>login</h1>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="username">Username: </label>
        <input type="text" id="username" v-model="form.username" />
      </div>
      <div>
        <label for="password">Password: </label>
        <input type="text" id="password" v-model="form.password" />
      </div>

      <button type="submit">Submit</button>
    </form>

    <hr />
    <form @submit.prevent="onRegister">
      <div>
        <label for="username">Username: </label>
        <input type="text" id="username" v-model="form.username" />
      </div>
      <div>
        <label for="password">Password: </label>
        <input type="text" id="password" v-model="form.password" />
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped></style>
