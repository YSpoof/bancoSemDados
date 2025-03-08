import { Component, input } from '@angular/core';

@Component({
  selector: 'app-intro-modal',
  imports: [],
  template: `
    <div
      class="rounded-md outline p-4 bg-vb-black/80 backdrop-blur-md max-w-48 mx-auto"
    >
      <h2 class="text-2xl text-center mb-4">Cadastre-se já</h2>
      <p>
        Faça parte do nosso time e aproveitar as vantagens que só o VestBank
        pode oferecer.
      </p>
      <button
        class="transition-all mt-4 w-full px-6 py-4 cursor-pointer bg-vb-tertiary hover:bg-vb-secondary active:scale-95"
      >
        Cadastrar
      </button>
    </div>
  `,
})
export class IntroModalComponent {}
