<template>
    <input v-bind="$attrs" v-model="internalValue" @input="updateValue" placeholder="Search user"/>
  </template>
  
  <script>
  export default {
    name: 'CustomInput',
    props: {
      value: [String, Number],
    },
    data() {
      return {
        internalValue: this.value,
      };
    },
    methods: {
      updateValue(event) {
        this.internalValue = event.target.value;
        this.$emit('input', this.internalValue);
      },
    },
  };
  </script>