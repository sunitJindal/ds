const files = [{
  name: 'Dir 1',
  type: 'dir',
  files: [{
    name: 'Child 1.txt',
    type: 'file'
  },{
    name: 'Child 2',
    type: 'dir',
    files: [{
        name: 'Child 1.txt',
        type: 'file'
      },{
        name: 'Child 2.png',
        type: 'file'
      },{
        name: 'Child 3.doc',
        type: 'file'
      },{
        name: 'Child 4.mp4',
        type: 'file'
      }]
  },{
    name: 'Child 3.doc',
    type: 'file'
  },{
    name: 'Child 4.mp4',
    type: 'file'
  }]
}, {
  name: 'Dir 2',
  type: 'dir',
  files: [{
    name: 'Child 1.exe',
    type: 'file'
  },{
    name: 'Child 2.png',
    type: 'file'
  },{
    name: 'Child 3.dmg',
    type: 'file'
  },{
    name: 'Child 4.woff',
    type: 'file'
  }]
}];

function traverseList(list, activeIndex) {
  const selectedIndex = activeIndex || 0;
  let str = '';
  let space = '|';
  
  for(let i = 0;i < selectedIndex; i++) {
    space += '-';
  };
  
  list.forEach((entity, index) => {
    
    str += `${space}${entity.name}\n`;
    
    if (entity.type === 'dir') {
      str += traverseList(entity.files, selectedIndex + 1)
    }
  });
   return str;
};



console.log(`\n${traverseList(files)}`);



