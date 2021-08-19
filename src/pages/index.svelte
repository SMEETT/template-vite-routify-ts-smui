<script lang="ts">
	let fun: number = 10;
	import Counter from "@/lib/Counter.svelte";
	console.log("testing some stuff");
</script>

<div class="border">
	<p>Hello</p>
	TS-World @ Vite!! {fun}
</div>
<Counter />

<style lang="scss">
	.border {
		border: 1px solid red;
		p {
			color: red;
			font-size: 20rem;
		}
	}
</style>
