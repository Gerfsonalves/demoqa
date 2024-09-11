afterEach(function () {
    // Captura de tela após cada teste
    cy.screenshot(`screenshot-${this.currentTest.title}`, {
        capture: 'runner' // Captura a tela inteira do navegador
    });
});