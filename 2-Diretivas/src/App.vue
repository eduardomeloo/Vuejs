<template>
	<div>
		<title>Diretivas</title>
		<h1>Diretivas do Vue</h1>
		<div v-if="false"><VifVelse /></div>
		<div v-if="false"><Vshow /></div>
		<div v-if="false"><Vtext /></div>
		<div v-if="false"><Vhtml /></div>
		<div v-if="false"><Vonce /></div>
		<div v-if="false"><Vfor /></div>
		<div v-if="false"><Vbind /></div>
		<div v-if="false"><Vmodel /></div>
		<div v-if="false"><Von /></div>
		<div v-if="false">
			<Vslot>
				<template v-slot:header>
					<h2>Esse é o Header do site</h2>
				</template>
			</Vslot>
			<Vslot>
				<template #paragrafo>
					Eduardo Melo - Components
				</template>
			</Vslot>
		</div>
		<div v-if="false"><Vpre /></div>
		<div v-if="false"><Vcloak /></div>
		<div v-if="false"><CustomDirectives /></div>
		<div v-if="false"><CustomDirectivesParams /></div>
		<div v-if="true"><CustomDirectivesArgs /></div>
		
		
	</div>
</template>

<script>
import VifVelse from "./components/VifVelse.vue";
import Vshow from "./components/Vshow.vue";
import Vtext from "@/components/Vtext";
import Vhtml from "@/components/Vhtml";
import Vonce from "@/components/Vonce";
import Vfor from "@/components/Vfor";
import Vbind from "@/components/Vbind";
import Vmodel from "@/components/Vmodel";
import Von from "@/components/Von";
import Vslot from "@/components/Vslot";
import Vpre from "@/components/Vpre";
import Vcloak from "@/components/Vcloak";
import CustomDirectives from "@/components/CustomDirectives";
import CustomDirectivesParams from "@/components/CustomDirectivesParams";
import CustomDirectivesArgs from "@/components/CustomDirectivesArgs";

export default {
  name: "App",
  components: {
    VifVelse,
    Vshow,
    Vtext,
    Vhtml,
    Vonce,
    Vfor,
    Vbind,
    Vmodel,
    Von,
	Vslot,
	Vpre,
	Vcloak,
	CustomDirectives,
	CustomDirectivesParams,
	CustomDirectivesArgs
  },
};
</script>

<style>
</style>
