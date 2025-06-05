function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    if (prop === 'children') continue;

    if (prop.startsWith('on')) {
      const eventType = prop.toLowerCase().slice(2); 
      domElement.addEventListener(eventType, reactElement.props[prop]);
    } else {
      domElement.setAttribute(prop, reactElement.props[prop]);
    }
  }

  container.appendChild(domElement);
}

const reactElement = {
  type: 'button',
  props: {
    onClick: () => {
      window.location.href = 'https://google.com';
    }
  },
  children: 'Go to Google'
};

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);
