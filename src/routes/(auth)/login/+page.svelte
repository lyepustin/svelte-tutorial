<script lang="ts">
	import { goto } from "$app/navigation";

	import { signInWithPopup } from 'firebase/auth';

  export let data;

  let email: string;
  let password: string;

  async function signIn() {
    const result = await signInWithPopup(data.auth, data.google);
    console.log(result);
    goto("/dashboard")
  }

</script>

<div class="w-screen h-screen justify-center flex items-center bg-gray-100">
  <form class="p-8 bg-white shadow-md rounded-lg" on:submit|preventDefault={signIn}>
    <div class="mb-4">
      <label for="email">Email</label>
      <input bind:value={email} id="email" type="text" placeholder="name@acme.com"/>
    </div>
    <div class="mb-6">
      <label for="password">Password</label>
      <input bind:value={password} id="password" type="password" placeholder="******************"/>
    </div>
    <div class="">
      <button type="submit">Sign In</button>
    </div>
  </form>
</div>