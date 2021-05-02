import { Component, Prop, Vue } from "vue-property-decorator";
import SecondComponentInTsx from "@/components/SecondComponentInTsx";

@Component
export default class ComponentInTsx extends Vue {
  @Prop() private msg!: string;

  render() {
    return (
      <div class="hello">
          <SecondComponentInTsx>
              a
          </SecondComponentInTsx>
      </div>
    );
  }
}
