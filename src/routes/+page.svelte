<script lang="ts">
    import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged } from "firebase/auth";
    import { auth } from "$lib/firebase";

    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    onMount(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                goto("/home");
            }
        })
    });

    let userEmail = $state("");
    let userPassword = $state("");

    async function signInWithEmail() {
        try {
            // Sign in with email and password
            const result = await signInWithEmailAndPassword(auth, userEmail, userPassword);

            // Log user information
            const user = result.user;

            console.log("User signed in:", user);
            goto("/home");
        } catch (error) {
            // Handle errors here
            console.error("Error signing in with Google:", error);
        }
    }

    async function signInWithGoogle() {
        // Add login provider
        const provider = new GoogleAuthProvider();

        try {
            // Sign in with a popup
            const result = await signInWithPopup(auth, provider);

            // Log user information
            const user = result.user;

            console.log("User signed in:", user);
            goto("/home");
        } catch (error) {
            // Handle errors here
            console.error("Error signing in with Google:", error);
        }
    }

    async function signInWithGitHub() {
        // Add login provider
        const provider = new GithubAuthProvider();

        try {
            // Sign in with a popup
            const result = await signInWithPopup(auth, provider);

            // Log user information
            const user = result.user;

            console.log("User signed in:", user);
            goto("/home");
        } catch (error) {
            // Handle errors here
            console.error("Error signing in with GitHub:", error);
        }
    }
</script>

<main>
    <!-- CONNECTING BAR -->
    <div class="flex flex-col items-center p-4 bg-white/80 z-10 relative">
        <h3 class="text-2xl">Connecting to <svg class="inline" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="M120-840h320v320H120v-320Zm80 80v160-160Zm320-80h320v320H520v-320Zm80 80v160-160ZM120-440h320v320H120v-320Zm80 80v160-160Zm440-80h80v120h120v80H720v120h-80v-120H520v-80h120v-120Zm-40-320v160h160v-160H600Zm-400 0v160h160v-160H200Zm0 400v160h160v-160H200Z"/></svg></h3>
        <p>Sign in with your account to access the Kapibase Dashboard</p>
    </div>

    <!-- BACKGROUND IMAGE -->
    <img class="object-cover h-[96.5%] w-full absolute top-0" src="https://ok6static.oktacdn.com/fs/bco/7/fs0z2o4lk2InWEMMN2p7" alt="Sign In Background" />

    <!-- SIGN IN FORM -->
    <div class="top-[50%] left-[50%] absolute translate-x-[-50%] translate-y-[-50%] bg-base-100 p-6 flex flex-col items-center rounded-2xl gap-4 w-[400px]">

        <h1 class="text-4xl font-bold">KAPIBASE</h1>
        <h2 class="text-1xl">Sign in to your account using your Auth Provider.</h2>

        <!-- SIGN IN WITH EMAIL -->
        <fieldset class="fieldset w-full">
            <legend class="fieldset-legend">Email</legend>
            <input type="text" class="input w-full" placeholder="example@pqar.net" bind:value={userEmail} />
        </fieldset>
        <fieldset class="fieldset w-full">
            <legend class="fieldset-legend">Password</legend>
            <input type="password" class="input w-full" placeholder="1234@AbCd" bind:value={userPassword} />
        </fieldset>

        <button class="btn btn-xl btn-primary w-full" onclick={signInWithEmail}>Sign In With Email</button>

        <p class="text-sm">------ or ------</p>

        <!-- SIGN IN WITH IdP -->
        <button class="btn btn-soft btn-xl btn-accent w-full" onclick={signInWithGoogle}>Sign In With Google</button>
        <button class="btn btn-soft btn-xl btn-secondary w-full" onclick={signInWithGitHub}>Sign In With GitHub</button>
    </div>
</main>