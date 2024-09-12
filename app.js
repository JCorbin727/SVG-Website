function alertButton() {
  alert("Hello World")
}

document.addEventListener( 'DOMContentLoaded', () => {

  const svgElement = document.getElementById('Rectangle-1'); 
  const rectElement = svgElement.querySelector('rect');

  if (svgElement) {

    svgElement.addEventListener('click', () => {
      alert('SVG was clicked!');
    });

    svgElement.addEventListener('mouseover', () => {
      rectElement.setAttribute('style', 'fill:blue');
      console.log('Hovered: changed to blue');
    });

    svgElement.addEventListener('mouseout', () => {
      rectElement.setAttribute('style', 'fill:red');
      console.log('Hovered: changed to blue');
    });

  } else{
    console.error('SVG element not found');
  }
});
