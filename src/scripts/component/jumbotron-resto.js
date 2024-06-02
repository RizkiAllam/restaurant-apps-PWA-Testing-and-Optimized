class JumbotronResto extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML += `
      <section class="homeresto">
        <h2 class="homeresto-title">Welcome</h2>
        <p class="homeresto-description">Temukan berbagai pilihan restoran terbaik di kota Anda.</p>
        <h1 class="homeresto-list-tile">List Restaurant</h1>
      </section>
    `;
  }
}

customElements.define('jumbotron-resto', JumbotronResto);
