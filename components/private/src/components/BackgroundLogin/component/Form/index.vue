<template>
	<el-form ref="formRef" :model="form" :rules="formRules" class="mt-6" size="large">
		<el-form-item :prop="props.account.username.field" v-if="props.account.username.show">
			<el-input
				v-model="form[props.account.username.field]"
				:placeholder="props.account.username.placeholder"
				:prefix-icon="User"
			>
				<template #append v-if="props.account?.code?.show">
					<el-button :loading="loading" @click="getCode">{{
						props.account?.username?.btnLabel || '获取验证码'
					}}</el-button>
				</template>
			</el-input>
		</el-form-item>
		<el-form-item :prop="props.account.password.field" v-if="props.account.password.show">
			<el-input
				v-model="form[props.account.password.field]"
				show-password
				:placeholder="props.account.password.placeholder"
				type="password"
				:prefix-icon="Lock"
			/>
		</el-form-item>
		<el-form-item :prop="props.account?.code?.field" v-if="props.account?.code?.show">
			<el-input
				v-model="form[props.account.code.field]"
				:placeholder="props.account?.code?.placeholder"
				:prefix-icon="Postcard"
			/>
		</el-form-item>
		<el-form-item>
			<el-button class="w-full" type="primary" @click="onLogin" :loading="loading">
				{{ props.submitLabel }}
			</el-button>
		</el-form-item>
	</el-form>
</template>

<script setup lang="ts">
	import type { FormInstance } from 'element-plus'
	import { User, Lock, Postcard } from '@element-plus/icons-vue'
	import useInject from '../../hooks/useInject'

	const { props, emits } = useInject()

	const formRef = ref<FormInstance>()
	const loading = ref(false)

	const form = reactive({
		[props.account.username.field]: props.account.username.default || '',
		[props.account.password.field]: props.account.password.default || '',
	})

	const formRules = reactive({
		[props.account.username.field]: props.account.username.validate,
		[props.account.password.field]: props.account.password.validate,
	})

	if (props.account?.code?.field) {
		const codeField = props.account?.code?.field
		form[codeField] = props.account.code.default || ''
		formRules[codeField] = props.account?.code?.validate
	}

	const getCode = async () => {
		if (!formRef.value) {
			return
		}
		await formRef.value.validateField(props.account?.username?.field, (valid, fields) => {
			if (valid) {
				loading.value = true
				if (!props.account?.username?.field) {
					return
				}
				emits('getCode', {
					[props.account.username.field]: form[props.account.username.field],
				})
			} else {
				console.error('error getCode!', fields)
			}
			loading.value = false
		})
	}

	const onLogin = async () => {
		if (!formRef.value) {
			return
		}
		await formRef.value.validate((valid, fields) => {
			if (valid) {
				loading.value = true
				emits('submit', toRaw(form))
			} else {
				console.error('error submit!', fields)
			}
			loading.value = false
		})
	}
</script>

<style>
	@unocss-placeholder;
</style>
