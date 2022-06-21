<template>
    <form @submit.prevent="submitCredentials">
		<div class="title">
          Title
        </div>
		<input 
			class="username" 
			v-model.trim="form.email" 
			type="text" 
			placeholder="Email"
			required 
		>
		<input 
			class="password" 
			v-model.trim="form.password" 
			type="password" 
			placeholder="Password"
			required
		>
		<!-- <button >Login</button> -->
		<div v-if="loadState" class="loader">Authenticating...</div>
		<button v-else type="submit">Login</button>
		<div class="error" v-if="error.mode">
			<small>Incorrect email or password.</small>
		</div>
	</form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	data(){
		return {
			form: {
				email: '',
				password: ''
			},
			error: {
				mode: false,
				message: ''
			},
			loadState: false
		}
	},
	methods: {
		...mapActions({
			login: 'auth/login'
		}),
		submitCredentials(){
			this.loadState = true;
			this.login(this.form)
			.then(()=>{
				this.error.mode = false;
				this.loadState = false;
			})
			.catch(()=>{
				this.error.mode = true;
				this.loadState = false;
			})
		}
	}

}
</script>

<style lang="scss" scoped>

</style>