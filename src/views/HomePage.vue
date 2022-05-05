<template>
  <h1 class="text-red-500 text-[20px]">Hello Home!</h1>
  <p>{{ JSON.stringify(searchForm) }}</p>
  <button @click="handleChange">Change</button>
  <button @click="handleReset">Reset</button>
</template>

<script>
import { defineComponent } from "vue";
import cloneDeep from "lodash.clonedeep";

const defaultForm = {
  name: "",
  age: 13,
  children: {
    name: "",
    age: 13,
    children: {
      name: "",
      age: 12,
    },
  },
};

export default defineComponent({
  data: () => ({
    searchForm: Object.assign({}, defaultForm),
  }),

  methods: {
    handleReset() {
      this.searchForm = this.$options.data().searchForm;
      console.log(this.$options.data().searchForm);
    },

    handleChange() {
      this.searchForm.children.name = "Big";
      this.searchForm.children.children.name = "Helo";
    },
  },
});
</script>
