<template>
  <button
    @click.left="makeLeftClick"
    @click.right.prevent="makeRightClick"
    class="w-7 border border-slate-500 rounded"
    :class="[
      {
        ' bg-red-200 ': props.bomb.isBomb,

        ' bg-gray-300 ': !props.bomb.valueShown,
      },
    ]"
  >
    <template v-if="props.bomb.valueShown">
      <template v-if="props.bomb.isBomb"> 💣 </template>
      <template v-else-if="props.bomb.value"> {{ bomb.value }} </template>
      <template v-else> &nbsp; </template>
    </template>
    <template v-else-if="flag"> 🚩 </template>
    <template v-else> &nbsp; </template>
  </button>
</template>

<script setup>
import { ref, watch } from "vue"

let props = defineProps(["bomb"])
let emit = defineEmits(["showFields", "showBomb"])

let flag = ref(props.bomb.flagShown)

watch(
  () => props.bomb.valueShown,
  () => {
    emit("showFields", props.bomb)
  }
)

const makeLeftClick = () => {
  if (props.bomb.isBomb) {
    emit("showBomb")
  } else {
    emit("showFields", props.bomb)
  }
}
const makeRightClick = () => {
  console.log("test")
  flag.value = !flag.value
  // flag.value = true
}
</script>
