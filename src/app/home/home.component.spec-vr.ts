describe('Home', () => {
  it('should screenshot home', async () => {
    await page.goto('http://localhost:4200', { waitUntil: 'networkidle0' });
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});
