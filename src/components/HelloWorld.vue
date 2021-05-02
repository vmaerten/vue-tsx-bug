<script lang="tsx">
import { Component, Prop, Vue } from "vue-property-decorator";
import ComponentInTsx from "@/components/ComponentInTsx";
import { VNode } from "vue";
import SecondComponentInTsx from "@/components/SecondComponentInTsx";
@Component({
  components: { ComponentInTsx, SecondComponentInTsx },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  render(): VNode {
    return (
      <div class="hello">
        <ComponentInTsx />
        <SecondComponentInTsx />
        <h1>{this.msg}</h1>
      </div>
    );
  }
}
</script>
