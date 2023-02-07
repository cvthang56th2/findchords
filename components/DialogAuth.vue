<script setup>
const { $swal } = useNuxtApp()
const props = defineProps({
  modelValue: Boolean
})
const emits = defineEmits(['update:modelValue'])
const isShowDialog = ref(false)
const isRegister = ref(false)
const form = ref({})
watch(() => props.modelValue, v => {
  isShowDialog.value = v
})
const close = () => {
  emits('update:modelValue', false)
}
const onConfirm = () => {
  const { userName, password, rePassword } = form.value
  if ((!userName || !password) || (isRegister.value && !rePassword)) {
    return $swal.fire({
      title: 'Error!',
      text: 'Missing Data',
      icon: 'error',
    })
  }
  close()
}
</script>
<template>
  <el-dialog v-model="isShowDialog" title="Đăng nhập" @update:model-value="close" :close-on-click-modal="false">
    <el-form :model="form">
      <el-form-item label="User Name" label-width="140px">
        <el-input v-model="form.userName" autocomplete="off" placeholder="User Name" />
      </el-form-item>
      <el-form-item label="Password" label-width="140px">
        <el-input v-model="form.password" type="password" autocomplete="off" placeholder="Password" />
      </el-form-item>
      <el-form-item v-if="isRegister" label="Re-Password" label-width="140px">
        <el-input v-model="form.rePassword" type="password" autocomplete="off" placeholder="Re-Password" />
      </el-form-item>
    </el-form>
    <div class="text-right">
    </div>
    <template #footer>
      <div class="flex justify-between items-center">
        <button class="underline text-blue-500 px-2" @click="isRegister = !isRegister">{{ isRegister ? 'Đăng nhập' : 'Đăng ký tài khoản mới'}}</button>
        <div>
          <el-button @click="close">Cancel</el-button>
          <el-button type="primary" @click="onConfirm">
            Confirm
          </el-button>
        </div>
      </div>
    </template>
  </el-dialog>
</template>