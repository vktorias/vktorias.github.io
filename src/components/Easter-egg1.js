export default function Easter1() {
  const footer = document.querySelector('footer');
  const body = document.querySelector('body');
  let orginalColor = getComputedStyle(body).backgroundColor;

  footer.addEventListener('click', () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;

    body.style.backgroundColor = randomColor;
  });

  document.addEventListener('keydown', (event) => {
    if (event.key) {
      body.style.backgroundColor = orginalColor;
    }
  });
}
