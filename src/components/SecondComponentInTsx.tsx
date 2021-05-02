import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SecondComponentInTsx extends Vue {
  @Prop() private msg!: string;

  render() {
    return (
      <div class="hello">
        Component with TSX in .tsx
        <h1>{this.msg}</h1>
      </div>
    );
  }
}
