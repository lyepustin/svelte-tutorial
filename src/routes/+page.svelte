<script lang="ts">
  import session from '$lib/session';
	import { goto } from '$app/navigation';
	import { signInWithPopup } from 'firebase/auth';
  import { firebaseAuth, GoogleProvider } from '$lib/firebase';

  let email: string;
  let password: string;

  async function signIn() {
    const result = await signInWithPopup(firebaseAuth, GoogleProvider);
    console.log(result);
    goto('/dashboard');
  }
</script>

<div class="wrapper">
  <div class="w-full max-w-xs">
    <form class="px-8 pt-6 pb-8 bg-white shadow-md" on:submit={signIn}>
      <div class="mb-4">
        <label for="email">Email</label>
        <input bind:value={email} class="input-field" id="email" type="text" placeholder="name@acme.com"/>
      </div>
      <div class="mb-6">
        <label for="password">Password</label>
        <input bind:value={password} class="input-field" id="password" type="password" placeholder="******************"/>
      </div>
      <div class="">
        <button type="submit">Sign In</button>
      </div>
    </form>
  </div>
</div>