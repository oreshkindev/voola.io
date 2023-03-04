<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'visible', value: boolean): void
}>()

interface Person {
  name: string
  lastname: string
  email: string
}

interface IProps {
  ctx: string
}
const props = defineProps<IProps>()

const person = ref<Person>({
  name: '',
  lastname: '',
  email: '',
})

const errors = ref<Person>({ name: '', lastname: '', email: '' })

const capitalize = (str: string) => str[0].toUpperCase() + str.substring(1)

let token = import.meta.env.VITE_BOT_TOKEN
let chatId = import.meta.env.VITE_CHAT_ID

const prepare = () => {
  if (!person.value.name) {
    errors.value.name = 'Name is required'
    return
  } else {
    errors.value.name = ''
  }
  if (!person.value.lastname) {
    errors.value.lastname = 'Lastname is required'
    return
  } else {
    errors.value.lastname = ''
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(person.value.email) || !person.value.email) {
    errors.value.email = 'Invalid Email Address'
    return
  } else {
    errors.value.email = ''
  }
  return true
}

const send = () => {
  if (prepare()) {
    console.log('clear')

    let message = `<pre> </pre>Name: ${capitalize(person.value.name)}<pre> </pre>Lastname: ${capitalize(person.value.lastname)}<pre> </pre>Email: ${
      person.value.email
    }<pre> </pre>Type: ${props.ctx}`

    let urlString = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}&parse_mode=html`

    let request = new XMLHttpRequest()
    request.open('GET', urlString)
    request.send()

    let response = request.response

    emit('visible', false)

    person.value.name = ''
    person.value.lastname = ''
    person.value.email = ''
  }
}
</script>

<template>
  <form @submit.prevent="send">
    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 512 512" width="24px" @click="emit('visible', false)">
      <path
        d="M443.6 387.1 312.4 255.4l131.5-130c5.4-5.4 5.4-14.2 0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L256 197.8 124.9 68.3c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L68 105.9c-5.4 5.4-5.4 14.2 0 19.6l131.5 130L68.4 387.1c-2.6 2.6-4.1 6.1-4.1 9.8 0 3.7 1.4 7.2 4.1 9.8l37.4 37.6c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1L256 313.1l130.7 131.1c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1l37.4-37.6c2.6-2.6 4.1-6.1 4.1-9.8-.1-3.6-1.6-7.1-4.2-9.7z"
      />
    </svg>
    <p>To test this app, open TestFlight on your iOS device using iOS 6.0 or later and install the update.</p>
    <label for="">
      Name
      <input v-model="person.name" type="text" placeholder="John" />
      <p>{{ errors?.name }}</p>
    </label>

    <label for="">
      Lastname
      <input v-model="person.lastname" type="text" placeholder="Doe" />
      <p>{{ errors?.lastname }}</p>
    </label>

    <label for="">
      Apple ID
      <input v-model="person.email" type="text" placeholder="E.g johndoe@outlook.com" />
      <p>{{ errors?.email }}</p>
    </label>

    <button type="submit">Submit</button>
  </form>
</template>

<style lang="scss" scoped>
form {
  background: var(--scheme-v3);
  border-radius: 25px;
  box-shadow: 0 4px 4px rgba(21, 31, 50, 0.031), 0 8px 18px rgba(21, 31, 50, 0.031);
  color: var(--scheme-v2);
  margin: 0 -20px 0 20px;
  padding: 40px 80px 40px 40px;
  display: grid;
  gap: 20px;
  grid-template: repeat(4, auto) / 1fr;
  width: 100%;
  position: relative;

  @media only screen and (max-width: 928px) {
    margin: auto;
    padding: 40px 60px 40px 40px;
  }

  svg {
    background: none;
    cursor: pointer;
    fill: var(--scheme-v2);
    position: absolute;
    right: 20px;
    top: 20px;

    &:hover {
      opacity: 0.6;
    }
  }

  input {
    border-bottom: 1px dashed var(--scheme-v2);
    color: var(--scheme-v2);
    display: block;
    padding: 2px 0;
    width: 100%;
  }

  button {
    background: var(--scheme-v2);
    color: var(--scheme-v3);
    width: fit-content;
    margin: 2em auto auto;
  }
}
</style>
