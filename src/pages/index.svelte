<script lang="ts">
	let typescriptNumber: number = 10;
	console.log("A TypeScript number:", typescriptNumber);
	import { url } from "@roxi/routify";
	console.log($url());

	// Svelte Material UI imports
	import Button, { Label, Icon } from "@smui/button";
	import Checkbox from "@smui/checkbox";
	import FormField from "@smui/form-field";
	import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
	import IconButton from "@smui/icon-button";

	let checked = false;
</script>

<div class="wrapper">
	<div class="mdc-typography--headline1">Welcome!</div>
	<h1>Vite + Routify + TypeScript + Svelte Material UI</h1>
	<div class="wrapper-icons">
		<a href="https://vitejs.dev/" target="_blank"> <img src="/images/logo_vite.png" alt="" /> </a>
		<a href="https://routify.dev/" target="_blank"><img src="/images/logo_routify.png" alt="" /></a>
		<a href="https://www.typescriptlang.org/" target="_blank"><img src="/images/logo_ts.png" alt="" /></a>
		<a href="https://sveltematerialui.com/" target="_blank"><img src="/images/logo_md.png" alt="" /></a>
	</div>
	<div class="mdc-typography--body1" style="margin-bottom: 1rem">
		For more detailed information check<a href="https://github.com/SMEETT/template-vite-routify-ts-smui/blob/main/README.md">README</a>
	</div>
	<div class="saperator" />
	<div class="wrapper-ui-elements">
		<div class="top-app-bar-container" style="margin-bottom: 1rem">
			<TopAppBar color="primary" variant="static">
				<Row>
					<Section>
						<IconButton class="material-icons">menu</IconButton>
						<Title>Menu</Title>
					</Section>
					<Section align="end" toolbar>
						<IconButton class="material-icons" aria-label="Download">file_download</IconButton>
						<IconButton class="material-icons" aria-label="Print this page">print</IconButton>
						<IconButton class="material-icons" aria-label="Bookmark this page">bookmark</IconButton>
					</Section>
				</Row>
			</TopAppBar>
		</div>

		<Button variant="unelevated" style="margin-bottom: 1rem">
			<Label>Primary</Label>
		</Button>
		<Button color="secondary" variant="raised" style="margin-bottom: 1rem">
			<Label>Secondary Raised</Label>
		</Button>

		<Button variant="outlined" style="margin-bottom: 1rem">
			<Label>Outlined</Label>
		</Button>

		<Button color="secondary" variant="outlined" style="margin-bottom: 1rem">
			<Label>Outlined Secondary</Label>
		</Button>

		<FormField style="margin-bottom: 1rem">
			<Checkbox bind:checked />
			<span slot="label">Checkbox</span>
		</FormField>

		<Button style="margin-bottom: 1rem">
			<Icon class="material-icons">search</Icon>
			<Label>Leading Icon</Label>
		</Button>

		<div class="saperator" />

		<div class="wrapper-links">
			<a href="https://github.com/Oxova/svelte-vite-template" target="_blank">Original Vite-Template by Oxova</a>
			<a href="https://fonts.google.com/icons" target="_blank">Google Icons</a>
		</div>
	</div>
</div>

<!-- <Counter /> -->
<style lang="scss">
	.wrapper-links {
		a {
			margin-left: 1rem;
		}
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 1rem;
		margin: 1rem 0rem;
		padding: 2rem;
	}

	.wrapper-icons {
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 70%;
		margin-bottom: 2rem;
	}

	.wrapper-ui-elements {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		margin: 0 10rem;
		width: 100%;
	}
</style>
