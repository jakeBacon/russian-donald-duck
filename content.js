var allElements = [...document.body.getElementsByTagName('*')];

function findAndReplace() {
  allElements.forEach(element =>{
    element.childNodes.forEach(child => { 
      if (child.nodeType === 3) {
        replaceText(child);
      }
    });
  });
}

function replaceText (node) {
  let value = node.nodeValue;

  const words = [
    {
      search: 'Vladimir Putin',
      replace: 'Anders And',
    }, {
      search: 'Putin',
      replace: 'Anders And',
    }, {
      search: 'Rusland',
      replace: 'Andeby',
    }, {
      search: 'missil',
      replace: 'kosteskaft',
    }, {
      search: 'russer',
      replace: 'andebyer',
    }, {
      search: 'russisk',
      replace: 'andebysk',
    },
  ];

  words.forEach(word => {
    if (value.includes(word.search)) {
      const regex = new RegExp(word.search, 'gi');
      value = value.replace(regex, word.replace);
    }
  })

  node.nodeValue = value;
}

window.onload = findAndReplace;