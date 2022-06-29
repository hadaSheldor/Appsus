export default {
 props: ["note"],
 template: `
      <div v-if="note" class="note">
          <h4>Note Details</h4>
          <p><h1>Title:</h1><span>{{note.info.title}}</span></p>
          <p><h2>Type:</h2><span>{{note.type}}</span></p>
          <button @click="$emit('close')">Back</button>
      </div>
`,
data() {
return {};
},
created() {},
methods: {},
computed: {},
unmounted() {},
};